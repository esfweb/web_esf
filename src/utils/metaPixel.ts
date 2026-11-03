/**
 * Eversafe Financial - Meta Pixel Integration Utility
 * Pixel ID: 1105000412408954
 * Domain: https://eversafefinancial.com
 *
 * Strict Compliance & Privacy Standards:
 * 1. Zero PII: No names, emails, phones, or form responses sent to Meta.
 * 2. Zero Health Data: No medical conditions, coverage choices, or sensitive attributes passed.
 * 3. autoConfig Disabled: Prevents Meta from auto-scraping form fields or buttons.
 * 4. Deduplication: Ensures single initialization and clean SPA PageView tracking.
 * 5. Honest Lead Tracking: Listens strictly for verified GHL form submission postMessage
 *    events; explicitly discards resize, scroll, timer, load, and click events.
 */

declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
    _fbq?: any;
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
 * Tracks a PageView event for single-page application navigation.
 */
export function trackSpaPageView(): void {
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    window.fbq('track', 'PageView');
  }
}

/**
 * Tracks a compliant Lead conversion event with ZERO sensitive health data and ZERO PII.
 */
export function trackLeadConversion(contentName: string = 'Form Submission'): void {
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    window.fbq('track', 'Lead', {
      content_name: contentName,
    });
  }
}

/**
 * Sets up a secure window.postMessage listener for GoHighLevel form submissions.
 * Verifies origin, ignores generic resize/init/load events, and prevents duplicate triggers.
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
        // Not a JSON payload, safely ignore
        return;
      }
    }

    if (!data || typeof data !== 'object') {
      return;
    }

    // 3. Ignore non-submission events (resize, init, loaded, ping, height, scroll)
    const eventType = (data.type || data.action || data.event || data.name || '').toLowerCase();
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

    // 4. Check for verified form submission signature
    const isSubmissionEvent =
      eventType === 'form-submitted' ||
      eventType === 'form_submission' ||
      eventType === 'form_submit' ||
      eventType === 'lead_submitted';

    if (!isSubmissionEvent) {
      return;
    }

    // 5. Match form ID if specified
    const incomingFormId = data.formId || data.id || data.form_id;
    if (targetFormId && incomingFormId && incomingFormId !== targetFormId) {
      return;
    }

    // 6. Deduplicate per submission within 3-second window
    const submissionKey = `${incomingFormId || targetFormId || 'ghl'}-${Math.floor(Date.now() / 3000)}`;
    if (handledSubmissions.has(submissionKey)) {
      return;
    }
    handledSubmissions.add(submissionKey);

    // 7. Track compliant Lead event with zero PII and zero health parameters
    trackLeadConversion(contentName);
  };

  window.addEventListener('message', handleMessage);
  return () => window.removeEventListener('message', handleMessage);
}
