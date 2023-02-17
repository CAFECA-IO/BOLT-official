import myStyles from "@/styles/about.module.css";
import NewsItems from "./news_items";
import { dummyNewsData } from "@/interfaces/news_detail";

function NewsList() {
  const newsData = dummyNewsData;

  const newsList = newsData.map((v) => {
    return (
      <NewsItems
        key={v.id}
        id={v.id}
        title={v.title}
        date={v.date}
        image={v.image}
        contents={v.contents}
      />
    );
  });

  return <div className={myStyles.newslist_container}>{newsList}</div>;
}
export default NewsList;
