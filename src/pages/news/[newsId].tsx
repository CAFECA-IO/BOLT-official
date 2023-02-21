import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { getNewsById } from "@/interfaces/news_detail";
import myStyles from "@/styles/news.module.css";
import NewsBody from "@/components/news/newsBody";
import SeeMoreList from "@/components/news/seeMore_list";

function NewsDetailPage() {
  const { t } = useTranslation("common");

  const router = useRouter();
  const { newsId } = router.query;

  if (!newsId) {
    return <></>;
  }

  const news = getNewsById(newsId as string);

  return (
    <div className={myStyles.news_detail_container}>
      <NewsBody
        id={news.id}
        title={news.title}
        date={news.date}
        thumbnail=""
        image={news.image}
        contents={news.contents}
      />

      <SeeMoreList />
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
