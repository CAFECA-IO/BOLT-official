import { NextApiRequest, NextApiResponse } from "next";
import { dummyNewsData } from "@/interfaces/news_detail";
import { NEWS_PER_PAGE } from "@/constants/config";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const allNews = dummyNewsData;
  const pages: number[] = [];

  const lastPage = Math.ceil(allNews.length / NEWS_PER_PAGE);

  for (let i = 1; i <= lastPage; i++) {
    pages.push(i);
  }

  res.status(200).send(pages);
}
