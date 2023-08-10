import PropTypes from "prop-types";

const SideBarItem = ({ item, imgSrc, count }) => {
  return (
    <div
      className={`ease-in duration-200 mb-2 hover:bg-[#F9FAFB] cursor-pointer ${
        count ? "flex items-center justify-between" : ""
      }`}
    >
      <div className="flex items-center text-[#344054] font-medium px-[12px] py-[8px]">
        <img src={imgSrc} alt={item} className="mr-3" />
        <span>{item}</span>
      </div>
      {count ? (
        <span className="px-[10px] py-[2px] rounded-2xl bg-[#F2F4F7] text-sm font-medium">
          {count}
        </span>
      ) : null}
    </div>
  );
};

SideBarItem.propTypes = {
  item: PropTypes.string,
  imgSrc: PropTypes.string,
  count: PropTypes.number,
};

export default SideBarItem;
