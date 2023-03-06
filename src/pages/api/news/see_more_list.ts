import { NextApiRequest, NextApiResponse } from "next";
import { dummyNewsData } from "@/interfaces/news_detail";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const newsId = req.query.newsId as string;

  const seeMoreList = dummyNewsData.slice();
  //const news = dummyNewsData.find((news) => news.id === newsId) || null;

  res.status(200).send(newsId);
}
