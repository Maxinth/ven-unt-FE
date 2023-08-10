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

  const isActiveCard = () => {
    if (visa && text === "Visa") {
      return true;
    }

    if (!visa && text === "Visa") {
      return false;
    }

    if (mastercard && text === "Mastercard") {
      return true;
    }
    if (!mastercard && text === "Mastercard") {
      return false;
    }
  };
  return (
    <div
      className={`group md:w-full cursor-pointer flex items-start flex-wrap justify-between mb-3 ease-in ${
        isActiveCard() ? "bg-[#F9F5FF]" : "bg-white"
      } rounded-lg p-4 border border-[#D6BBFB`}
      onClick={() => handleCardClick(text?.toLowerCase())}
    >
      <div className="flex items-start">
        <img src={cardIcon} alt="visa" />
        <div className="ml-3">
          <p
            className={` ${
              isActiveCard() ? "text-[#53389E]" : "text-[#344054]"
            } font-medium`}
          >
            {text} ending in 1234
          </p>
          <p className={`${isActiveCard() ? "text-[#7F56D9]" : "#667085"} `}>
            Expiry 06/2024
          </p>
          <div className="mt-2">
            <span
              className={`${
                isActiveCard() ? "text-[#9E77ED]" : "text-[#667085] "
              } font-medium mr-3`}
            >
              Set as default
            </span>
            <span
              className={`${
                isActiveCard() ? "text-[#6941C6]" : "text-[#667085] "
              } font-medium`}
            >
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
