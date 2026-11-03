/**
 * Eversafe Financial - Cookie Consent Manager
 * Native GoHighLevel (ghl_cookie) & Meta Pixel Consent Integration
 *
 * Compliance Specifications:
 * 1. Native GoHighLevel 'ghl_cookie' provider:
 *    - Uses standard 'cookie-config' cookie recognized natively by GoHighLevel's form_embed.js
 *    - 'all': authorizes all categories (marketing, analytics, necessary, advertisement, functional)
 *    - 'essential': restricts to essential/necessary, strictly withholding marketing & analytics
 *    - null / undefined: pending; third-party tracking in GHL embedded forms is withheld
 * 2. Meta Pixel gating:
 *    - Meta Pixel (1105000412408954) is NEVER initialized, loaded, or triggered without explicit marketing consent
 * 3. Zero PII & Zero Health Data:
 *    - No form responses, medical conditions, or personal identifying data are ever shared
 * 4. User Choice & Revocation:
 *    - Users can accept all, reject non-essential, or modify preferences at any time
 */

export type ConsentLevel = 'all' | 'essential';

export const GHL_COOKIE_NAME = 'cookie-config';
export const LOCAL_STORAGE_KEY = 'esf_cookie_consent_status';

/**
 * Reads the current consent level from cookie-config, falling back to localStorage.
 * Returns 'all', 'essential', or null if the user has not made a choice yet.
 */
export function getCookieConsent(): ConsentLevel | null {
  if (typeof document === 'undefined') return null;

  try {
    const escapedName = GHL_COOKIE_NAME.replace(/([.$?*|{}()[\]\\/+^])/g, '\\$1');
    const match = document.cookie.match(new RegExp('(?:^|; )' + escapedName + '=([^;]*)'));
    if (match) {
      const val = decodeURIComponent(match[1]).trim().toLowerCase();
      if (val === 'all' || val === 'essential') {
        return val;
      }
    }
  } catch {
    // ignore cookie read error
  }

  try {
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (stored === 'all' || stored === 'essential') {
      return stored as ConsentLevel;
    }
  } catch {
    // ignore storage read error
  }

  return null;
}

/**
 * Returns true only if marketing/analytics consent has been explicitly granted.
 */
export function hasMarketingConsent(): boolean {
  return getCookieConsent() === 'all';
}

/**
 * Persists the user's cookie consent choice to the 'cookie-config' cookie
 * (for GoHighLevel form_embed.js compliance) and notifies subscribers.
 */
export function saveCookieConsent(level: ConsentLevel): void {
  if (typeof document === 'undefined') return;

  const oneYearInSeconds = 365 * 24 * 60 * 60;
  // Write cookie-config at root path with 1 year validity and SameSite=Lax
  document.cookie = `${GHL_COOKIE_NAME}=${level}; path=/; max-age=${oneYearInSeconds}; SameSite=Lax`;

  try {
    localStorage.setItem(LOCAL_STORAGE_KEY, level);
  } catch {
    // ignore storage write error
  }

  // Notify components and listeners across the application
  if (typeof window !== 'undefined') {
    window.dispatchEvent(
      new CustomEvent('esf_cookie_consent_changed', {
        detail: { level },
      })
    );
  }
}

/**
 * Custom event helper to trigger opening the Cookie Preferences modal from anywhere.
 */
export function openCookiePreferences(): void {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('esf_open_cookie_preferences'));
  }
}
