import { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import cors from "cors";
import { useEffect } from "react";

function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    cors();
  });
  return (
    <>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </>
  );
}

export default App;
