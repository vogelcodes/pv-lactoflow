import Document, {
  Html,
  type DocumentContext,
  type DocumentInitialProps,
  Head,
  Main,
  NextScript,
} from "next/document";
import Script from "next/script";

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }
  render() {
    return (
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
          <Script
            id="google-tag-manager"
            dangerouslySetInnerHTML={{
              __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TL9M2H7Z')
          `,
            }}
          ></Script>
        </Head>
        <body>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TL9M2H7Z"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>

          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
