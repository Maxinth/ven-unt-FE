import CheckIcon from "../../assets/Checkbox.svg";
import DownloadCloud from "../../assets/download-cloud.svg";
import PropTypes from "prop-types";
import PaidCheck from "../../assets/paid-check.svg";

const TableItem = ({ monthText, profiles }) => {
  return (
    <div className="px-4 border border-t-[#D0D5DD] w-fit bg-[#FFF] text-sm leading-[20px] font-medium text-[#667085] flex md:justify-between items-center ">
      <div className="flex items-center cursor-pointer w-[229px] lg:min-w-[495px]">
        <img src={CheckIcon} alt="check" className="cursor-pointer" />
        <span className="ml-3 mr-1 min-w-[150px] px-0 py-4">
          Basic Plan – {monthText} 2022
        </span>
      </div>
      <div className="w-full flex item-center ml-4 !bg-[#FFF]">
        <span className="px-6 py-3 min-w-[160px] flex items-center justify-center">
          USD $10.00
        </span>
        <span className="px-6 py-3 flex items-center justify-center min-w-[140px] bg-[#FFF]">
          {monthText} 1, 2022
        </span>
        <div className="px-6 py-3 flex items-center justify-center min-w-[110px] bg-[#FFF] ">
          <span className="bg-[#ECFDF3] text-[#12B76A] p-2 py-[4px] flex items-center rounded-2xl w-full">
            <img src={PaidCheck} alt="paid check" className="mr-[4px]" />
            Paid
          </span>
        </div>
        <span className="px-6 py-3 min-w-[190px] md:min-w-[140px]  flex items-center justify-end bg-[#FFF] md:ml-6">
          <img
            src={profiles}
            alt="people"
            className="cursor-pointer md:scale-150"
          />
        </span>
        <span className="px-6 py-3  flex items-center  min-w-[150px] justify-start md:justify-end bg-[#FFF]">
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

TableItem.propTypes = {
  monthText: PropTypes.string,
  profiles: PropTypes.string,
};

export default TableItem;
