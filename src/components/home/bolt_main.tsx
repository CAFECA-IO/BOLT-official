import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import myStyles from "../../styles/Home.module.css";

function BoltMain() {
  const { t } = useTranslation("common");

  return (
    <div className={myStyles.bolt_main_container}>
      <div className={myStyles.bolt_main_textbox}>
        <div className={myStyles.bolt_main_from_top}>
          <Image
            src="/img/bolt_logo_black@2x.png"
            alt="bolt_logo"
            width={160}
            height={45}
          />
          <h1>{t("main.block1.title")}</h1>
          <Link href="">
            <p className={myStyles.whitepaper}>
              &emsp;&emsp;<span>{t("main.block1.whitepaper")}</span>
            </p>
          </Link>
        </div>
        <div className={myStyles.bolt_main_from_bottom}>
          <div className={myStyles.bolt_main_btnbox}>
            <button>{t("main.block1.windows")}</button>
            <button>{t("main.block1.macos")}</button>
            <button>{t("main.block1.linux")}</button>
          </div>
          <Link href="">
            <p>
              <span>{t("main.block1.howTo")}</span>
            </p>
          </Link>
        </div>
      </div>

      <div className={myStyles.bolt_main_imgbox}>
        <Image src="/img/main_1@2x.png" alt="" width={660} height={650} />
      </div>
    </div>
  );
}
export default BoltMain;
