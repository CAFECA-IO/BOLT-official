import myStyles from "@/styles/about.module.css";
import NewsItems from "./news_items";
import { getAllNews } from "@/interfaces/news_detail";

function NewsList(props: { max: number }) {
  const newsData = getAllNews();
  if (props.max > 6) {
    newsData.splice(4);
  }

  const newsList = newsData.map((v) => {
    return (
      <NewsItems
        key={v.id}
        id={v.id}
        title={v.title}
        date={v.date}
        thumbnail={v.thumbnail}
        contents={v.contents}
      />
    );
  });

  return <div className={myStyles.newslist_container}>{newsList}</div>;
}
export default NewsList;
