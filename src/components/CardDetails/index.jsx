import PaymentCard from "./PaymentCard";
import { cardData } from "./data";
import { useState } from "react";
import Plus from "../../assets/plus.svg";

const CardDetails = () => {
  const [card, setCard] = useState({ visa: true, mastercard: false });

  const cardReset = {
    visa: false,
    mastercard: false,
  };

  const handleCardClick = (id) => {
    setCard({
      ...cardReset,
      [id]: !card[id],
    });
  };
  return (
    <section className="text-[14px] p-4 md:flex w-full overflow-auto">
      <div className="mb-[20px] md:mr-[30px] md:w-[400px]">
        <p className="font-medium">Card details</p>
        <span className="!font-normal leading-5">
          Select default payment method.
        </span>
      </div>
      <div className="w-full">
        {cardData?.map((item) => (
          <PaymentCard
            {...item}
            key={item?.text}
            handleCardClick={handleCardClick}
            card={card}
          />
        ))}
        <div className="flex items-center mt-4 leading-[20px] text-[#667085] cursor-pointer">
          <img src={Plus} alt="plusIcon" className="mr-2" />
          Add new payment method
        </div>
      </div>
    </section>
  );
};

export default CardDetails;
