import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App: any) => (props: any) => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <title>온잇코리아 첫 번째 과제</title>
          <meta property="og:title" content="회사 주변 맛집 찾기"></meta>
          <meta property="og:description" content="회사 주변 반경 500m 맛집 크롤링 후 Notion에 적용까지!"></meta>
          <meta property="og:image" content="https://post-phinf.pstatic.net/MjAyMDEwMzBfMjU1/MDAxNjA0MDMyMjkxODU3.mkQ1XS3WDGYl4Hil2GrXCENETyYUwDg3UTfKHvpDQy8g.fsLh_3fZ7SieqRbkCjXtrRv8pKWd0oHndCcEvY9S6wMg.PNG/4.png?type=w1200"></meta>
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
