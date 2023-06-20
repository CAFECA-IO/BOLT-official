import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { getTechnologyData } from "@/constants/config";
import myStyles from "@/styles/technology.module.css";
import TechnologyItems from "@/components/techology/techology_items";
import { ILocale } from "@/interfaces/locale";

function TechnologyPage() {
  const { t } = useTranslation("common");

  const techData = getTechnologyData();
  const techList = techData.map((v) => {
    return (
      <TechnologyItems
        key={v.anchor}
        anchor={v.anchor}
        title={v.title}
        description={v.description}
        image={v.image}
      />
    );
  });

  return (
    <div className={myStyles.tech_main_container}>
      <h1>{t("TECHNOLOGY.TITLE")}</h1>
      <div className={myStyles.tech_contents_container}>{techList}</div>
    </div>
  );
}

export default TechnologyPage;

export async function getStaticProps({ locale }: ILocale) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      // Will be passed to the page component as props
    },
  };
}
