import { data } from "./data";
const SettingsAndPayment = () => {
  return (
    <section className="pt-20 md:pt-0">
      <div className="p-4">
        <p className="text-[#101828] text-2xl font-medium">Settings</p>
        <span className="font-normal text-base text-[#667085] mb-6">
          Manage your team and preferences here.
        </span>
      </div>
      <div className="overflow-hidden mb-8">
        <div className="rounded-[8px] max-w-[1082px] flex items-center w-full overflow-auto border border-[#D0D5DD] md:mx-4">
          {data?.map((item) => (
            <span
              key={item}
              className="min-w-[120px] max-w-[150px] border border-r-[#D0D5DD] px-[9px] py-[10px] flex items-center justify-center"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
      <div className="px-4 pb-[20px] border-b border-b-[#EAECF0]">
        <p className="text-[#101828] text-[18px] leading-[28px] font-medium">
          Payment method
        </p>
        <span className="text-[14px] leading-[20px]">
          Update your billing details and address.
        </span>
      </div>
    </section>
  );
};

export default SettingsAndPayment;
