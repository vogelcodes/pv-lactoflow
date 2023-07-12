import Document, { Html, type DocumentContext, type DocumentInitialProps, Head, Main, NextScript,  } from 'next/document'
import Script from "next/script";

import Image from "next/image"

const fbp = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID || ""
 
class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx)
 
    return initialProps
  }
  render() {
    return(
        <Html>
            <Head>
            {/* <noscript>
          <Image
            height="1"
            width="1"
            alt='fb'
            style={{ display: 'none' }}
            src={`https://www.facebook.com/tr?id=${fbp}&ev=PageView&noscript=1`}
          />
        </noscript> */}
              <Script id='hj' dangerouslySetInnerHTML={{
                        __html: `
                  (function(h,o,t,j,a,r){
                      h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                      h._hjSettings={hjid:3570841,hjsv:6};
                      a=o.getElementsByTagName('head')[0];
                      r=o.createElement('script');r.async=1;
                      r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                      a.appendChild(r);
                  })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`
                }} />
    `
            </Head>
            <body>
        <Main />
        <NextScript />
      </body>
        </Html>
    )
  }
}
 
export default MyDocument