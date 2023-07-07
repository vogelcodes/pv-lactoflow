import Document, { Html, type DocumentContext, type DocumentInitialProps, Head, Main, NextScript } from 'next/document'
 
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
            <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src={`https://www.facebook.com/tr?id=${process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID}&ev=PageView&noscript=1`}
          />
        </noscript>
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