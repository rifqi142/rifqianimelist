const Pagination = ({ page, lastPage, setPage }) => {
  const scrollToTop = () => {
    window.scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };

  const handleNextPage = () => {
    if (page < lastPage) {
      setPage((prevPage) => prevPage + 1);
      scrollToTop();
    }
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
      scrollToTop();
    }
  };

  const handlePageClick = (pageNumber) => {
    setPage(pageNumber);
    scrollToTop();
  };

  const getPageNumbers = () => {
    const numbers = [];
    const maxButtons = 5; // Adjust this number based on your preference

    if (lastPage <= maxButtons) {
      for (let i = 1; i <= lastPage; i++) {
        numbers.push(i);
      }
    } else {
      const start = Math.max(1, page - Math.floor(maxButtons / 2));
      const end = Math.min(lastPage, start + maxButtons - 1);

      for (let i = start; i <= end; i++) {
        numbers.push(i);
      }
    }

    return numbers;
  };

  return (
    <div className="flex justify-center items-center py-4 px-2 gap-4 text-color-primary text-2xl">
      <button
        onClick={handlePrevPage}
        className={`transition-all hover:text-color-accent ${
          page === 1 ? "cursor-not-allowed text-gray-400" : ""
        }`}
        disabled={page === 1}
      >
        Prev
      </button>
      {getPageNumbers().map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={() => handlePageClick(pageNumber)}
          className={`transition-all hover:text-color-accent ${
            page === pageNumber ? "font-bold" : ""
          }`}
        >
          {pageNumber}
        </button>
      ))}
      <button
        onClick={handleNextPage}
        className={`transition-all hover:text-color-accent ${
          page === lastPage ? "cursor-not-allowed text-gray-400" : ""
        }`}
        disabled={page === lastPage}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
