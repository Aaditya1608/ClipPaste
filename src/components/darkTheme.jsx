import React from "react";
import { useTheme } from "../context/ThemeContext.jsx";
import { Sun, Moon } from "lucide-react";

const darkTheme = () => {
  const { dark, toggleTheme } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      className="rounded-full p-1 dark:bg-[#F6F6F7] bg-[#161618] border border-white dark:text-black text-white shadow-lg dark:shadow-black/40"
    >
      {dark ? <Sun /> : <Moon />}
    </button>
  );
};

export default darkTheme;
