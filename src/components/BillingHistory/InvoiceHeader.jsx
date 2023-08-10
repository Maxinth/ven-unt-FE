import ArrowDrop from "../../assets/arrow-down.svg";
import CheckIcon from "../../assets/Checkbox.svg";

const InvoiceHeader = () => {
  return (
    <div className="bg-[#F9FAFB] text-xs leading-[18px] font-medium text-[#667085] flex md:justify-between items-center ">
      <div className="flex items-center cursor-pointer w-[229px] lg:min-w-[495px]">
        <img src={CheckIcon} alt="check" className="cursor-pointer" />
        <span className="ml-3 mr-1">Invoice</span>
        <img src={ArrowDrop} alt="arrow drop" />
      </div>
      <div className="w-full flex item-center ml-12 ">
        <span className="px-6 py-3">Amount</span>
        <span className="px-6 py-3">Date</span>
        <span className="px-6 py-3">Status</span>
        <span className="px-6 py-3 break-words min-w-[150px]">
          Users on plan
        </span>
      </div>
    </div>
  );
};

export default InvoiceHeader;
