import { NextApiRequest, NextApiResponse } from "next";
import { dummyNewsData } from "@/interfaces/news_detail";
import { NEWS_PER_PAGE } from "@/constants/config";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const allNews = dummyNewsData;
  const page = req.query.page ? (req.query.page as string) : "1";

  const lastNewsIndex = Number(page) * NEWS_PER_PAGE;
  const firstNewsIndex = lastNewsIndex - NEWS_PER_PAGE;
  const currentNews = allNews.slice(firstNewsIndex, lastNewsIndex);

  res.status(200).send(currentNews);
}
