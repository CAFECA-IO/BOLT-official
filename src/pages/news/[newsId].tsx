import useSWR from "swr";
import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import myStyles from "@/styles/news.module.css";
import NewsBody from "@/components/news/newsBody";
import SeeMoreList from "@/components/news/seeMore_list";
import { INewsDetail } from "@/interfaces/news_detail";

const fetcher = (url: string, id: string) => {
  return fetch(`/api${url}`).then((res) => res.json());
};

function NewsDetailPage() {
  const router = useRouter();
  const { newsId } = router.query;

  const { data: news } = useSWR<INewsDetail>(
    newsId ? `/news/${newsId}` : "null",
    fetcher
  );

  const newsBodyArea = !news ? (
    <div style={{ padding: "10rem", color: "white" }}>loading...</div>
  ) : (
    <NewsBody
      id={news.id}
      title={news.title}
      date={news.date}
      thumbnail=""
      image={news.image}
      contents={news.contents}
    />
  );

  return (
    <div className={myStyles.news_detail_container}>
      {newsBodyArea}

      <SeeMoreList />
    </div>
  );
}

export default NewsDetailPage;

export const getStaticPaths = async () => {
  return {
    paths: [{ params: { newsId: "" } }],
    fallback: "blocking",
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
