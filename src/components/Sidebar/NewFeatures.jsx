import ladyImg from "../../assets/sidebar-lady.svg";

const NewFeatures = () => {
  return (
    <div className="bg-[#F9FAFB] py-[20px] px-[16px] max-w-[247px]">
      <p className="text-[#101828] font-medium text-[14px] leading-[20px] mb-1">
        New features available
      </p>
      <p className="font-normal text-[14px] leading-[20px] text-[#667085] mb-4">
        Check out the new dashboard view. Pages now load faster.{" "}
      </p>
      <img src={ladyImg} alt="lady" className="rounded-[8px] mb-4" />
      <div className="text-[14px]">
        <span className="mr-3">Dismiss</span>
        <span className="text-[#6941C6]">What’s new?</span>
      </div>
    </div>
  );
};

export default NewFeatures;
