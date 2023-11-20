import Script from "next/script"

const Hotjar = () => {
    return (
        <>
        <Script
        id="hj"
        dangerouslySetInnerHTML={{
          __html: `
                  (function(h,o,t,j,a,r){
                      h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                      h._hjSettings={hjid:3570841,hjsv:6};
                      a=o.getElementsByTagName('head')[0];
                      r=o.createElement('script');r.async=1;
                      r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                      a.appendChild(r);
                    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`,
                  }}
                  />
      <Script
        id="fb-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', ${process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID || ""});
            fbq('track', 'PageView');
            `,
          }}
      />
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-6T6HHESNG2"
        ></Script>
      <Script
        id="google-analytics"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-6T6HHESNG2');`,
        }}
        />
              <Script
        id="hotmart_launcher_script"
        dangerouslySetInnerHTML={{
          __html: `(function(l,a,u,n,c,h,e,r){l['HotmartLauncherObject']=c;l[c]=l[c]||function(){
			(l[c].q=l[c].q||[]).push(arguments)},l[c].l=1*new Date();h=a.createElement(u),
			e=a.getElementsByTagName(u)[0];h.async=1;h.src=n;e.parentNode.insertBefore(h,e)
			})(window,document,'script','//launcher.hotmart.com/launcher.js','hot');

			hot('account','32aba353-3c4c-3d94-9d63-eb652a9ca8ee');`,
        }}
      />

        </>
    )
}

export default Hotjar