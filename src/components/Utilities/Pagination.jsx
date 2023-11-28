const Pagination = ({ page, lastPage, setPage }) => {
  const scrollToTop = () => {
    scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };
  const handleNextPage = () => {
    setPage((prevState) => prevState + 1);
    scrollToTop();
  };

  const handlePrevPage = () => {
    // membuat agar jika set state 0 tidak bisa di click
    if (page <= 1) return;
    setPage((prevState) => prevState - 1);
    scrollToTop();
  };

  return (
    <div
      className="flex justify-center items-center py-4 px-2 gap-4 text-color-primary text-2xl
    "
    >
      <button
        onClick={handlePrevPage}
        className="transition-all hover:text-color-accent"
      >
        Prev
      </button>
      <p>
        {page} of {lastPage}
      </p>
      <button
        onClick={handleNextPage}
        className="transition-all hover:text-color-accent"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
