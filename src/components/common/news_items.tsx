import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import myStyles from "@/styles/about.module.css";
import newsStyles from "@/styles/news.module.css";

function NewsItems(props: {
  id: string;
  title: string;
  date: string;
  thumbnail: string;
  contents: string;
}) {
  const { t } = useTranslation("common");

  const newsLink = `/news/${props.id}`;
  const localeDate = new Date(props.date).toLocaleDateString("zh-TW");
  const newsImg = t(`${props.thumbnail}`);

  //todo: Link url.format
  return (
    <div>
      <Link href="/news/[newsId]" as={newsLink}>
        <div className={newsStyles.newsitem_ticket}>
          <div className={newsStyles.newsitem_imgbox}>
            <Image alt="news1" src={newsImg} width={320} height={240} />
          </div>
          <div className={newsStyles.newsitem_textbox}>
            <h3>{t(`${props.title}`)}</h3>
            <time>{localeDate}</time>
            <div className={newsStyles.newsitem_contentbox}>
              <p>{t(`${props.contents}`)}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default NewsItems;
