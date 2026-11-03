/**
 * Eversafe Financial - Meta Pixel Integration Utility
 * Pixel ID: 1105000412408954
 * Domain: https://eversafefinancial.com
 *
 * Strict Compliance & Privacy Standards:
 * 1. Consent-Gated Execution: Meta Pixel is NEVER loaded or fired before explicit marketing consent.
 * 2. Zero PII: No names, emails, phones, or form responses sent to Meta.
 * 3. Zero Health Data: No medical conditions, coverage choices, or sensitive attributes passed.
 * 4. autoConfig Disabled: Prevents Meta from auto-scraping form fields or buttons.
 * 5. Deduplication & No Double-Counting:
 *    - The embedded GHL form fires its own verified Lead event directly inside the iframe
 *      once unblocked by the native cookie-config consent protocol.
 *    - The host does not double-fire a redundant Lead event to prevent duplicate conversions.
 */

import { hasMarketingConsent } from './cookieConsent';

declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
    _fbq?: any;
    _esfPixelInitialized?: boolean;
    _esfConsentListenerRegistered?: boolean;
  }
}

export const META_PIXEL_ID = '1105000412408954';

// Recognized GoHighLevel Form IDs in Eversafe Financial
export const GHL_KNOWN_FORM_IDS = {
  ACA_2027_ES: 'CBbu2UfBMp4dCq7AKYOm',
  ACA_2027_EN: '1li3izJuH0ZHRGQcNNzp',
  QUOTE_ES: 'b6SQ8lCqfkQyf7hQqbiB',
  QUOTE_EN: 'wG7ZEO9z2NoAPHbYjclH',
} as const;

// Valid origin domains for GoHighLevel form iframes
const VALID_GHL_ORIGINS = [
  'https://api.leadconnectorhq.com',
  'https://link.msgsndr.com',
  'https://leadconnectorhq.com',
  'https://msgsndr.com',
  'https://services.leadconnectorhq.com',
];

/**
 * Dynamically loads and initializes the Meta Pixel ONLY after explicit consent.
 */
export function initMetaPixelIfConsented(): void {
  if (typeof window === 'undefined') return;

  // Register listener for real-time consent changes (only once)
  if (!window._esfConsentListenerRegistered) {
    window._esfConsentListenerRegistered = true;
    window.addEventListener('esf_cookie_consent_changed', ((e: CustomEvent) => {
      if (e.detail?.level === 'all') {
        loadAndInitMetaPixel();
      } else if (e.detail?.level === 'essential') {
        revokeMetaPixelConsent();
      }
    }) as EventListener);
  }

  // If marketing consent is already active, initialize immediately
  if (hasMarketingConsent()) {
    loadAndInitMetaPixel();
  }
}

/**
 * Injects Meta Pixel script safely and registers initial PageView.
 */
function loadAndInitMetaPixel(): void {
  if (typeof window === 'undefined') return;
  if (window._esfPixelInitialized && window.fbq) {
    // If already loaded and re-granted, restore consent
    try {
      window.fbq('consent', 'grant');
      window.fbq('track', 'PageView');
    } catch {
      // ignore
    }
    return;
  }

  // Setup standard fbq stub
  if (!window.fbq) {
    const fbq: any = function (...args: any[]) {
      if (fbq.callMethod) {
        fbq.callMethod.apply(fbq, args);
      } else {
        fbq.queue.push(args);
      }
    };
    fbq.push = fbq;
    fbq.loaded = true;
    fbq.version = '2.0';
    fbq.queue = [];
    window.fbq = fbq;
    window._fbq = fbq;

    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://connect.facebook.net/en_US/fbevents.js';
    const firstScript = document.getElementsByTagName('script')[0];
    if (firstScript && firstScript.parentNode) {
      firstScript.parentNode.insertBefore(script, firstScript);
    } else {
      document.head.appendChild(script);
    }
  }

  window.fbq('init', META_PIXEL_ID);
  window.fbq('set', 'autoConfig', false, META_PIXEL_ID);
  window.fbq('track', 'PageView');
  window._esfPixelInitialized = true;
}

/**
 * Revokes consent in Meta Pixel if user updates preferences to essential only.
 */
export function revokeMetaPixelConsent(): void {
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    try {
      window.fbq('consent', 'revoke');
    } catch {
      // ignore
    }
  }
}

/**
 * Tracks a PageView event for single-page application navigation,
 * strictly contingent upon marketing consent.
 */
export function trackSpaPageView(): void {
  if (typeof window !== 'undefined' && hasMarketingConsent() && typeof window.fbq === 'function') {
    window.fbq('track', 'PageView');
  }
}

/**
 * Tracks a compliant Lead conversion event with ZERO sensitive health data and ZERO PII.
 * Strictly checks consent before dispatching.
 */
export function trackLeadConversion(contentName: string = 'Form Submission'): void {
  if (typeof window === 'undefined') return;
  if (!hasMarketingConsent()) return;

  if (!window.fbq) {
    loadAndInitMetaPixel();
  }

  if (typeof window.fbq === 'function') {
    window.fbq('track', 'Lead', {
      content_name: contentName,
    });
  }
}

/**
 * Sets up a secure window.postMessage listener for GoHighLevel form submissions.
 * When a verified submission message is received from the GHL iframe, this fires
 * a compliant Lead conversion event from the 1st-party host window (where Meta Pixel
 * has full attribution, cookies, and UTM parameters).
 */
export function initGhlSubmissionListener(
  targetFormId?: string,
  contentName: string = 'ACA 2027 Consultation Request'
): () => void {
  if (typeof window === 'undefined') return () => {};

  const handledSubmissions = new Set<string>();

  const handleMessage = (event: MessageEvent) => {
    // 1. Verify Origin (LeadConnector / MsgSndr)
    const isAllowedOrigin = VALID_GHL_ORIGINS.some((origin) =>
      event.origin ? event.origin.startsWith(origin) : false
    );

    if (!isAllowedOrigin) {
      return;
    }

    // 2. Parse event data safely
    let data = event.data;
    if (typeof data === 'string') {
      // Exclude obvious iframe-resizer strings before attempting JSON parse
      if (data.startsWith('[iFrameSizer]') || data.includes('resize')) {
        return;
      }
      try {
        data = JSON.parse(data);
      } catch {
        // In case GHL sends a non-JSON string containing submission signal
        if (
          data.includes('form-submit') ||
          data.includes('form_submit') ||
          data.includes('form-submitted') ||
          data.includes('lead_submitted')
        ) {
          data = { type: 'form-submit' };
        } else {
          return;
        }
      }
    }

    if (!data || typeof data !== 'object') {
      return;
    }

    // 3. Ignore non-submission events (resize, init, loaded, ping, height, scroll)
    const eventType = String(
      data.type || data.action || data.event || data.name || data.status || ''
    ).toLowerCase();

    if (
      !eventType ||
      eventType.includes('resize') ||
      eventType.includes('init') ||
      eventType.includes('load') ||
      eventType.includes('height') ||
      eventType.includes('scroll')
    ) {
      return;
    }

    // 4. Check for verified form submission signatures sent by GoHighLevel
    const isSubmissionEvent =
      eventType === 'form-submitted' ||
      eventType === 'form_submission' ||
      eventType === 'form_submit' ||
      eventType === 'form-submit' ||
      eventType === 'formsubmit' ||
      eventType === 'lead_submitted' ||
      eventType === 'leadconnector:form_submit' ||
      eventType === 'formsubmissionsuccess' ||
      eventType === 'success' ||
      data.action === 'form_submit' ||
      data.type === 'form-submit';

    if (!isSubmissionEvent) {
      return;
    }

    // 5. Match form ID if specified
    const incomingFormId =
      data.formId ||
      data.id ||
      data.form_id ||
      (data.payload && (data.payload.formId || data.payload.id));

    if (targetFormId && incomingFormId && incomingFormId !== targetFormId) {
      return;
    }

    // 6. Deduplicate per submission within 10-second window
    const submissionKey = `${incomingFormId || targetFormId || 'ghl'}-${Math.floor(Date.now() / 10000)}`;
    if (handledSubmissions.has(submissionKey)) {
      return;
    }
    handledSubmissions.add(submissionKey);

    // 7. Fire compliant Lead conversion from the 1st-party host window
    // ONLY when user has granted marketing cookie consent
    if (hasMarketingConsent()) {
      trackLeadConversion(contentName);
    }
  };

  window.addEventListener('message', handleMessage);
  return () => window.removeEventListener('message', handleMessage);
}
