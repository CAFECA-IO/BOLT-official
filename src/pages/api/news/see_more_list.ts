import { NextApiRequest, NextApiResponse } from "next";
import { dummyNewsData } from "@/interfaces/news_detail";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const allNews = dummyNewsData;
  const newsId = req.query.newsId;
  const newsIndex = Number(newsId?.slice(1));

  const newsList = allNews.slice(newsIndex - 2, newsIndex + 1);
  const seeMoreList =
    newsId === "n001"
      ? allNews.slice(1, 2)
      : newsList.filter((news) => !(news.id === newsId));

  //random

  res.status(200).send(seeMoreList);
}
