import { useEffect, memo, useDeferredValue } from "react";
import { useTable, usePagination } from "react-table";
import "./styles.css";
import TableContainer from "./TableContainer";

type Props = {
  data: any[];
  fetchData: (pageIndex: number) => Promise<any>;
  columns: any[];
  pageCount: number;
};

function FooterItem() {
  let now = performance.now();
  while (performance.now() - now < 3) {
    // Note: this is an INTENTIONALLY EMPTY loop that
    // DOES NOTHING for 3 milliseconds for EACH ITEM.
    //
    // It's meant to emulate what happens in a deep
    // component tree with calculations and other
    // work performed inside components that can't
    // trivially be optimized or removed.
  }
  return <div className="ListItem">Hola</div>;
}

function Footer({ total = 1 }: { total: number }) {
  return (
    <div>
      <div>{total}</div>
      {Array(50 * total)
        .fill(0)
        .map((d) => (
          <FooterItem />
        ))}
    </div>
  );
}

const MemoFooter = memo(Footer);

export default function Table({
  data,
  fetchData,
  columns,
  pageCount: controlledPageCount
}: Props) {
  const tableInstance = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
      manualPagination: true,
      pageCount: controlledPageCount
    },
    usePagination
  );

  const {
    canPreviousPage,
    canNextPage,
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    nextPage,
    previousPage,
    state: { pageIndex }
  } = tableInstance;

  useEffect(() => {
    fetchData(pageIndex);
  }, [pageIndex, fetchData]);

  const defPageIndex = useDeferredValue(pageIndex);

  return (
    <div>
      <TableContainer>
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </TableContainer>
      <div className="pagination">
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {"<"}
        </button>
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {">"}
        </button>
      </div>
      <MemoFooter total={(defPageIndex + 1) * 2} />
    </div>
  );
}
