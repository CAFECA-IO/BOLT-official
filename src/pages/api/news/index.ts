import { NextApiRequest, NextApiResponse } from "next";
import { dummyNewsData } from "@/interfaces/news_detail";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const allNews = dummyNewsData;
  const page = req.query.page ? (req.query.page as string) : "1";

  res.status(200).send(allNews);
}
