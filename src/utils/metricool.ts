/**
 * Eversafe Financial - Metricool Web Analytics Integration Utility
 * Hash: 1ebf57fd6a11207605831fe095fccb84
 * Tracker URL: https://tracker.metricool.com/resources/be.js
 *
 * Privacy & Regulatory Compliance:
 * 1. Cookieless Tracking:
 *    - Metricool's beTracker does not write or read tracking cookies on the user's device.
 *    - Operates as lightweight aggregated site analytics (page URL, referrer, timestamp).
 * 2. Strict Privacy & Zero PII:
 *    - No names, emails, phones, form responses, or health/insurance data are ever shared.
 * 3. Execution Scope:
 *    - Applies to the main website (/) and the ACA 2027 landing page (/aca-2027/).
 *    - Excluded from thank-you / confirmation pages (/aca-2027/gracias/) to prevent
 *      counting post-submission confirmations as commercial landing traffic.
 * 4. Deduplication & Singleton Execution:
 *    - Injected strictly once per page load to ensure visit counts are accurate and not duplicated.
 */

declare global {
  interface Window {
    beTracker?: {
      t: (params: { hash: string }) => void;
    };
    _esfMetricoolLoaded?: boolean;
  }
}

export const METRICOOL_HASH = '1ebf57fd6a11207605831fe095fccb84';
export const METRICOOL_SRC = 'https://tracker.metricool.com/resources/be.js';

/**
 * Initializes the Metricool web analytics tracker safely and strictly once per page load.
 */
export function initMetricool(): void {
  if (typeof window === 'undefined') return;

  // Requirement 7: Avoid unnecessary tracking on confirmation / thank-you pages
  const pathname = window.location.pathname.toLowerCase();
  if (pathname.includes('/gracias')) {
    return;
  }

  // Requirement 1: Guard against duplicate script injection or repeated visit tracking
  if (window._esfMetricoolLoaded || document.querySelector(`script[src="${METRICOOL_SRC}"]`)) {
    return;
  }
  window._esfMetricoolLoaded = true;

  try {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = METRICOOL_SRC;
    script.async = true;

    const onLoad = () => {
      try {
        if (window.beTracker && typeof window.beTracker.t === 'function') {
          window.beTracker.t({ hash: METRICOOL_HASH });
        }
      } catch {
        // Silently handle any edge-case execution error without affecting website operation
      }
    };

    script.onload = onLoad;
    (script as any).onreadystatechange = function () {
      if ((this as any).readyState === 'complete' || (this as any).readyState === 'loaded') {
        onLoad();
      }
    };

    const firstScript = document.getElementsByTagName('script')[0] || document.head;
    if (firstScript && firstScript.parentNode) {
      firstScript.parentNode.insertBefore(script, firstScript);
    } else {
      document.head.appendChild(script);
    }
  } catch {
    // Fail safely if DOM is inaccessible
  }
}
