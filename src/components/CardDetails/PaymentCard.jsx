import Checked from "../../assets/check-mark.svg";
import Unchecked from "../../assets/checkbox-unchecked.svg";
import PropTypes from "prop-types";

const PaymentCard = ({ text, cardIcon, handleCardClick, card }) => {
  const { visa, mastercard } = card;

  const getCardCheckStatus = () => {
    if (visa && text === "Visa") {
      return Checked;
    }

    if (!visa && text === "Visa") {
      return Unchecked;
    }

    if (mastercard && text === "Mastercard") {
      return Checked;
    }
    if (!mastercard && text === "Mastercard") {
      return Unchecked;
    }
  };
  return (
    <div
      className="group cursor-pointer flex items-start justify-between mb-3 ease-in bg-[#F9F5FF] rounded-lg p-4 border border-[#D6BBFB"
      onClick={() => handleCardClick(text?.toLowerCase())}
    >
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
      <img src={getCardCheckStatus()} alt="check" className="cursor-pointer" />
    </div>
  );
};

PaymentCard.propTypes = {
  text: PropTypes.string,
  cardIcon: PropTypes.string,
  handleCardClick: PropTypes.func,
  card: PropTypes.object,
};

export default PaymentCard;
