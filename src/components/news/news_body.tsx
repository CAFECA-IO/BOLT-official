import Image from "next/legacy/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { useTranslation } from "next-i18next";
import moment from "moment";
import myStyles from "@/styles/news.module.css";
import { INewsDetail } from "../../interfaces/news_detail";

function NewsBody({ title, timestamp, image, contents }: INewsDetail) {
  const { t } = useTranslation("common");

  const localeDate = moment(timestamp).format("YYYY.MM.DD");
  const contentLines = contents ? contents.join("") : "";

  return (
    <div className={myStyles.news_body_container}>
      <div className={myStyles.news_body_imgbox}>
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          priority={true}
        />
      </div>
      <div className={myStyles.news_body_textbox}>
        <h1>{title}</h1>
        <time>{localeDate}</time>
        <div className={myStyles.news_contents}>
          {/* eslint-disable-next-line */}
          <ReactMarkdown key={title} children={contentLines} />

          {/* <p>{contentLines}</p> */}
        </div>
      </div>
      <Link href="/news" className={myStyles.goBackBtn}>
        <button>{t("news.goBack")}</button>
      </Link>
    </div>
  );
}

export default NewsBody;
