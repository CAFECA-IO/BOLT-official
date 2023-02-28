import useSWR from "swr";
import { useState, useEffect } from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import NewsList from "@/components/common/news_list";
import NewsItems from "@/components/common/news_items";
import myStyles from "@/styles/news.module.css";
import { INewsDetail } from "@/interfaces/news_detail";

const fetcher = async (url: string) => {
  const res = await fetch(`/api${url}`);
  return await res.json();
};

function AllNewsPage() {
  const { t } = useTranslation("common");

  const { data: news } = useSWR<INewsDetail[]>(`/news`, fetcher);

  return (
    <div className={myStyles.news_main_container}>
      <div className={myStyles.news_main_banner}>
        <h1>{t("news.title")}</h1>
      </div>
      <NewsList styles={myStyles} max={0} />
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
