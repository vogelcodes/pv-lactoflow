import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import localFont from 'next/font/local'

import { api } from "@/utils/api";

import "@/styles/globals.css";

const gotham = localFont({
  src: [
    {
      path: '../styles/GothamMedium.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../styles/Gotham-Bold.otf',
      weight: '600',
      style: 'bold',
    },
    {
      path: '../styles/Gotham-Black.otf',
      weight: '700',
      style: 'extrabold',
    },
    
  ],
  variable: '--font-gotham'
})

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <main className={`${gotham.variable} flex min-h-screen flex-col items-center bg-gradient-to-b from-[#122e49] to-[#15162c] font-sans`}>
        <Component {...pageProps} />
      </main>

    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
