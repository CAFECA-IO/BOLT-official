import useSWR from "swr";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import myStyles from "@/styles/news.module.css";
import NewsBody from "@/components/news/newsBody";
import SeeMoreList from "@/components/news/seeMore_list";
import { INewsDetail } from "@/interfaces/news_detail";
import { getAllNews } from "@/interfaces/news_detail";
/* 
const fetcher = async (url: string) => {
  const res = await fetch(`/api${url}`);
  return await res.json();
}; */

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
        /*發生錯誤時要做的事情*/
        throw e; // ++ ToDo: 導入錯誤頁面
      });
  }, []);

  const newsBodyArea = loadedNews ? (
    <NewsBody
      id={loadedNews.id}
      title={loadedNews.title}
      date={loadedNews.date}
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
  const news = getAllNews();

  const paths = news.map((v) => ({
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
