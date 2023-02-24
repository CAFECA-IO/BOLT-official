//import useSWR from "swr";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import myStyles from "@/styles/news.module.css";
import NewsBody from "@/components/news/newsBody";
import SeeMoreList from "@/components/news/seeMore_list";
import { INewsDetail } from "@/interfaces/news_detail";

/* 
const fetcher = async (url: string) => {
  const res = await fetch(`/api${url}`);
  return await res.json();
}; */

const baseUrl = "http://localhost:3000/";

function NewsDetailPage() {
  const router = useRouter();
  const { newsId } = router.query;

  const [loadedNews, setLoadedNews] = useState<INewsDetail>();
  /* 
  const { data: news } = useSWR<INewsDetail[]>(
    newsId ? `/news/${newsId}` : "null",
    fetcher
  ); */

  useEffect(() => {
    fetch(`/api/news/${newsId}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setLoadedNews(data);
      })
      .catch((e) => {
        throw e; // ++ ToDo: 導入錯誤頁面
      });
  }, []);
  const newsBodyArea = loadedNews ? (
    <NewsBody
      id={loadedNews.id}
      title={loadedNews.title}
      timestamp={loadedNews.timestamp}
      thumbnail=""
      image={loadedNews.image}
      contents={loadedNews.contents}
    />
  ) : (
    <div style={{ padding: "10rem", color: "white" }}>loading...</div>
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
  const res = await fetch(new URL("/api/news", baseUrl));
  const news = await res.json();

  const paths = news.map((v: INewsDetail) => ({
    params: { newsId: v.id },
  }));

  return {
    paths,
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
