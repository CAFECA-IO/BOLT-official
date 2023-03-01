import useSWR from "swr";
import { useState, useEffect } from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import NewsList from "@/components/common/news_list";
import myStyles from "@/styles/news.module.css";
import { INewsDetail } from "@/interfaces/news_detail";
import { NEWS_PER_PAGE } from "@/constants/config";
import Pagination from "./pagination";
/* 
const fetcher = async (url: string) => {
  const res = await fetch(`/api${url}`);
  return await res.json();
}; */

function AllNewsPage() {
  const { t } = useTranslation("common");

  //const { data: news } = useSWR<INewsDetail[]>(`/news`, fetcher);

  const [loadedList, setLoadedList] = useState<INewsDetail[]>();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch(`/api/news`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setLoadedList(data);
      })
      .catch((e) => {
        throw e; // ++ ToDo: 導入錯誤頁面
      });
  }, []);

  if (!loadedList) {
    return <div>loading</div>;
  }

  const lastNewsIndex = currentPage * NEWS_PER_PAGE;
  const firstNewsIndex = lastNewsIndex - NEWS_PER_PAGE;
  const currentNews = loadedList.slice(firstNewsIndex, lastNewsIndex);

  return (
    <div className={myStyles.news_main_container}>
      <div className={myStyles.news_main_banner}>
        <h1>{t("news.title")}</h1>
      </div>
      <NewsList newsData={currentNews} styles={myStyles} max={0} />
      <Pagination
        allNews={loadedList.length}
        newsPerPage={NEWS_PER_PAGE}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
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
