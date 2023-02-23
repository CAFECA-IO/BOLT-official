import { NextApiRequest, NextApiResponse } from "next";
import { getNewsById } from "@/interfaces/news_detail";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { newsId } = req.query;

  const news = getNewsById(newsId as string);

  res.status(200).send({ news });
}
