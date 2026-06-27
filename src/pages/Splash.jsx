import { ClipboardList } from "lucide-react";
import { useEffect, useState } from "react";
export default function Splash() {
  const [progress,setProgress]= useState(0);

  useEffect(()=>{
    const interval = setInterval(()=>{
      setProgress((prev)=>{
        if(prev>=100){
          clearInterval(interval);
          return 100;
        } 
        return prev+1;
      })
    },20);
    return ()=> clearInterval(interval);
  },[])
  return (
    <div
      className="
        h-screen
        flex
        flex-col
        gap-3
        items-center
        justify-center
        bg-[#F7F7FF]
        dark:bg-[#070600]
        font-mono
        "
    >
      <div
        className="
            w-105
            rounded-3xl
            border
            border-white/30
            bg-white/30
            dark:bg-white/10
            backdrop-blur-lg
            shadow-lg
            p-10
            text-center
            "
      >
        <ClipboardList size={70} className="mx-auto dark:text-white text-[#57737a]"/>

        <h1
          className="
                mt-6
                text-4xl
                font-bold
                text-[#57737A]
                dark:text-white
                "
        >
          ClipStack
        </h1>

        <p
          className="
                mt-2
                text-gray-600
                dark:text-gray-300
                "
        >
          Your clipboard, organized.
        </p>

        <div
          className="
                mt-8
                h-2
                rounded-full
                bg-white/20
                overflow-hidden
                "
        >
          <div
            className="
                    h-full
                    bg-[#57737A]
                    animate-pulse
                    rounded-full
                    "
            style={{width:`${progress}%`}}
          />
        </div>
      </div>
      <p className="mt-6 text-xs text-gray-400">Version 1.0.0</p>
    </div>
  );
}
