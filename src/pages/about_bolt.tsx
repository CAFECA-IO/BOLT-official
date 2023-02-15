import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import myStyles from "@/styles/about.module.css";
import WhyBolt from "@/components/about/why_bolt";

function AboutBoltPage() {
  const { t } = useTranslation("common");

  return (
    <div className={myStyles.about_container}>
      <div className={myStyles.about_block1}>
        <h1>{t("about.whyBolt.title")}</h1>
        <WhyBolt />
      </div>
    </div>
  );
}

export default AboutBoltPage;

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      // Will be passed to the page component as props
    },
  };
}
