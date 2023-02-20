import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { getNewsById } from "@/interfaces/news_detail";
import myStyles from "@/styles/news.module.css";
import NewsBody from "@/components/news/newsBody";

function NewsDetailPage() {
  const { t } = useTranslation("common");

  const router = useRouter();
  const { newsId } = router.query;

  if (!newsId) {
    return <></>;
  }

  const news = getNewsById(newsId as string);

  return (
    <div className={myStyles.news_main_container}>
      <NewsBody
        title={news.title}
        date={news.date}
        image={news.image}
        contents={news.contents}
      />
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
