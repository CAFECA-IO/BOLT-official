import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import moment from "moment";
import myStyles from "@/styles/privacy.module.css";
import { ILocale } from "@/interfaces/locale";

function PrivacyPage() {
  const { t } = useTranslation("common");

  const UPDATE = moment(1677081600000).format("YYYY.MM.DD");

  return (
    <div className={myStyles.privacy_main_container}>
      <h1>{t("PRIVACY.TITLE")}</h1>
      <div className={myStyles.privacy_contents_container}>
        <h2>
          {t("PRIVACY.UPDATE")}&emsp;
          {UPDATE}
        </h2>
        <p>{t("PRIVACY.LINE1")}</p>

        <h4>{t("PRIVACY.GATHER1")}</h4>
        <p>{t("PRIVACY.GATHER2")}</p>
        <p>{t("PRIVACY.GATHER3")}</p>

        <h4>{t("PRIVACY.PROTECT1")}</h4>
        <p>{t("PRIVACY.PROTECT2")}</p>
        <p>{t("PRIVACY.PROTECT3")}</p>

        <h4>{t("PRIVACY.COOKIE1")}</h4>
        <p>{t("PRIVACY.COOKIE2")}</p>
        <p>{t("PRIVACY.COOKIE3")}</p>

        <h4>{t("PRIVACY.THIRD1")}</h4>
        <p>{t("PRIVACY.THIRD2")}</p>
        <p>{t("PRIVACY.THIRD3")}</p>
        <p>{t("PRIVACY.THIRD4")}</p>
        <p>{t("PRIVACY.THIRD5")}</p>
        <p>{t("PRIVACY.THIRD6")}</p>
        <p>{t("PRIVACY.THIRD7")}</p>
        <p>{t("PRIVACY.THIRD8")}</p>
        <p>{t("PRIVACY.THIRD9")}</p>

        <h4>{t("PRIVACY.CHANGE1")}</h4>
        <p>{t("PRIVACY.CHANGE2")}</p>
      </div>
    </div>
  );
}

export default PrivacyPage;

export async function getStaticProps({ locale }: ILocale) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      // Will be passed to the page component as props
    },
  };
}
