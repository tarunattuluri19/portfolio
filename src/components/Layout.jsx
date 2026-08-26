import { useState } from "react";
import Chip from "./Chip";
import { Outlet, useNavigate } from "react-router-dom";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import brandLogo from "../assets/letter-t-.png";

const tabs = [
  { label: "About Me", target: "/" },
  { label: "Projects", target: "projects" },
  { label: "Contact", target: "contact" },
];

const Layout = () => {
  const navigate = useNavigate();
  const { isDark, toggleTheme } = useTheme();
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <nav className="mt-4 flex flex-wrap items-center justify-between gap-4 border-b border-gray-200 dark:border-gray-800 pb-4 animate-slideInDown">
        <button
          onClick={() => {
            setActiveTab(0);
            navigate("/");
          }}
          className="flex items-center gap-3 text-left"
          aria-label="Go to home page"
        >
          <img
            src={brandLogo}
            alt="Tarun Attuluri brand logo"
            className="h-10 w-10 rounded-lg object-contain"
          />
          <span className="font-bold text-lg text-gray-900 dark:text-white">
            Tarun Attuluri
          </span>
        </button>

        <div className="flex flex-wrap items-center gap-2">
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

        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-all duration-300 hover-lift"
          aria-label="Toggle theme"
        >
          {isDark ? (
            <Sun size={22} className="text-yellow-400" />
          ) : (
            <Moon size={22} className="text-gray-700" />
          )}
        </button>
      </nav>
      <div className="animate-fadeIn">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
