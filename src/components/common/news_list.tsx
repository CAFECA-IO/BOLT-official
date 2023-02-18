import myStyles from "@/styles/about.module.css";
import NewsItems from "./news_items";
import { dummyNewsData } from "@/interfaces/news_detail";

function NewsList(max = 4) {
  const newsData = dummyNewsData;
  if (max > 6) {
    newsData.splice(4);
  }
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
