const TablePaginated = ({
  page = 1,
  totalPages = 0,
  prevPage = () => {},
  nextPage = () => {},
}) => {
  const hasPrevPage = page > 1;
  const hasNextPage = page < totalPages;
  return (
    <div className="flex flex-row items-center justify-center w-full px-3 my-3">
      <div className="flex gap-4 justify-center items-center text-base">
        <PaginationButton enabled={hasPrevPage} onClick={prevPage}>
          &lt;
        </PaginationButton>
        <div>
          Página
          <span className="ml-2 font-semibold text-gray-700">{page}</span>
          <span className="ml-2 font-semibold text-gray-400">de</span>
          <span className="ml-2 font-semibold text-gray-400">{totalPages}</span>
        </div>
        <PaginationButton enabled={hasNextPage} onClick={nextPage}>
          &gt;
        </PaginationButton>
      </div>
    </div>
  );
};

const PaginationButton = (props) => {
  return (
    <button
      className={`rounded py-0 text-2xl cursor-pointer font-bold ${
        props.enabled ? "text-blue-300" : "text-gray-300"
      }`}
      onClick={() => props.onClick()}
      disabled={!props.enabled}
    >
      {props.children}
    </button>
  );
};

export default TablePaginated;
