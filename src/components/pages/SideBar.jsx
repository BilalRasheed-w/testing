import React from "react";
import User_Mini_Card from "../ui/User_Mini_Card";
import { Link } from "react-router-dom";
import {
  ArrowLeftRight,
  CircleGauge,
  House,
  MailCheck,
  Mails,
  NotebookPen,
  Users,
} from "lucide-react";

const admin = false;

const admin_options = [
  {
    link: "employees",
    name: "Employees",
    icon: <Users className="inline-block 2xl:size-8" />,
  },
  {
    link: "allLeaves",
    name: "All Leaves",
    icon: <ArrowLeftRight className="inline-block 2xl:size-8" />,
  },
  {
    link: "emails",
    name: "All Emails",
    icon: <Mails className="inline-block 2xl:size-8" />,
  },
];

const SideBar = ({ setshowActiveView }) => {
  return (
    <div
      className="side_menu w-[35%] border-2 
       bg-light/40 backdrop-blur-2xl rounded-3xl   
        border-gray-200 px-4 min-h-full flex items-center py-8 flex-col space-y-5  2xl:px-8  "
    >
      <User_Mini_Card setshowActiveView={setshowActiveView} link={"profile"} />
      <div className="options_list flex flex-col text-start text-white  w-full ">
        <div className="w-full text-white ">
          <Link to={"/"}>
            <button
              className="cursor-pointer bg-blue 
          hover:scale-105 transition-transform hover:bg-indigo-600 2xl:text-2xl 
          px-5 py-2 xl:gap-2 rounded-2xl m-1 w-full text-start flex items-center gap-4   "
            >
              <House className="inline-block  2xl:size-8" /> Home
            </button>
          </Link>
        </div>

        {admin
          ? // admin buttons
            admin_options.map((item, i) => (
              <Side_Bar_Button
                key={i}
                setshowActiveView={setshowActiveView}
                link={item.link}
                name={item.name}
                icon={item.icon}
              />
            ))
          : // user buttons
            side_options.map((item, i) => (
              <Side_Bar_Button
                key={i}
                setshowActiveView={setshowActiveView}
                link={item.link}
                name={item.name}
                icon={item.icon}
              />
            ))}
      </div>
    </div>
  );
};

export default SideBar;

const Side_Bar_Button = ({ setshowActiveView, link, name, icon }) => {
  return (
    <button
      onClick={() => setshowActiveView(link)}
      className="cursor-pointer bg-blue 
              flex items-center gap-4 xl:gap-2
             hover:scale-105 transition-transform hover:bg-indigo-600
             2xl:text-2xl xl:py-2
            px-5 py-3 rounded-2xl m-1 w-full text-start   "
    >
      {icon}
      {name}
    </button>
  );
};

const side_options = [
  {
    link: "attendance",
    name: "Attendance",
    icon: <NotebookPen className="inline-block 2xl:size-8" />,
  },
  {
    link: "leave",
    name: "Leave",
    icon: <CircleGauge className="inline-block 2xl:size-8" />,
  },
  {
    link: "email",
    name: "Email",
    icon: <MailCheck className="inline-block 2xl:size-8" />,
  },
];
