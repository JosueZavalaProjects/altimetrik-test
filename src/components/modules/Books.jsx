import { Table } from "../table";
import { TRow } from "../table/TRow";
import { useBooks } from "../../hooks/use-books";
import { Loading } from "../ui/Spinner/Loading";
import TablePaginated from "../table/Pagination";
import { useEffect, useState } from "react";

export const BooksTable = () => {
  const PAGE_SIZE = 3; // Challenge definition
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [books, setBooks] = useState([]);

  const { data, isLoading } = useBooks();

  const handleCreatePagination = () =>
    setTotalPages(Math.ceil(data.length / PAGE_SIZE));

  const handleChangePage = () => {
    const end = page * PAGE_SIZE;
    const start = end - PAGE_SIZE;
    setBooks([...data].slice(start, end));
  };

  useEffect(() => {
    if (!data?.length) return;
    handleCreatePagination();
  }, [data]);

  useEffect(() => {
    if (!data?.length) return;

    handleChangePage();
  }, [page, data]);

  return (
    <div className="grid gap-4 p-4">
      <div className="text-left pl-4 font-semibold">
        Most popular Books of All time
      </div>

      <div className="p-4 rounded-xl">
        {isLoading && (
          <div className="flex items-center justify-center w-full h-96">
            <Loading />
          </div>
        )}
        {!isLoading && data && (
          <>
            <Table>
              {books.map((book, index) => {
                return <TRow {...book} key={`book_Row_${index}`} />;
              })}
            </Table>
            <TablePaginated
              page={page}
              totalPages={totalPages}
              nextPage={() => setPage(page + 1)}
              prevPage={() => setPage(page - 1)}
            />
          </>
        )}
      </div>
    </div>
  );
};
