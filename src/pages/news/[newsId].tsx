import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import myStyles from "@/styles/news.module.css";
import NewsBody from "@/components/news/news_body";
import SeeMoreList from "@/components/news/see_more_list";
import { INewsDetail } from "@/interfaces/news_detail";

function NewsDetailPage() {
  const router = useRouter();
  const { newsId } = router.query;

  const [currentNewsId, setCurrentNewsId] = useState(
    String(newsId) || "nError"
  );
  const [loadedNews, setLoadedNews] = useState<INewsDetail>();

  useEffect(() => {
    newsDetailHandler(currentNewsId);
  }, []);

  function newsDetailHandler(id: string) {
    setCurrentNewsId(id);

    fetch(`/api/news/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setLoadedNews(data);
      })
      .catch(() => {
        router.push("/404");
      });
  }

  const newsBodyArea = loadedNews ? (
    <NewsBody
      id={loadedNews.id}
      title={loadedNews.title}
      timestamp={loadedNews.timestamp}
      thumbnail=""
      image={loadedNews.image || "/img/black.jpg"}
      contents={loadedNews.contents}
    />
  ) : (
    <div style={{ padding: "10rem", color: "white" }}>loading...</div>
  );

  return (
    <div className={myStyles.news_detail_container}>
      {newsBodyArea}

      <SeeMoreList
        currentNewsId={String(newsId)}
        newsDetailHandler={newsDetailHandler}
      />
    </div>
  );
}

export default NewsDetailPage;

export const getStaticPaths = async () => {
  /* ToDo:React Hook useEffect has a missing dependency: 'newsId'. Either include it or remove the dependency array. 
  const res = await fetch(new URL("/api/news", baseUrl));
  const news: INewsDetail[] = await res.json();

  const paths = news.map((v) => ({
    params: { newsId: v.id },
  })); */

  return {
    paths: [
      { params: { newsId: "n001" } },
      { params: { newsId: "n002" } },
      { params: { newsId: "n003" } },
      { params: { newsId: "n004" } },
      { params: { newsId: "n005" } },
      { params: { newsId: "n006" } },
      { params: { newsId: "n007" } },
    ],
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
