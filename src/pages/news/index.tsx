import { useState, useEffect } from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { INewsDetail } from "@/interfaces/news_detail";
import { getQuerys } from "@/lib/common";
import NewsList from "@/components/common/news_list";
import Pagination from "../../components/common/pagination";
import myStyles from "@/styles/news.module.css";
import { ILocale } from "@/interfaces/locale";

function AllNewsPage() {
  const { t } = useTranslation("common");

  const [loadedList, setLoadedList] = useState<INewsDetail[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const page = Number(getQuerys("page") || 1);
    paginationHandler(page);
  }, []);

  function paginationHandler(pageIndex: number) {
    setCurrentPage(pageIndex);

    fetch(`/api/news?page=${pageIndex}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setLoadedList(data);
      })
      .catch((e) => {
        throw e; // ++ ToDo: 導入錯誤頁面
      });
  }

  if (!loadedList) {
    return <div>loading</div>;
  }

  return (
    <div className={myStyles.news_main_container}>
      <div className={myStyles.news_main_banner}>
        <h1>{t("NEWS.TITLE")}</h1>
      </div>
      <NewsList newsData={loadedList} styles={myStyles} />
      <Pagination
        currentPage={currentPage}
        paginationHandler={paginationHandler}
      />
    </div>
  );
}
export default AllNewsPage;

export async function getStaticProps({ locale }: ILocale) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      // Will be passed to the page component as props
    },
  };
}
