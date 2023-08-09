import PaymentCard from "./PaymentCard";
import { cardData } from "./data";
import { useState } from "react";

const CardDetails = () => {
  const [card, setCard] = useState({ visa: true, masterCard: false });

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
    <section className="text-[14px] p-4">
      <div>
        <p className="font-medium">Card details</p>
        <span className="font-normal leading-5">
          Select default payment method.
        </span>
      </div>
      <div>
        {cardData?.map((item) => (
          <PaymentCard
            {...item}
            key={item?.text}
            handleCardClick={handleCardClick}
            card={card}
          />
        ))}
      </div>
    </section>
  );
};

export default CardDetails;
