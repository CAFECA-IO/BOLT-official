import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import moment from "moment";

interface INewsItemsParams {
  id: string;
  title: string;
  timestamp: number;
  thumbnail: string;
  contents: string[];
  styles: { [key: string]: string };
}

function NewsItems({
  id,
  title,
  timestamp,
  thumbnail,
  contents,
  styles,
}: INewsItemsParams) {
  const { t } = useTranslation("common");

  const newsLink = `/news/${id}`;
  const localeDate = moment(timestamp).format("YYYY.MM.DD");
  const newsImg = t(thumbnail);
  const showContents = contents.slice(1, 5);

  return (
    <>
      <Link href="/news/[newsId]" as={newsLink}>
        <div className={styles.newsitem_ticket}>
          <div className={styles.newsitem_imgbox}>
            <Image alt={title} src={newsImg} width={320} height={240} />
          </div>
          <div className={styles.newsitem_textbox}>
            <h3>{t(title)}</h3>
            <time>{localeDate}</time>
            <div className={styles.newsitem_contentbox}>
              <p>{showContents}</p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default NewsItems;
