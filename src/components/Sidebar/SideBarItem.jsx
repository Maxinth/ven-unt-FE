import PropTypes from "prop-types";

const SideBarItem = ({ item, imgSrc }) => {
  return (
    <div className="flex items-center text-[#344054] font-medium px-[12px] py-[8px] ease-in duration-200 hover:bg-[#F9FAFB] cursor-pointer mb-2">
      <img src={imgSrc} alt={item} className="mr-3" />
      <span>{item}</span>
    </div>
  );
};

SideBarItem.propTypes = {
  item: PropTypes.string,
  imgSrc: PropTypes.string,
};

export default SideBarItem;
