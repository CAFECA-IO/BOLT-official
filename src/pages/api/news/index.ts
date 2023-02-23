import { NextApiRequest, NextApiResponse } from "next";
import { dummyNewsData } from "@/interfaces/news_detail";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  //const newsId = req.query.newsId as string;

  //const news = dummyNewsData.find((news) => news.id === newsId) || null;

  const allNews = dummyNewsData;

  res.status(200).send(allNews);
}
