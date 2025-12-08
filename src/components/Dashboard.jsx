import { useState } from "react";

import UserDetails from "./pages/UserDetails";
import Attendance from "./pages/Attendance";
import Leave from "./pages/Leave";
import Email from "./pages/Email";

import SideBar from "./pages/SideBar";
import Employees from "./Admin/Employees";

import Leaves from "./Admin/Leaves";
import Emails from "./Admin/Emails";

const Dashboard = () => {
  const [activeView, setshowActiveView] = useState("profile");

  return (
    <div className="min-h-screen bg-blue flex  gap-4 px-8 py-10 ">
      <SideBar setshowActiveView={setshowActiveView} />
      <div
        className="details_component  flex flex-col  min-h-full w-full bg-light/30  backdrop-blur-2xl rounded-xl
        shadow-md border-t-2 border-t-gray-300 shadow-white p-8 space-y-8 "
      >
        <UserDetails />

        {/* Admin components  */}
        {activeView === "employees" && <Employees />}
        {activeView === "allLeaves" && <Leaves />}
        {activeView === "emails" && <Emails />}

        {/* User components  */}

        {activeView === "attendance" && <Attendance />}
        {activeView === "leave" && <Leave />}
        {activeView === "email" && <Email />}
      </div>
    </div>
  );
};

export default Dashboard;
