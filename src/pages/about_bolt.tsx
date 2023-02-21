import Link from "next/link";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import myStyles from "@/styles/about.module.css";
import WhyBolt from "@/components/about/why_bolt";
import UseCaseList from "@/components/about/usecase_list";
import NewsList from "@/components/common/news_list";

function AboutBoltPage() {
  const { t } = useTranslation("common");

  const newsListStyles = myStyles;

  return (
    <div className={myStyles.about_container}>
      <div id="whyBolt" className={myStyles.about_block1}>
        <h1>{t("about.whyBolt.title")}</h1>
        <WhyBolt />
      </div>
      <div id="useCase" className={myStyles.about_block2}>
        <h1>{t("about.useCase.title")}</h1>
        <UseCaseList />
      </div>
      <div id="news" className={myStyles.about_block3}>
        <h1>{t("about.news.title")}</h1>
        <NewsList styles={newsListStyles} max={7} />
        <Link href="/news" className={myStyles.newslist_link}>
          查看更多
        </Link>
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
