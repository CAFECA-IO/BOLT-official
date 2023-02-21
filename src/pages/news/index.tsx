import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import NewsList from "@/components/common/news_list";
import myStyles from "@/styles/news.module.css";

function AllNewsPage() {
  const { t } = useTranslation("common");

  const newsListStyles = myStyles;

  return (
    <div className={myStyles.news_main_container}>
      <div className={myStyles.news_main_banner}>
        <h1>{t("news.title")}</h1>
      </div>

      <NewsList styles={newsListStyles} max={0} />
    </div>
  );
}
export default AllNewsPage;

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      // Will be passed to the page component as props
    },
  };
}
