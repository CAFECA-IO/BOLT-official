import { Dispatch, SetStateAction, useState, useEffect } from "react";
import Link from "next/link";
import myStyles from "@/styles/news.module.css";

interface IPagination {
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

function Pagination({ currentPage, setCurrentPage }: IPagination) {
  const [pages, setPages] = useState<Number[]>([]);

  useEffect(() => {
    fetch(`/api/news/pagination`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setPages(data);
      })
      .catch((e) => {
        throw e; // ++ ToDo: 導入錯誤頁面
      });
  }, []);

  const paging = pages.map((i) => {
    return (
      <Link
        key={Number(i)}
        href={{ pathname: "/news", query: { page: `${i}` } }}
        onClick={() => setCurrentPage(Number(i))}
      >
        <button
          style={
            i === currentPage
              ? { backgroundColor: "#31d3f5", color: "#ffffff" }
              : {}
          }
        >
          {Number(i)}
        </button>
      </Link>
    );
  });

  const frontArrow =
    currentPage === pages[0] ? (
      <></>
    ) : (
      <Link href={`/news?page=${currentPage - 1}`}>
        <label
          className={myStyles.front}
          onClick={() => setCurrentPage(currentPage - 1)}
        ></label>
      </Link>
    );

  const nextArrow =
    currentPage === pages[pages.length - 1] ? (
      <></>
    ) : (
      <Link href={`/news?page=${currentPage + 1}`}>
        <label
          className={myStyles.next}
          onClick={() => setCurrentPage(currentPage + 1)}
        ></label>
      </Link>
    );

  return (
    <div className={myStyles.pagination}>
      {frontArrow}
      {paging}
      {nextArrow}
    </div>
  );
}

export default Pagination;
