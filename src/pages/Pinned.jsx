import { useState} from 'react'
import Header from '../components/Header.jsx'
import IconButton from '../components/IconButton.jsx';
import {X,Copy,Check} from 'lucide-react'
import Card from '../components/Card.jsx';
import { useClipboard } from '../context/ClipboardContext.jsx';
const Pinned = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const { history ,togglePin} = useClipboard();
  const [copied,setCopied] = useState(false);
  console.log("Pinned history:", history);
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
  
  
  const pinnedItems = history.filter(item => item.pinned);
  return (
    <div className="h-screen bg-[#f7f7ff] dark:bg-[#070600] border border-zinc-200 dark:border-zinc-700">
    <Header/>
    <div className='dark:text-[#f7f7ff] px-3 py-1 text-xl font-mono font-bold mb-2'>Pinned Items</div>
    {pinnedItems.map((item) => (
        <Card
          key={item.id}
          item={item}
          onClick={()=>setSelectedItem(item)}
          onTogglePin={()=>togglePin(item.id)}
        />
      ))}
      {pinnedItems.length===0 && (
        <div className="text-center mt-10 text-gray-500 dark:text-gray-400 font-mono">
          No pinned items
        </div>
      )

      }
      
      {selectedItem && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center font-mono">
          <div className="w-125 max-h-[70vh] rounded-xl bg-[#F0E7D8] dark:bg-[#57737A] p-6 flex flex-col gap-3">
            
              <IconButton Icon={X}  onClick={() => setSelectedItem(null)} size={12}/>
            
            <div className="max-h-[40vh] overflow-y-auto ">
            <p className="wrap-break-word whitespace-pre-wrap">
              {selectedItem.copiedData}
            </p>
          </div>
          <div className="flex flex-row justify-between items-baseline">
            <p className="mt-4 text-sm">
              {new Date(
                selectedItem.timestamp
              ).toLocaleString()}
            </p>
            <IconButton Icon={copied?Check:Copy} onClick={handleCopy}/>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Pinned
