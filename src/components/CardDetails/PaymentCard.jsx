import Checked from "../../assets/check-mark.svg";
import PropTypes from "prop-types";

const PaymentCard = ({ text, cardIcon }) => {
  return (
    <div className="group flex items-start justify-between mb-3 ease-in bg-[#F9F5FF] rounded-lg p-4 border border-[#D6BBFB">
      <div className="flex items-start">
        <img src={cardIcon} alt="visa" />
        <div className="ml-3">
          <p className="text-[#344054] group-hover:text-[#53389E] font-medium">
            {text} ending in 1234
          </p>
          <p className="text-[#7F56D9]">Expiry 06/2024</p>
          <div className="mt-2">
            <span className="text-[#667085] group-hover:text-[#9E77ED] font-medium mr-3">
              Set as default
            </span>
            <span className="text-[#667085] group-hover:text-[#6941C6] font-medium">
              Edit
            </span>
          </div>
        </div>
      </div>
      <img src={Checked} alt="check" />
    </div>
  );
};

PaymentCard.propTypes = {
  text: PropTypes.string,
  cardIcon: PropTypes.string,
};

export default PaymentCard;
