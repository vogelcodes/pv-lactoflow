import { type AppType } from "next/app";
import localFont from "next/font/local";

import "@/styles/globals.css";
import Script from "next/script";

const metro = localFont({
  src: [
    {
      path: "../styles/Metropolis-Medium.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../styles/Metropolis-Bold.otf",
      weight: "600",
      style: "bold",
    },
    {
      path: "../styles/Metropolis-Black.otf",
      weight: "700",
      style: "extrabold",
    },
  ],
  variable: "--font-metro",
});

const MyApp: AppType = ({ Component, pageProps: { ...pageProps } }) => {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${metro.style.fontFamily};
        }
      `}</style>
      <Script
        async
        src="https://umami-production-bb17.up.railway.app/script.js"
        data-website-id="d794a2e3-7454-4150-add4-b2578e44b3d4"
      />
      <Script
        type="text/javascript"
        id="MSClarity"
        dangerouslySetInnerHTML={{
          __html: `
                (function(c,l,a,r,i,t,y){
                    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                })(window, document, "clarity", "script", "kj8oov4zlu");`,
        }}
      />

      <main
        className={`${metro.variable} flex min-h-screen flex-col items-center bg-[#122e49] font-sans`}
      >
        <Component {...pageProps} />
      </main>
    </>
  );
};

export default MyApp;
