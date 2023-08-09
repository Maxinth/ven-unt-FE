import profile from "../../assets/Avatar.svg";
import exportBtn from "../../assets/export.svg";

const Contact = () => {
  return (
    <div className="border-t border-t-[#EAECF0] mt-6 flex items-start justify-between pt-[24px]">
      <div className="flex items-center">
        <img src={profile} alt="avatar" />
        <div className="text-[14px] ml-[12px] mr-[10px]">
          <p className="font-medium">Olivia Rhye</p>
          <p className="font-normal text-[#667085]">olivia@untitledui.com</p>
        </div>
      </div>
      <img src={exportBtn} alt="export" className="relative -top-2" />
    </div>
  );
};

export default Contact;
