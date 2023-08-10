import Download from "../../assets/download-cloud.svg";
import Table from "./Table";

const BillingHistory = () => {
  return (
    <section className="px-2">
      <div className="p-4 flex items-start flex-col md:flex-row md:items-center md:justify-between mb-6">
        <span className="text-lg text-[#101828] font-medium mb-4">
          Billing history
        </span>
        <div className="flex text-sm items-center text-[#344054] border border-[#D0D5DD] rounded-lg px-4 py-[10px] font-medium">
          <img src={Download} alt="cloud download" className="mr-2" />
          Download all
        </div>
      </div>
      <Table />
    </section>
  );
};

export default BillingHistory;
