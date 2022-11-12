import React from "react";
import  "./pagination.css";
const Pagination = ({ setPageNumber, pageNumber, perPage, numberOfCards }) => {
  const pages = [];
  for (let i = 1; i <= Math.ceil(numberOfCards / perPage); i++) {
    pages.push(i);
  }


  return (
    <div className="pages">
      <div
        onClick={() => {
          setPageNumber((preveState) =>
            preveState > 1 ? preveState - 1 : preveState
          );
        }}
        className={`pageIndex ${pageNumber-1===0?"disable":""}`}
      >
        preve
      </div>

      {pages.map((page) => {
        return (
          <div
          key={page}
            onClick={() => {
              setPageNumber(page);
            }}
            className={`pageIndex ${
              page === pageNumber ? "show" : ""
            }`}
          >
            {page}
          </div>
        );
      })}
      <div
        onClick={() => {
          setPageNumber((preveState) =>
            preveState < Math.ceil(numberOfCards / perPage)
              ? preveState + 1
              : preveState
          );
        }}
        className={`pageIndex ${pageNumber===Math.ceil(numberOfCards / perPage)?"disable":""}`}
      >
        next
      </div>
    </div>
  );
};

export default Pagination;
