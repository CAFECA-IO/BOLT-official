import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";

function NewsItems(props: {
  id: string;
  title: string;
  date: string;
  thumbnail: string;
  contents: string;
  styles: { [key: string]: string };
}) {
  const { t } = useTranslation("common");

  const { id, title, date, thumbnail, contents, styles } = props;

  const newsLink = `/news/${id}`;
  const localeDate = new Date(date).toLocaleDateString("zh-TW");
  const newsImg = t(`${thumbnail}`);

  return (
    <div>
      <Link href="/news/[newsId]" as={newsLink}>
        <div className={styles.newsitem_ticket}>
          <div className={styles.newsitem_imgbox}>
            <Image alt="news1" src={newsImg} width={320} height={240} />
          </div>
          <div className={styles.newsitem_textbox}>
            <h3>{t(`${title}`)}</h3>
            <time>{localeDate}</time>
            <div className={styles.newsitem_contentbox}>
              <p>{t(`${contents}`)}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default NewsItems;
