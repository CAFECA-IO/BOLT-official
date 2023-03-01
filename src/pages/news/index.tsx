import useSWR from "swr";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import NewsList from "@/components/common/news_list";
import myStyles from "@/styles/news.module.css";
import { INewsDetail } from "@/interfaces/news_detail";
import Pagination from "./pagination";
/* 
const fetcher = async (url: string) => {
  const res = await fetch(`/api${url}`);
  return await res.json();
}; */

function AllNewsPage() {
  const { t } = useTranslation("common");

  const [loadedList, setLoadedList] = useState<INewsDetail[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const router = useRouter();
  const { page } = router.query;

  //const { data: news } = useSWR<INewsDetail[]>(`/news`, fetcher);

  useEffect(() => {
    if (page) {
      setCurrentPage(Number(page));
    } else {
      setCurrentPage(1);
    }
    fetch(`/api/news?page=${currentPage}`)
      .then((res) => {
        console.log(currentPage);
        return res.json();
      })
      .then((data) => {
        //console.log(data);
        setLoadedList(data);
      })
      .catch((e) => {
        throw e; // ++ ToDo: 導入錯誤頁面
      });
  }, []);

  if (!loadedList) {
    return <div>loading</div>;
  }

  return (
    <div className={myStyles.news_main_container}>
      <div className={myStyles.news_main_banner}>
        <h1>{t("news.title")}</h1>
      </div>
      <NewsList newsData={loadedList} styles={myStyles} />
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
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
