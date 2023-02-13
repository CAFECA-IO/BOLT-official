import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import myStyles from "@/styles/Home.module.css";

function BoltIntro() {
  const { t } = useTranslation("common");

  return (
    <div className={myStyles.bolt_intro_container}>
      <div>
        <div></div>
        <div>
          <h2>{t("main.block2.title1")}</h2>
          <p>{t("main.block2.description1")}</p>
        </div>
      </div>
    </div>
  );
}
export default BoltIntro;
