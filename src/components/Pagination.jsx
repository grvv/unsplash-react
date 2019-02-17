import React from "react";

const Pagination = props => {
  const { previousPage, nextPage, totalPages, currentPage } = props;

  return (
    <nav aria-label="Page navigation example">
      <span>{currentPage}</span>
      of
      <span>{totalPages}</span>
      <ul className="pagination">
        <li className="page-item">
          <button
            className="page-link"
            onClick={previousPage}
            aria-label="Previous"
          >
            <span aria-hidden="true">«</span>
            <span className="sr-only">Previous</span>
          </button>
        </li>
        <li className="page-item">
          <button className="page-link" onClick={nextPage} aria-label="Next">
            <span aria-hidden="true">»</span>
            <span className="sr-only">Next</span>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
