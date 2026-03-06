"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

interface TrackingSettings {
  facebookPixelId: string;
  googleTagId: string;
  googleAnalyticsId: string;
  customHeadCode: string;
}

const TRACKING_ID_RE = /^[A-Za-z0-9-]+$/;

function isValidTrackingId(id: string): boolean {
  return TRACKING_ID_RE.test(id);
}

export default function TrackingScripts() {
  const [settings, setSettings] = useState<TrackingSettings | null>(null);

  useEffect(() => {
    fetch("/api/settings")
      .then((r) => r.json())
      .then((data) => setSettings(data))
      .catch(() => {});
  }, []);

  if (!settings) return null;

  const safeGtmId = settings.googleTagId && isValidTrackingId(settings.googleTagId) ? settings.googleTagId : "";
  const safeGaId = settings.googleAnalyticsId && isValidTrackingId(settings.googleAnalyticsId) ? settings.googleAnalyticsId : "";
  const safeFbId = settings.facebookPixelId && isValidTrackingId(settings.facebookPixelId) ? settings.facebookPixelId : "";

  return (
    <>
      {/* Google Tag Manager */}
      {safeGtmId && (
        <>
          <Script
            id="gtm-script"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${safeGtmId}');`,
            }}
          />
        </>
      )}

      {/* Google Analytics */}
      {safeGaId && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${safeGaId}`}
            strategy="afterInteractive"
          />
          <Script
            id="ga-script"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${safeGaId}');`,
            }}
          />
        </>
      )}

      {/* Facebook Pixel */}
      {safeFbId && (
        <Script
          id="fb-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${safeFbId}');
fbq('track', 'PageView');`,
          }}
        />
      )}

      {/* Custom Head Code - REMOVED: dangerouslySetInnerHTML was a malware injection vector.
         The customHeadCode field allowed arbitrary JS execution, which was exploited
         to inject a redirect to Ferronnerie-fano.be. Use specific tracking ID fields instead. */}
    </>
  );
}
