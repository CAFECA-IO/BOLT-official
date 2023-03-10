import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import moment from "moment";
import myStyles from "@/styles/privacy.module.css";

function PrivacyPage() {
  const { t } = useTranslation("common");

  const UPDATE = moment(1677081600000).format("YYYY.MM.DD");

  return (
    <div className={myStyles.privacy_main_container}>
      <h1>{t("privacy.title")}</h1>
      <div className={myStyles.privacy_contents_container}>
        <h2>
          {t("privacy.update")}&emsp;
          {UPDATE}
        </h2>
        <p>{t("privacy.line1")}</p>

        <h4>{t("privacy.gather1")}</h4>
        <p>{t("privacy.gather2")}</p>
        <p>{t("privacy.gather3")}</p>

        <h4>{t("privacy.protect1")}</h4>
        <p>{t("privacy.protect2")}</p>
        <p>{t("privacy.protect3")}</p>

        <h4>{t("privacy.cookie1")}</h4>
        <p>{t("privacy.cookie2")}</p>
        <p>{t("privacy.cookie3")}</p>

        <h4>{t("privacy.third1")}</h4>
        <p>{t("privacy.third2")}</p>
        <p>{t("privacy.third3")}</p>
        <p>{t("privacy.third4")}</p>
        <p>{t("privacy.third5")}</p>
        <p>{t("privacy.third6")}</p>
        <p>{t("privacy.third7")}</p>
        <p>{t("privacy.third8")}</p>
        <p>{t("privacy.third9")}</p>

        <h4>{t("privacy.change1")}</h4>
        <p>{t("privacy.change2")}</p>
      </div>
    </div>
  );
}

export default PrivacyPage;

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      // Will be passed to the page component as props
    },
  };
}
