import myStyles from "@/styles/about.module.css";
import NewsItems from "./news_items";
import { getNewData } from "contents";

function NewsList() {
  const newsData = getNewData();

  const newsList = newsData.map((v) => {
    return (
      <NewsItems
        key={v.id}
        title={v.title}
        date={v.date}
        image={v.image}
        contents={v.contents}
        link={v.id}
      />
    );
  });

  return <div className={myStyles.newslist_container}>{newsList}</div>;
}
export default NewsList;
