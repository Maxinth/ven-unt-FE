import Logo from "../../assets/logo.svg";
import Hamburger from "../../assets/menu.svg";
import PropTypes from "prop-types";

const Navbar = ({ toggleMobileSideBarView }) => {
  return (
    <nav className="w-full p-4 border border-[#EAECF0]">
      <div className="mobile flex items-center justify-between">
        <img src={Logo} alt="logo" />
        <img
          src={Hamburger}
          alt="menu"
          className="cursor-pointer"
          onClick={toggleMobileSideBarView}
        />
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  toggleMobileSideBarView: PropTypes.func,
};

export default Navbar;
