import React from "react";

const Pagination = ({ onPageChange, currentPage, products, pageSize }) => {
  const totalPages = Math.ceil(products.length / pageSize);
  console.log(totalPages);
  const renderPaginationLinks = () => {
    return Array.from({ length: totalPages }, (_, i) => i + 1).map(
      (pageNumber) => (
        <li
          className={
            pageNumber === currentPage
              ? "activePagination font-bold  text-orange-600"
              : "hover:text-orange-500"
          }
          key={pageNumber}>
          <a
            href='#'
            onClick={() => onPageChange(pageNumber)}
            className='p-4 text-xl border border-gray-300 m-2'>
            {pageNumber}
          </a>
        </li>
      )
    );
  };
  return (
    <ul className='pagination w-[80%] mx-auto my-30 justify-center  flex  flex-wrap gap-4'>
      <li>
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className='cursor-pointer'>
          Previous
        </button>
      </li>
      <div className='flex justify-between items-center '>
        {" "}
        {renderPaginationLinks()}{" "}
      </div>
      <li>
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className='cursor-pointer'>
          Next
        </button>
      </li>
    </ul>
  );
};

export default Pagination;
