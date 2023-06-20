import { useRef, useEffect } from "react";
import { useRouter } from "next/router";
import lottie from "lottie-web";
import animationData from "../../public/animation/coming_soon.json";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { ILocale } from "@/interfaces/locale";
import myStyles from "@/styles/Home.module.css";

function ComingSoonPage() {
  const { t } = useTranslation("common");

  const router = useRouter();
  const clickHandler = () => {
    router.back();
  };

  const animContainer = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animContainer.current!,
      renderer: "svg",
      loop: false,
      autoplay: true,
      animationData,
    });

    return () => anim.destroy();
  }, []);

  return (
    <div className={myStyles.coming_soon_container}>
      <h1>{t("COMING_SOON.TITLE")}</h1>
      <span></span>
      <p>{t("COMING_SOON.DESCRIPTION")}</p>
      <button onClick={clickHandler}>{t("COMING_SOON.BUTTON")}</button>

      <div className={myStyles.animComingSoon} ref={animContainer}></div>
    </div>
  );
}

export default ComingSoonPage;

export async function getStaticProps({ locale }: ILocale) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      // Will be passed to the page component as props
    },
  };
}
