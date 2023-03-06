import { NextApiRequest, NextApiResponse } from "next";
import { dummyNewsData, dummyNewsError } from "@/interfaces/news_detail";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const newsId = req.query.newsId as string;

  const news = dummyNewsData.find((news) => news.id === newsId);
  const newsError = dummyNewsError.find((news) => news.id === "nError");

  res.status(200).send(news || newsError);
}
