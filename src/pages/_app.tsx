import Head from "next/head";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import Layout from "@/components/common/layout";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Bolt</title>
        <meta name="description" content="Welcome Bolt" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" /> {/* 加入書籤列看到的小icon */}
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default appWithTranslation(App);
