import NewsItems from "./news_items";
import { getAllNews } from "@/interfaces/news_detail";

function NewsList(props: { styles: { [key: string]: string }; max: number }) {
  const newsData = getAllNews();

  const { styles, max } = props;
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
        thumbnail={v.thumbnail}
        contents={v.contents}
        styles={styles}
      />
    );
  });

  return <div className={styles.newslist_container}>{newsList}</div>;
}
export default NewsList;
