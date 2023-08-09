import Logo from "../../assets/logo.svg";
import PropTypes from "prop-types";
import Search from "../../assets/search.svg";
import SideBarItem from "./SideBarItem";
import { dashboardSideBarData } from "./data";
import NewFeatures from "./NewFeatures";

const Sidebar = ({ isMobileSideBarOpen }) => {
  const { topSection, bottomSection } = dashboardSideBarData;
  return (
    <div
      className={`absolute top-2 max-w-[279px] left-2 p-2 px-[24px] border border-red-500 w-2/3 ease-in duration-300 z-50 bg-white  ${
        !isMobileSideBarOpen ? "translate-x-[0px]" : "-translate-x-full"
      }`}
    >
      <img src={Logo} alt="logo" />
      <div className="rounded-[8px] border border-gray-200  mt-6 flex items-center pl-[14px] mb-6 ">
        <img src={Search} alt="search" />
        <input
          type="text"
          className="w-full rounded-[8px] h-full ml-2 px-[14px] py-[10px] outline-none text-[#667085] text-base leading-6"
          placeholder="Search"
        />
      </div>
      <div className="mb-6">
        {topSection?.map((data) => (
          <SideBarItem {...data} key={data?.item} />
        ))}
      </div>
      <div>
        {bottomSection?.map((data) => (
          <SideBarItem {...data} key={data?.item} />
        ))}
      </div>
      <NewFeatures />
    </div>
  );
};

Sidebar.propTypes = {
  isMobileSideBarOpen: PropTypes.bool,
};
export default Sidebar;
