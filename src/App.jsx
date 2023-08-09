import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { useState } from "react";
function App() {
  const [openMobileSideBar, setOpenMobileSideBar] = useState(false);
  const toggleMobileSideBarView = () =>
    setOpenMobileSideBar(!openMobileSideBar);
  return (
    <main className="relative w-full">
      <Navbar toggleMobileSideBarView={toggleMobileSideBarView} />
      <Sidebar isMobileSideBarOpen={openMobileSideBar} />
    </main>
  );
}

export default App;
