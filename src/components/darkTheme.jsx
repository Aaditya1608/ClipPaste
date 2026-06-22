import React from "react";
import { useTheme } from "../context/ThemeContext.jsx";
import { Sun, Moon } from "lucide-react";

const darkTheme = () => {
  const { dark, toggleTheme } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      className="h-8 w-8
    flex items-center justify-center
    rounded-full
    dark:bg-[#F6F6F7]
    bg-[#161618]
    border border-white
    dark:text-black text-white
    shadow-lg dark:shadow-black/40"
    >
      {dark ? <Sun size={18}/> : <Moon size={18}/>}
    </button>
  );
};

export default darkTheme;
