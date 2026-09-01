import "../styles/styles.css";
import React from "react";
import { ThemesLayer } from "../design-system/themes";
import { SiteHead } from "../site/seo";

function App({ Component, pageProps }: any) {
  const getLayout = Component.getLayout ?? ((page: any) => page);
  return (
    <>
      <SiteHead />
      <ThemesLayer defaultType={"light"} defaultLayer={1}>
        {getLayout(<Component {...pageProps} />)}
      </ThemesLayer>
    </>
  );
}

// NOT wrapped in `dynamic(..., { ssr: false })`. That wrapper used to be here,
// and with `output: "export"` it disabled prerendering for every route — each
// page shipped an empty `<div id="__next">`, so search engines saw nothing and
// the AI crawlers that never run JavaScript saw nothing at all. Pages must
// render on the server for anything in them to be readable.
export default App;
