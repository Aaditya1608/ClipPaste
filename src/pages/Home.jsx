import Card from "../components/Card.jsx";
import Header from "../components/Header.jsx";
import { useState } from "react";
import IconButton from "../components/IconButton.jsx";
import { Copy, X } from "lucide-react";
import useClipboard from "../hooks/useClipboard.js";

export default function Home() {
  const [selectedItem, setSelectedItem] = useState(null);
  const {history} = useClipboard();
  return (
    <div className="h-screen bg-[#f7f7ff] dark:bg-[#070600] border border-zinc-200 dark:border-zinc-700 overflow-y-auto scrollbar-thin scrollbar-thumb-[#57737a] scrollbar-track-white">
    <Header/>
    {history.map((item) => (
        <Card
          key={item.id}
          item={item}
          onClick={()=>setSelectedItem(item)}
        />
      ))}
       {selectedItem && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center font-mono dark:text-[#f7f7ff]">
          <div className="w-125 max-h-[70vh] rounded-xl bg-[#F0E7D8] dark:bg-[#57737A] p-6 flex flex-col gap-3 ">
            
              <IconButton Icon={X}  onClick={() => setSelectedItem(null)} size={12}/>
            
            <div className="max-h-[40vh] overflow-y-auto scrollbar-thin 
                    scrollbar-track-sky-100 
                    scrollbar-thumb-sky-700 
                    hover:scrollbar-thumb-slate-400
                    scrollbar-thumb-rounded-full
                    dark:scrollbar-track-slate-800 
                    dark:scrollbar-thumb-slate-600">
            <p className="wrap-break-word whitespace-pre-wrap border border-black rounded-xl py-2 px-3 dark:bg-black/70 bg-[#f7f7ff]">
              {selectedItem.copiedData}
            </p>
          </div>
          <div className="flex flex-row justify-between items-baseline">
            <p className="mt-4 text-sm">
              {new Date(
                selectedItem.timestamp
              ).toLocaleString()}
            </p>
            <IconButton Icon={Copy}/>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
