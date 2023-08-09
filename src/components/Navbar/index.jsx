import Logo from "../../assets/logo.svg";
import Hamburger from "../../assets/menu.svg";
import PropTypes from "prop-types";

const Navbar = ({ toggleMobileSideBarView }) => {
  return (
    <nav className="w-full p-4 border border-[#EAECF0] fixed top-0 left-0 right-0 z-20 bg-white md:hidden">
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
