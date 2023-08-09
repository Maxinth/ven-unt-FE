import Checked from "../../assets/checkbox-check.svg";
import Unchecked from "../../assets/checkbox-unchecked.svg";
import Mail from "../../assets/mail.svg";
import { useState } from "react";

const ContactAndEmail = () => {
  const [account, setAccount] = useState({
    accountEmail: false,
    alternativeEmail: true,
  });

  const reset = {
    accountEmail: false,
    alternativeEmail: false,
  };

  const handleClick = (id) => {
    setAccount((prev) => ({
      ...reset,
      [id]: !account[id],
    }));
  };

  const { accountEmail, alternativeEmail } = account;

  return (
    <div className="mt-6 p-4 text-[14px] leading-[20px]">
      <div className="mb-[20px]">
        <p className=" text-[#344054] font-medium ">Contact email</p>
        <span className="text-[#667085] font-normal">
          Where should invoices be sent?
        </span>
      </div>
      <section>
        <div className="flex items-start mb-4">
          <img
            src={accountEmail ? Checked : Unchecked}
            alt="check icon"
            className="relative top-1"
            onClick={() => handleClick("accountEmail")}
          />
          <div className="ml-2">
            <p className="text-[#344054] font-medium">
              Send to my account email
            </p>
            <span className="text-[#667085] font-normal">
              olivia@untitledui.com
            </span>
          </div>
        </div>
        <div className="flex items-start">
          <img
            src={alternativeEmail ? Checked : Unchecked}
            alt="check icon"
            className="relative top-1"
            onClick={() => handleClick("alternativeEmail")}
          />
          <div className="ml-2">
            <p className="text-[#344054] font-medium mb-[12px]">
              Send to an alternative email
            </p>
            <span className="text-[#667085] px-[14px] border border-[#D0D5DD] font-normal flex items-center  rounded-[8px]">
              <img src={Mail} alt="" />{" "}
              <input
                type="text"
                placeholder="billing@untitledui.com"
                className="outline-none px-[14px] py-[10px]"
              />
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactAndEmail;
