import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import myStyles from "@/styles/news.module.css";

function NewsDetailPage() {
  const { t } = useTranslation("common");

  const router = useRouter();
  const { newsId } = router.query;

  return (
    <div className={myStyles.news_main_container}>
      <div className={myStyles.news_main_banner}></div>
    </div>
  );
}

export default NewsDetailPage;

export const getStaticPaths = async () => {
  return {
    paths: [{ params: { newsId: "" } }],
    fallback: true,
  };
};

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      // Will be passed to the page component as props
    },
  };
}
