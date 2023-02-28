import { Dispatch, SetStateAction } from "react";
import myStyles from "@/styles/news.module.css";

interface IPagination {
  allNews: number;
  newsPerPage: number;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

function Pagination({
  allNews,
  newsPerPage,
  currentPage,
  setCurrentPage,
}: IPagination) {
  const pages = [];
  const lastPage = Math.ceil(allNews / newsPerPage);

  for (let i = 1; i <= lastPage; i++) {
    pages.push(i);
  }

  const paging = pages.map((i) => {
    return (
      <button
        key={i}
        style={
          i == currentPage
            ? { backgroundColor: "#31d3f5", color: "#ffffff" }
            : {}
        }
        onClick={() => setCurrentPage(i)}
      >
        {i}
      </button>
    );
  });

  const frontArrow =
    currentPage === 1 ? (
      <></>
    ) : (
      <label
        className={myStyles.front}
        onClick={() => setCurrentPage(currentPage - 1)}
      ></label>
    );

  const nextArrow =
    currentPage === lastPage ? (
      <></>
    ) : (
      <label
        className={myStyles.next}
        onClick={() => setCurrentPage(currentPage + 1)}
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
