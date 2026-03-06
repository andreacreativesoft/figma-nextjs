"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

interface TrackingSettings {
  facebookPixelId: string;
  googleTagId: string;
  googleAnalyticsId: string;
  customHeadCode: string;
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

  return (
    <>
      {/* Google Tag Manager */}
      {settings.googleTagId && (
        <>
          <Script
            id="gtm-script"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${settings.googleTagId}');`,
            }}
          />
        </>
      )}

      {/* Google Analytics */}
      {settings.googleAnalyticsId && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${settings.googleAnalyticsId}`}
            strategy="afterInteractive"
          />
          <Script
            id="ga-script"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${settings.googleAnalyticsId}');`,
            }}
          />
        </>
      )}

      {/* Facebook Pixel */}
      {settings.facebookPixelId && (
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
fbq('init', '${settings.facebookPixelId}');
fbq('track', 'PageView');`,
          }}
        />
      )}

      {/* Custom Head Code */}
      {settings.customHeadCode && (
        <Script
          id="custom-head"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: settings.customHeadCode }}
        />
      )}
    </>
  );
}
