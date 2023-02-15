import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import myStyles from "@/styles/about.module.css";

function NewsItems(props: {
  title: string;
  date: string;
  image: string;
  contents: string;
  link: string;
}) {
  const { t } = useTranslation("common");

  const newsLink = `/news/${props.link}`;

  return (
    <div>
      <div className={myStyles.newsitem_ticket}>
        <div className={myStyles.newsitem_imgbox}>
          <Image
            alt="news1"
            src="/img/news/Placement Area.png"
            width={320}
            height={240}
          />
        </div>
        <h3>{t(`${props.title}`)}</h3>
        <time>2023.2.15</time>
        <div className={myStyles.newsitem_contentbox}>
          <p>{t(`${props.contents}`)}</p>
        </div>
      </div>
    </div>
  );
}

export default NewsItems;
