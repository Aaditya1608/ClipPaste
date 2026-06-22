import { useTheme } from "../context/ThemeContext.jsx";
import { Sun, Moon } from "lucide-react";
import IconButton from "./IconButton.jsx";

const darkTheme = () => {
  const { dark, toggleTheme } = useTheme();
  return (
    <>
      {dark ? <IconButton Icon={Sun} onClick={toggleTheme}/> : <IconButton Icon={Moon} onClick={toggleTheme}/>}
    </>
  );
};

export default darkTheme;
