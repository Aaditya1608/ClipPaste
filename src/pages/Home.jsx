import Card from "../components/Card.jsx";
import Header from "../components/Header.jsx";
import { useState } from "react";
import { useClipboard } from "../context/ClipboardContext.jsx";
import ClipboardModel from "../components/ClipboardModal.jsx";
import Size from "../components/Size.jsx";
export default function Home() {
  const [selectedItem, setSelectedItem] = useState(null);
  const {history,togglePin} = useClipboard();
 const [copied,setCopied] = useState(false);
  const handleCopy = async(e) =>{
    e.stopPropagation();

    await window.electronAPI.setClipboardText(
      selectedItem.copiedData
    )
    setCopied(true);

    setTimeout(()=>{
      setCopied(false);
    },2000);
  }
  return (
    <div className="h-screen bg-[#f7f7ff] dark:bg-[#070600] border border-zinc-200 dark:border-zinc-700 overflow-y-auto scrollbar-thin scrollbar-thumb-[#57737a] scrollbar-track-white">
    <Header/>
    {history.map((item) => (
        <Card
          key={item.id}
          item={item}
          onClick={()=>setSelectedItem(item)}
          onTogglePin={()=> togglePin(item.id)}
        />
      ))}
      {history.length===0 && (
        <div className="text-center mt-10 text-gray-500 dark:text-gray-400 font-mono">No copied items</div>

      )}
       {selectedItem && (
  <ClipboardModel
  setSelectedItem={setSelectedItem}
    selectedItem={selectedItem}
    onClose={() => setSelectedItem(null)}
    copied={copied}
    handleCopy={handleCopy}
  />
)}
<Size/>
    </div>
  );
}
