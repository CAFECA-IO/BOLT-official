import { NextApiRequest, NextApiResponse } from "next";
import { dummyNewsData } from "@/interfaces/news_detail";
//import { getNewsById } from "@/interfaces/news_detail";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { newsId } = req.query;

  function getNewsById(id: string) {
    const news = dummyNewsData.find((news) => news.id === id);
    return news || null;
  }

  const news = getNewsById(newsId as string);

  res.status(200).send({ news });
}
