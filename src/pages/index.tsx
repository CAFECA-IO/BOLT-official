import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect } from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import lottie from "lottie-web";
import animationData from "../../public/animation/decentralized.json";
import myStyles from "@/styles/Home.module.css";
import BoltMain from "@/components/home/bolt_main";
import BoltIntro from "@/components/home/bolt_introduction";
import ContactUsForm from "@/components/common/contact_us_form";
import { ILocale } from "@/interfaces/locale";

export default function Home() {
  const { t } = useTranslation("common");

  const animContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animContainer.current!,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData,
    });

    return () => anim.destroy();
  }, []);

  return (
    <>
      <main className={myStyles.main}>
        <div className={myStyles.main_bg}>
          <div className={myStyles.main_block1}>
            <BoltMain />

            <Link href="/#what" scroll={false} className={myStyles.scroll_down}>
              <Image
                src="/img/icons/scroll_down.png"
                alt="scroll_down"
                width={20}
                height={20}
              />
            </Link>
          </div>
          <div id="what" className={myStyles.main_block2}>
            <h1>{t("MAIN.BLOCK2.TITLE")}</h1>
            <BoltIntro />
          </div>
          <div id="safe" className={myStyles.main_block3}>
            <h1>{t("MAIN.BLOCK3.TITLE")}</h1>
            <div className={myStyles.animSafe} ref={animContainer}></div>
          </div>
        </div>

        <div id="contact_us" className={myStyles.main_block4}>
          <h1>{t("CONTACT_FORM.TITLE")}</h1>
          <ContactUsForm />
        </div>
      </main>
    </>
  );
}

export async function getStaticProps({ locale }: ILocale) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      // Will be passed to the page component as props
    },
  };
}
