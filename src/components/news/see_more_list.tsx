import Link from "next/link";
import moment from "moment";
import { useTranslation } from "next-i18next";
import myStyles from "@/styles/news.module.css";
import { getAllNews } from "@/interfaces/news_detail";

function SeeMoreList() {
  const { t } = useTranslation("common");

  const newsData = getAllNews();
  //ToDo: API

  const seeMoreList = newsData.map((v) => {
    const newsLink = `/news/${v.id}`;

    return (
      <Link
        key={v.id}
        href="/news/[newsId]"
        as={newsLink}
        className={myStyles.seeMore_items}
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
