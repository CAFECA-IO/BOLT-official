import { useRef, useEffect } from "react";
import { useRouter } from "next/router";
import lottie from "lottie-web";
import animationData from "../../public/animation/404.json";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { ILocale } from "@/interfaces/locale";
import myStyles from "@/styles/Home.module.css";

function NotFoundPage() {
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
      loop: true,
      autoplay: true,
      animationData,
    });

    return () => anim.destroy();
  }, []);

  return (
    <div className={myStyles.not_found_container}>
      <div className={myStyles.animNotFound} ref={animContainer}></div>

      <button onClick={clickHandler}>{t("NOT_FOUND.BUTTON")}</button>
    </div>
  );
}

export default NotFoundPage;

export async function getStaticProps({ locale }: ILocale) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      // Will be passed to the page component as props
    },
  };
}
