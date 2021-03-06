import { withFork } from 'effector-next';
import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';

const enhance = withFork({ debug: !!process.env.DEV_MODE || false });

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default enhance(MyDocument);
