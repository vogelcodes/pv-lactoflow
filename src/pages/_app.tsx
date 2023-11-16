import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import localFont from 'next/font/local'

import { api } from "@/utils/api";

import "@/styles/globals.css";

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
      <main className={`${metro.variable} flex min-h-screen flex-col items-center bg-blue font-sans`}>
        <Component {...pageProps} />
      </main>

    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
