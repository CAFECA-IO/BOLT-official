import Image from "next/legacy/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import myStyles from "../../styles/Home.module.css";

function BoltMain() {
  const { t } = useTranslation("common");

  return (
    <div className={myStyles.bolt_main_container}>
      <div className={myStyles.bolt_main_textbox}>
        <div className={myStyles.bolt_main_from_top}>
          <div className={myStyles.bolt_main_logo}>
            <Image
              src="/img/bolt_logo_black@2x.png"
              alt="bolt_logo"
              width={160}
              height={45}
            />
          </div>
          <h1>{t("MAIN.BLOCK1.TITLE")}</h1>
          <Link
            download="BOLT_Whitepaper_v2.0.11.pdf"
            href="/files/BOLT_Whitepaper_v2.0.11.pdf"
            target="_blank"
          >
            <p className={myStyles.whitepaper}>
              &emsp;&emsp;<span>{t("MAIN.BLOCK1.WHITEPAPER")}</span>
            </p>
          </Link>
        </div>
        <div className={myStyles.bolt_main_from_bottom}>
          <div className={myStyles.bolt_main_btnbox}>
            <button>{t("MAIN.BLOCK1.WINDOWS")}</button>
            <button>{t("MAIN.BLOCK1.MAC_OS")}</button>
            <button>{t("MAIN.BLOCK1.LINUX")}</button>
          </div>
          <Link href="/faq">
            <p>
              <span>{t("MAIN.BLOCK1.HOW_TO")}</span>
            </p>
          </Link>
        </div>
      </div>

      <div className={myStyles.bolt_main_imgbox}>
        <Image
          src="/img/main_1@2x.png"
          alt=""
          layout="fill"
          objectFit="contain"
        />
      </div>
    </div>
  );
}
export default BoltMain;
