import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import localFont from 'next/font/local'

import { api } from "@/utils/api";

import "@/styles/globals.css";
import Script from "next/script";

const metro = localFont({
  src: [
    {
      path: '../styles/Metropolis-Medium.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../styles/Metropolis-Bold.otf',
      weight: '600',
      style: 'bold',
    },
    {
      path: '../styles/Metropolis-Black.otf',
      weight: '700',
      style: 'extrabold',
    },
    
  ],
  variable: '--font-metro'
})

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
              <Script async src="https://umami-production-bb17.up.railway.app/script.js" data-website-id="d794a2e3-7454-4150-add4-b2578e44b3d4"/>

      <main className={`${metro.variable} flex min-h-screen flex-col items-center bg-gradient-to-b from-[#122e49] to-[#15162c] font-sans`}>
        <Component {...pageProps} />
      </main>

    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
