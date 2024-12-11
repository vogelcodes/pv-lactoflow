import { GoogleTagManager } from "@next/third-parties/google";
import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import localFont from "next/font/local";

import { api } from "@/utils/api";

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

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <style jsx global>{`
        html {
          font-family: ${metro.style.fontFamily};
        }
      `}</style>
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
        <GoogleTagManager gtmId="GTM-WDWRL83P" />
      </main>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
