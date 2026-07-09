import React, { useEffect } from "react";

interface GHLQuoteFormEmbedProps {
  lang: "en" | "es";
}

export function GHLQuoteFormEmbed({ lang }: GHLQuoteFormEmbedProps) {
  useEffect(() => {
    const scriptSrc = "https://link.msgsndr.com/js/form_embed.js";
    let script = document.querySelector(`script[src="${scriptSrc}"]`) as HTMLScriptElement | null;

    if (!script) {
      script = document.createElement("script");
      script.src = scriptSrc;
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  // Configure depending on language
  const isEs = lang === "es";
  const iframeSrc = isEs 
    ? "https://api.leadconnectorhq.com/widget/form/b6SQ8lCqfkQyf7hQqbiB"
    : "https://api.leadconnectorhq.com/widget/form/wG7ZEO9z2NoAPHbYjclH";
  
  const iframeId = isEs
    ? "inline-b6SQ8lCqfkQyf7hQqbiB"
    : "inline-wG7ZEO9z2NoAPHbYjclH";

  const formName = isEs
    ? "Eversafe - Free Quote Form ES"
    : "Eversafe - Free Quote Form EN";

  const formId = isEs
    ? "b6SQ8lCqfkQyf7hQqbiB"
    : "wG7ZEO9z2NoAPHbYjclH";

  const title = isEs
    ? "Eversafe - Free Quote Form ES"
    : "Eversafe - Free Quote Form EN";

  return (
    <div className="w-full bg-white rounded-lg shadow-sm p-2 md:p-3 overflow-hidden">
      <div className="w-full min-h-[722px] sm:min-h-[740px] md:min-h-[760px] relative" key={lang}>
        <iframe
          src={iframeSrc}
          style={{ width: "100%", height: "100%", minHeight: "722px", border: "none", borderRadius: "8px" }}
          id={iframeId} 
          data-layout="{'id':'INLINE'}"
          data-trigger-type="alwaysShow"
          data-trigger-value=""
          data-activation-type="alwaysActivated"
          data-activation-value=""
          data-deactivation-type="neverDeactivate"
          data-deactivation-value=""
          data-form-name={formName}
          data-height="722"
          data-layout-iframe-id={iframeId}
          data-form-id={formId}
          title={title}
        />
      </div>
    </div>
  );
}
