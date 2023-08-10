import BillingHistory from "./components/BillingHistory";
import CardDetails from "./components/CardDetails";
import ContactAndEmail from "./components/ContactAndEmail";
import Navbar from "./components/Navbar";
import SettingsAndPayment from "./components/SettingsAndPayment";
import Sidebar from "./components/Sidebar";
import { useState } from "react";

function App() {
  const [openMobileSideBar, setOpenMobileSideBar] = useState(false);
  const toggleMobileSideBarView = () =>
    setOpenMobileSideBar(!openMobileSideBar);

  return (
    <main className="relative w-full">
      <Navbar toggleMobileSideBarView={toggleMobileSideBarView} />
      <div className="block md:flex w-full">
        <Sidebar isMobileSideBarOpen={openMobileSideBar} />
        <section className="bg-[#F9FAFB] mt-6 w-full md:px-[24px]">
          <SettingsAndPayment />
          <ContactAndEmail />
          <CardDetails />
          <BillingHistory />
        </section>
      </div>
    </main>
  );
}

export default App;
