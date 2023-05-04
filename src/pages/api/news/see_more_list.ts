import { NextApiRequest, NextApiResponse } from "next";
import { dummyNewsData } from "@/interfaces/news_detail";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const allNews = dummyNewsData;
  const newsId = req.query.newsId;
  const newsIndex = Number(newsId?.slice(1));
  const maxNewsIndex = allNews.length;

  // 取得前一篇和後一篇 news
  const newsList = allNews.slice(newsIndex - 2, newsIndex + 1);
  const seeMoreList =
    newsId === "n001"
      ? allNews.slice(1, 2)
      : newsList.filter((news) => !(news.id === newsId));
  /* ToDo: (20230504 - Julian) 修正隨機 news 的邏輯
  // 取得隨機一篇 news
  const getRandomNews = (max: number) => {
    const randomNumber = Math.floor(Math.random() * max);
    // 將隨機數字轉成 newsId 格式字串
    const randomIndex = "n" + String(randomNumber).padStart(3, "0");

    const randomNews = !newsList.find((news) => news.id === randomIndex)
      ? allNews[randomNumber - 1]
      : allNews[randomNumber];

    return randomNews;
  };

  seeMoreList.push(getRandomNews(maxNewsIndex)); */

  res.status(200).send(seeMoreList);
}
