import IconButton from "./IconButton.jsx";
import { Copy, Pin, PinOff, Check } from "lucide-react";
import { useState } from "react";
const Card = ({ item, onClick, onTogglePin }) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = async (e) => {
    e.stopPropagation();

    await window.electronAPI.setClipboardText(item.copiedData);
    setCopied(true);
    setTimeout(() => { 
      setCopied(false);
    }, 2000); 
  };
  return (
    <div
      onClick={onClick}
      className="cursor-pointer relative rounded-xl py-2 px-4 bg-[#D3EFBD] dark:bg-[#0a0f16]/20 mb-3 font-mono h-18 border dark:border-white/25"
    >
      <div className="absolute top-4 right-4 flex gap-2">
        <IconButton Icon={copied ? Check : Copy} onClick={handleCopy} />
        <IconButton
          Icon={item.pinned ? PinOff : Pin}
          onClick={(e) => {
            e.stopPropagation();
            onTogglePin();
          }}
        />
      </div>
      <p className="font-semibold dark:text-[#f6f6f7] text-[#070600]">
        {item.copiedData.length==0
          ? 'No item copied' :
        item.copiedData.length > 42
          ? `${item.copiedData.slice(0, 42)}...`
          : item.copiedData}
         
      </p>

      <p className="dark:text-[#f9f9ed] text-[#040f0f] text-xs mt-2">
        {new Date(item.timestamp).toLocaleString()}
      </p>
      <span className="dark:text-[#d9dbf1] text-xs mt-5">
        {item.shortcutKey}
      </span>
    </div>
  );
};

export default Card;
