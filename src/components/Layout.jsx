import { useState } from "react";
import Chip from "./Chip";
import { Outlet, useNavigate } from "react-router-dom";

const tabs = [
  { label: "About Me", target: "/" },
  { label: "Projects", target: "projects" },
  { label: "Contact", target: "contact" },
];

const Layout = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <div className="mt-4 flex flex-row gap-4 animate-slideInDown">
        {tabs.map((tab, index) => {
          return (
            <Chip
              onClick={() => {
                setActiveTab(index);
                navigate(tab.target);
              }}
              key={tab.label}
              classNames={`flex flex-col items-center justify-center w-42 cursor-pointer text-lg lg:text-xl px-3 py-2 lg:px-6 lg:py-3 transition-all duration-300 ${
                activeTab === index
                  ? "bg-gradient-to-br from-purple-600 to-blue-600 dark:from-purple-500 dark:to-blue-500 text-white shadow-lg shadow-purple-500/50"
                  : "bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700"
              }`}
            >
              {tab.label}
            </Chip>
          );
        })}
      </div>
      <div className="animate-fadeIn">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
