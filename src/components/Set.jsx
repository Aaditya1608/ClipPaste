import React from "react";
import { Settings } from "lucide-react";

const Sets = () => {
  return (
    <button
  className="
    h-8 w-8
    flex items-center justify-center
    rounded-full
    dark:bg-[#F6F6F7]
    bg-[#161618]
    border border-white
    dark:text-black text-white
    shadow-lg dark:shadow-black/40
  "
>
  <Settings size={18} />
</button>
  );
};

export default Sets;
