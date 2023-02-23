import Image from "next/legacy/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import myStyles from "@/styles/news.module.css";
import { INewsDetail } from "../../interfaces/news_detail";

function NewsBody({ title, date, image, contents }: INewsDetail) {
  const { t } = useTranslation("common");

  return (
    <div className={myStyles.news_body_container}>
      <div className={myStyles.news_body_imgbox}>
        <Image src={image} alt={title} layout="fill" objectFit="cover" />
      </div>
      <div className={myStyles.news_body_textbox}>
        <h1>{title}</h1>
        <time>{date}</time>
        <div className={myStyles.news_contents}>
          <p>{contents}</p>
        </div>
      </div>
      <Link href="/news" className={myStyles.goBackBtn}>
        <button>{t("news.goBack")}</button>
      </Link>
    </div>
  );
}

export default NewsBody;
