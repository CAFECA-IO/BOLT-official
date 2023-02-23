import { useState, useEffect } from "react";
import NewsItems from "./news_items";
import { getAllNews } from "@/interfaces/news_detail";
import { INewsDetail } from "@/interfaces/news_detail";

function NewsList(props: { styles: { [key: string]: string }; max: number }) {
  const newsData = getAllNews();
  const { styles, max } = props;

  const [loadedList, setLoadedList] = useState<INewsDetail[]>();

  useEffect(() => {
    fetch(`/api/news`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setLoadedList(data);
      })
      .catch((e) => {
        /*發生錯誤時要做的事情*/
        throw e; // ++ ToDo: 導入錯誤頁面
      });
  }, []);

  if (loadedList && max > 6) {
    //loadedList.splice(4);
  }

  const newsList = loadedList ? (
    newsData.map((v) => {
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
    })
  ) : (
    <div>
      <h1>無法載入最新消息，請稍後再試</h1>
    </div>
  );

  return <div className={styles.newslist_container}>{newsList}</div>;
}
export default NewsList;
