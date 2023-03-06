import Link from "next/link";
import moment from "moment";
import { useState, useEffect } from "react";
import { useTranslation } from "next-i18next";
import myStyles from "@/styles/news.module.css";
import { INewsDetail } from "@/interfaces/news_detail";

interface ISeeMoreList {
  currentNewsId: string;
  newsDetailHandler: (id: string) => void;
}

function SeeMoreList({ currentNewsId, newsDetailHandler }: ISeeMoreList) {
  const { t } = useTranslation("common");

  const [newsList, setNewsList] = useState<INewsDetail[]>([]);

  useEffect(() => {
    seeMoreHandler(currentNewsId);
  }, []);

  function seeMoreHandler(newsId: string) {
    fetch(`/api/news/see_more_list?newsId=${newsId}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setNewsList(data);
      })
      .catch((e) => {
        throw e; // ++ ToDo: 導入錯誤頁面
      });
  }

  const seeMoreList = newsList.map((v) => {
    const newsLink = `/news/${v.id}`;

    return (
      <Link
        key={v.id}
        href="/news/[newsId]"
        as={newsLink}
        className={myStyles.seeMore_items}
        onClick={() => {
          newsDetailHandler(v.id);
          seeMoreHandler(v.id);
        }}
      >
        <h2>{v.title}</h2>
        <time>{moment(v.timestamp).format("YYYY.MM.DD")}</time>
      </Link>
    );
  });

  return (
    <div className={myStyles.seeMore_container}>
      <h1>{t("news.seeMore")}</h1>
      <div className={myStyles.seeMore_list}>{seeMoreList}</div>
    </div>
  );
}
export default SeeMoreList;
