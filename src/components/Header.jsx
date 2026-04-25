import SocialLinks from "./SocialLinks";
import { useTheme } from "../context/ThemeContext";
import { Moon, Sun } from "lucide-react";

const Header = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      {/* Theme Toggle */}
      <div className="flex justify-end mb-8">
        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-all duration-300 hover-lift"
          aria-label="Toggle theme"
        >
          {isDark ? (
            <Sun size={24} className="text-yellow-400" />
          ) : (
            <Moon size={24} className="text-gray-700" />
          )}
        </button>
      </div>

      <div className="flex flex-col gap-4 mb-12 animate-slideInDown">
        <h1 className="font-bold text-4xl lg:text-6xl text-gray-900 dark:text-white">
          Hi, I'm <span className="bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent">Tarun</span> 👋
        </h1>
        <p className="text-lg lg:text-xl text-gray-700 dark:text-gray-300 animate-slideInUp">
          Java Full Stack Developer | Enterprise Solutions Builder
        </p>
      </div>

      <div className="space-y-4 animate-fadeIn" style={{ animationDelay: "0.3s" }}>
        <h2 className="font-semibold text-2xl text-gray-900 dark:text-white">About</h2>
        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 space-y-2">
          Driven{" "}
          <span className="font-semibold text-gray-900 dark:text-white">
            Java Full Stack Engineer
          </span>
          {" "}with{" "}
          <span className="font-semibold text-gray-900 dark:text-white">
            3+ years
          </span>
          {" "}of professional experience delivering impactful software solutions that boost efficiency and performance. Expert in{" "}
          <span className="font-semibold text-gray-900 dark:text-white">
            Spring Boot, microservices, React, Java 17, and cloud technologies (AWS)
          </span>
          . Proficient in designing complex systems with a focus on optimization, clean code, and collaborative development. Strong advocate for agile methodologies and continuous learning.
        </p>
      </div>
      <SocialLinks />
    </div>
  );
};

export default Header;
