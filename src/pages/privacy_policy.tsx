import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import myStyles from "@/styles/privacy.module.css";

function PrivacyPage() {
  const { t } = useTranslation("common");

  return (
    <div className={myStyles.privacy_main_container}>
      <h1>{t("privacy.title")}</h1>
      <div className={myStyles.privacy_contents_container}>
        <h2>{t("privacy.update")}</h2>
        <p>{t("privacy.line1")}</p>

        <h4>{t("privacy.cookie1")}</h4>
        <p>{t("privacy.cookie2")}</p>

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
