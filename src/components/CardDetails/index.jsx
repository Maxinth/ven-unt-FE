import PaymentCard from "./PaymentCard";

const CardDetails = () => {
  return (
    <section className="text-[14px] p-4">
      <div>
        <p className="font-medium">Card details</p>
        <span className="font-normal leading-5">
          Select default payment method.
        </span>
      </div>
      <div>
        <PaymentCard />
      </div>
    </section>
  );
};

export default CardDetails;
