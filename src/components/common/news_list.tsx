import NewsItems from "./news_items";
import { INewsDetail } from "@/interfaces/news_detail";

function NewsList(props: {
  newsData: INewsDetail[];
  styles: { [key: string]: string };
}) {
  const { newsData, styles } = props;

  const newsList = newsData ? (
    newsData.map((v) => {
      return (
        <NewsItems
          key={v.id}
          id={v.id}
          title={v.title}
          timestamp={v.timestamp}
          thumbnail={v.thumbnail}
          contents={v.contents}
          styles={styles}
        />
      );
    })
  ) : (
    <div>
      <h1>無法載入最新消息，請稍後再試</h1>
    </div>
  );

  return <div className={styles.newslist_container}>{newsList}</div>;
}
export default NewsList;
