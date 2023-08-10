import InvoiceHeader from "./InvoiceHeader";
import TableItem from "./TableItem";
import { tableData } from "./data";
const Table = () => {
  return (
    <div className="mx-3 shadow-md rounded-sm overflow-x-auto xl:overflow-x-hidden">
      <InvoiceHeader />
      <>
        {tableData?.map((item) => (
          <TableItem {...item} key={item?.monthText} />
        ))}
      </>
    </div>
  );
};

export default Table;
