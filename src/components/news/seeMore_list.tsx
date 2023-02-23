import Link from "next/link";
import myStyles from "@/styles/news.module.css";
import { useTranslation } from "next-i18next";
import { getAllNews } from "@/interfaces/news_detail";

function SeeMoreList() {
  const { t } = useTranslation("common");

  const newsData = getAllNews();

  const seeMoreList = newsData.map((v) => {
    const newsLink = `/news/${v.id}`;

    return (
      <Link key={v.id} href={newsLink} className={myStyles.seeMore_items}>
        <h2>{v.title}</h2>
        <time>{v.date}</time>
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
