import { useRef, useEffect } from "react";
import lottie from "lottie-web";
import { useTranslation } from "next-i18next";
import myStyles from "@/styles/introduction.module.css";
import Link from "next/link";

function BoltIntro() {
  const { t } = useTranslation("common");

  // animations
  const lottieStep1 = useRef<HTMLDivElement>(null);
  const lottieConnection1 = useRef<HTMLDivElement>(null);
  const lottieStep2 = useRef<HTMLDivElement>(null);
  const lottieConnection2 = useRef<HTMLDivElement>(null);
  const lottieStep3 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    var animDuration = 1000;

    const animStep1 = lottie.loadAnimation({
      container: lottieStep1.current!,
      renderer: "svg",
      loop: false,
      autoplay: false,

      path: "/animation/step01.json",
    });
    const animConne1 = lottie.loadAnimation({
      container: lottieConnection1.current!,
      renderer: "svg",
      loop: false,
      autoplay: false,

      path: "/animation/connection1.json",
    });
    const animStep2 = lottie.loadAnimation({
      container: lottieStep2.current!,
      renderer: "svg",
      loop: false,
      autoplay: false,

      path: "/animation/step02.json",
    });
    const animConne2 = lottie.loadAnimation({
      container: lottieConnection2.current!,
      renderer: "svg",
      loop: false,
      autoplay: false,

      path: "/animation/connection2.json",
    });
    const animStep3 = lottie.loadAnimation({
      container: lottieStep3.current!,
      renderer: "svg",
      loop: false,
      autoplay: false,

      path: "/animation/step03.json",
    });

    function animatebodymovin(duration: number) {
      const scrollPosition = window.scrollY;

      const frameStep1 =
        animStep1.totalFrames * ((scrollPosition - 350) / duration);

      const frameConne1 =
        animConne1.totalFrames * (((scrollPosition - 1200) / duration) * 2);

      const frameStep2 =
        animStep2.totalFrames * ((scrollPosition - 1600) / duration);

      const frameConne2 =
        animConne2.totalFrames * (((scrollPosition - 2200) / duration) * 2);

      const frameStep3 =
        animStep3.totalFrames * (((scrollPosition - 2600) / duration) * 1.5);

      // play animation
      if (scrollPosition > 350 && scrollPosition < 1300) {
        animStep1.goToAndStop(frameStep1, true);
      }

      if (scrollPosition < 1700) {
        animConne1.goToAndStop(frameConne1, true);
      }

      if (scrollPosition > 1600 && scrollPosition < 2300) {
        animStep2.goToAndStop(frameStep2, true);
      }

      if (scrollPosition < 2700) {
        animConne2.goToAndStop(frameConne2, true);
      }

      if (scrollPosition > 2600 && scrollPosition < 3600) {
        animStep3.goToAndStop(frameStep3, true);
      }
    }
    const onScroll = () => {
      animatebodymovin(animDuration);
    };

    document.addEventListener("scroll", onScroll);

    return () => {
      animStep1.destroy();
      animConne1.destroy();
      animStep2.destroy();
      animConne2.destroy();
      animStep3.destroy();
      document.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className={myStyles.bolt_intro_container}>
      <div className={myStyles.bolt_intro_odd}>
        <div className={myStyles.animSteps} ref={lottieStep1}></div>
        <div className={myStyles.bolt_intro_textbox}>
          <h2>
            <span>
              <Link href="/technology#zero-knowledge-proof">
                {t("MAIN.BLOCK2.TITLE1_HIGHLIGHT")}
              </Link>
            </span>
            {t("MAIN.BLOCK2.TITLE1")}
          </h2>
          <p>{t("MAIN.BLOCK2.DESCRIPTION1")}</p>
        </div>
      </div>
      <div className={myStyles.animConnections} ref={lottieConnection1}></div>
      <div className={myStyles.bolt_intro_even}>
        <div className={myStyles.animSteps} ref={lottieStep2}></div>
        <div className={myStyles.bolt_intro_textbox}>
          <h2>
            {t("MAIN.BLOCK2.TITLE2")}
            <span>
              <Link href="/technology#decentralized-audit">
                {t("MAIN.BLOCK2.TITLE2_HIGHLIGHT")}
              </Link>
            </span>
          </h2>
          <p>{t("MAIN.BLOCK2.DESCRIPTION2_LINE1")}</p>
          <p>{t("MAIN.BLOCK2.DESCRIPTION2_LINE2")}</p>
          <p>{t("MAIN.BLOCK2.DESCRIPTION2_LINE3")}</p>
        </div>
      </div>
      <div className={myStyles.animConnections} ref={lottieConnection2}></div>
      <div className={myStyles.bolt_intro_odd}>
        <div className={myStyles.animSteps} ref={lottieStep3}></div>
        <div className={myStyles.bolt_intro_textbox}>
          <h2>
            {t("MAIN.BLOCK2.TITLE3")}
            <span>
              <Link href="/technology#hybrid-chain-evidence">
                {t("MAIN.BLOCK2.TITLE3_HIGHLIGHT")}
              </Link>
            </span>
          </h2>
          <p>{t("MAIN.BLOCK2.DESCRIPTION3")}</p>
        </div>
      </div>
    </div>
  );
}
export default BoltIntro;
