import InvoiceHeader from "./InvoiceHeader";
import TableItem from "./TableItem";

const Table = () => {
  return (
    <div className="mx-3 shadow-md rounded-sm overflow-x-auto">
      <InvoiceHeader />
      <TableItem />
      <TableItem />
      <TableItem />
      <TableItem />
    </div>
  );
};

export default Table;
