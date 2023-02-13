import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "@next/font/google";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import myStyles from "@/styles/Home.module.css";
import BoltMain from "@/components/home/bolt_main";
import BoltIntro from "@/components/home/bolt_introduction";

export default function Home() {
  const { t } = useTranslation("common");
  return (
    <>
      <Head>
        <title>Bolt</title>
        <meta name="description" content="Welcome Bolt" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" /> {/* 加入書籤列看到的小icon */}
      </Head>
      <main className={myStyles.main}>
        <div className={myStyles.main_block1}>
          <BoltMain />

          <Link href="/#what" className={myStyles.scroll_down}>
            <Image
              src="/img/icons/scroll_down.png"
              alt="scroll_down"
              width={20}
              height={20}
            />
          </Link>
        </div>
        <div id="what" className={myStyles.main_block2}>
          <h1>{t("main.block2.title")}</h1>
          <BoltIntro />
        </div>
      </main>
    </>
  );
}

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      // Will be passed to the page component as props
    },
  };
}
