import { useState, useEffect } from "react";
import myStyles from "@/styles/news.module.css";

interface IPagination {
  currentPage: number;
  paginationHandler: (page: number) => void;
}

function Pagination({ currentPage, paginationHandler }: IPagination) {
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
      <button
        key={Number(i)}
        style={
          i === currentPage
            ? { backgroundColor: "#31d3f5", color: "#ffffff" }
            : {}
        }
        onClick={() => paginationHandler(Number(i))}
      >
        {Number(i)}
      </button>
    );
  });

  const frontArrow =
    currentPage === pages[0] ? (
      <></>
    ) : (
      <label
        className={myStyles.front}
        onClick={() => paginationHandler(currentPage - 1)}
      ></label>
    );

  const nextArrow =
    currentPage === pages[pages.length - 1] ? (
      <></>
    ) : (
      <label
        className={myStyles.next}
        onClick={() => paginationHandler(currentPage + 1)}
      ></label>
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
