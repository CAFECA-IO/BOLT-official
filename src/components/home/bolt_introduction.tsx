import { useRef, useEffect } from "react";
import lottie from "lottie-web";
import { useTranslation } from "next-i18next";
import myStyles from "@/styles/Home.module.css";

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
      const maxFrames = animStep1.totalFrames;

      const frameStep1 = maxFrames * ((scrollPosition - 350) / duration);
      const frameConne1 =
        maxFrames * (((scrollPosition - 1200) / duration) * 2);
      const frameStep2 = maxFrames * (((scrollPosition - 1600) / duration) * 2);
      const frameConne2 =
        maxFrames * (((scrollPosition - 2200) / duration) * 2);
      const frameStep3 =
        maxFrames * (((scrollPosition - 2600) / duration) * 1.5);

      animStep1.goToAndStop(frameStep1, true);
      animConne1.goToAndStop(frameConne1, true);
      animStep2.goToAndStop(frameStep2, true);
      animConne2.goToAndStop(frameConne2, true);
      animStep3.goToAndStop(frameStep3, true);
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
        <div
          style={{ height: "600px", width: "600px" }}
          ref={lottieStep1}
        ></div>
        <div className={myStyles.bolt_intro_textbox}>
          <h2>
            <span>{t("main.block2.title1highlight")}</span>
            {t("main.block2.title1")}
          </h2>
          <p>{t("main.block2.description1")}</p>
        </div>
      </div>
      <div
        style={{ height: "400px", width: "1400px" }}
        ref={lottieConnection1}
      ></div>
      <div className={myStyles.bolt_intro_even}>
        <div
          style={{ height: "600px", width: "600px" }}
          ref={lottieStep2}
        ></div>
        <div className={myStyles.bolt_intro_textbox}>
          <h2>
            {t("main.block2.title2")}
            <span>{t("main.block2.title2highlight")}</span>
          </h2>
          <p>{t("main.block2.description2Line1")}</p>
          <p>{t("main.block2.description2Line2")}</p>
          <p>{t("main.block2.description2Line3")}</p>
        </div>
      </div>
      <div
        style={{ height: "400px", width: "1400px" }}
        ref={lottieConnection2}
      ></div>
      <div className={myStyles.bolt_intro_odd}>
        <div
          style={{ height: "600px", width: "600px" }}
          ref={lottieStep3}
        ></div>
        <div className={myStyles.bolt_intro_textbox}>
          <h2>
            <span>{t("main.block2.title1highlight")}</span>
            {t("main.block2.title1")}
          </h2>
          <p>{t("main.block2.description1")}</p>
        </div>
      </div>
    </div>
  );
}
export default BoltIntro;
