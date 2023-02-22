import { NextApiRequest, NextApiResponse } from "next";
import { dummyNewsData } from "@/interfaces/news_detail";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const newsId = req.query.newsId as string;

  function getNewsById(id: string) {
    const getNews = dummyNewsData.find((news) => news.id === id);
    return getNews || null;
  }

  const news = getNewsById(newsId);

  res.status(200).send(news);
}
