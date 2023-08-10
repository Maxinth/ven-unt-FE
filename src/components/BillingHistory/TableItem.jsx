import CheckIcon from "../../assets/Checkbox.svg";
import DownloadCloud from "../../assets/download-cloud.svg";
import PeopleImg from "../../assets/5-people-table-img.svg";

const TableItem = () => {
  return (
    <div className="px-4 border border-t-[#D0D5DD] w-full bg-[#FFF] text-sm leading-[20px] font-medium text-[#667085] flex md:justify-between items-center ">
      <div className="flex items-center cursor-pointer w-[229px] lg:min-w-[495px]">
        <img src={CheckIcon} alt="check" className="cursor-pointer" />
        <span className="ml-3 mr-1 min-w-[150px] px-6 py-4">
          Basic Plan – Dec 2022
        </span>
      </div>
      <div className="w-full flex item-center ml-4 !bg-[#FFF]">
        <span className="px-6 py-3 min-w-[160px] flex items-center justify-center">
          USD $10.00
        </span>
        <span className="px-6 py-3 flex items-center justify-center min-w-[140px] bg-[#FFF]">
          Dec 1, 2022
        </span>
        <span className="px-6 py-3 flex items-center justify-center min-w-[110px] bg-[#FFF] ">
          Paid
        </span>
        <span className="px-6 py-3 break-words min-w-[200px]  flex items-center justify-end bg-[#FFF]">
          <img src={PeopleImg} alt="people" />
        </span>
        <span className="px-6 py-3    flex items-center justify-end bg-[#FFF]">
          <img
            src={DownloadCloud}
            alt="download cloud"
            className="cursor-pointer"
          />
        </span>
      </div>
    </div>
  );
};

export default TableItem;
