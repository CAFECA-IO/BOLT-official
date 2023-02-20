import Image from "next/legacy/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import myStyles from "@/styles/news.module.css";

function NewsBody(props: {
  title: string;
  date: string;
  image: string;
  contents: string;
}) {
  const { t } = useTranslation("common");

  return (
    <div className={myStyles.news_body_container}>
      <div className={myStyles.news_body_imgbox}>
        <Image
          src={props.image}
          alt={props.title}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className={myStyles.news_body_textbox}>
        <h1>{props.title}</h1>
        <time>{props.date}</time>
        <div className={myStyles.news_contents}>
          <p>{props.contents}</p>
        </div>
      </div>
      <Link href="/news" className={myStyles.goBackBtn}>
        <button>{t("news.goBack")}</button>
      </Link>
    </div>
  );
}

export default NewsBody;
