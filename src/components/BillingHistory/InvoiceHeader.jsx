import ArrowDrop from "../../assets/arrow-down.svg";
import CheckIcon from "../../assets/Checkbox.svg";

const InvoiceHeader = () => {
  return (
    <div className="px-4 bg-[#F9FAFB] text-xs leading-[18px] font-medium text-[#667085] flex md:justify-between items-center ">
      <div className="flex items-center cursor-pointer min-w-[150px] w-[229px] md:min-w-[360px]">
        <img src={CheckIcon} alt="check" className="cursor-pointer" />
        <span className="ml-3 mr-1">Invoice</span>
        <img src={ArrowDrop} alt="arrow drop" />
      </div>
      <div className="w-full flex item-center ml-[82px] md:ml-12">
        <span className="px-6 py-3 min-w-[150px] pl-14 mr-12 md:mr-0 md:pl-2 md:block flex items-center">
          Amount
        </span>
        <span className="px-6 py-3 min-w-[140px] pl-2 md:pl-2">Date</span>
        <span className="px-6 py-3 min-w-[130px] pl-2 md:pl-2">Status</span>
        <span className="px-6 py-3 break-words pl-2 min-w-[150px] md:px-0">
          Users on plan
        </span>
      </div>
    </div>
  );
};

export default InvoiceHeader;
