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

        </Head>
        <body>

          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
