import { useState} from 'react'
import Header from '../components/Header.jsx'
import {X,Copy,Check} from 'lucide-react'
import Card from '../components/Card.jsx';
import ClipboardModel from '../components/ClipboardModal.jsx';
import { useClipboard } from '../context/ClipboardContext.jsx';
import Size from '../components/Size.jsx';
export default function Pinned(){
  const [selectedItem, setSelectedItem] = useState(null);
  const { history ,togglePin} = useClipboard();
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
  
  
  const pinnedItems = history.filter(item => item.pinned); //require history
  return (
    <div className="h-screen bg-[#f7f7ff] dark:bg-[#070600] border border-zinc-200 dark:border-zinc-700">
    <Header/>
    <div className='dark:text-[#f7f7ff] px-3 py-1 text-xl font-mono font-bold my-2'>Pinned Items</div>
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
  )
}
