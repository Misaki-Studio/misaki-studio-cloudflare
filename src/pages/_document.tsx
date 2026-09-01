import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" type="image/x-icon" href="/favicon.svg" />
          <link rel="icon" type="image/x-icon" href="/favicon.ico" />
          {/*
            No <title> here. A hardcoded one used to sit in this file, which
            meant every page of every site built from this starter carried it.
            Titles come from your project name and page routes via
            `src/site/seo.tsx` — set SITE_NAME in .env.
          */}
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
