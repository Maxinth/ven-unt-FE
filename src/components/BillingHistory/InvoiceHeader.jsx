import ArrowDrop from "../../assets/arrow-down.svg";
import CheckIcon from "../../assets/Checkbox.svg";

const InvoiceHeader = () => {
  return (
    <div className="px-4 bg-[#F9FAFB] text-xs leading-[18px] font-medium text-[#667085] flex md:justify-between items-center ">
      <div className="flex items-center cursor-pointer min-w-[150px] w-[229px] lg:min-w-[495px]">
        <img src={CheckIcon} alt="check" className="cursor-pointer" />
        <span className="ml-3 mr-1">Invoice</span>
        <img src={ArrowDrop} alt="arrow drop" />
      </div>
      <div className="w-full flex item-center ml-12 ">
        <span className="px-6 py-3 min-w-[150px] md:pl-2">Amount</span>
        <span className="px-6 py-3 min-w-[140px] md:pl-2">Date</span>
        <span className="px-6 py-3 min-w-[130px] md:pl-2">Status</span>
        <span className="px-6 py-3 break-words min-w-[150px] md:pl-2">
          Users on plan
        </span>
      </div>
    </div>
  );
};

export default InvoiceHeader;
