import IconButton from './IconButton.jsx'
import { Copy, Pin, PinOff } from 'lucide-react'
const Card = ({item,onClick}) => {
  return (
    <div onClick={onClick} className="cursor-pointer relative rounded-xl py-2 px-4 bg-[#F0E7D8] dark:bg-[#57737A] mb-2 font-mono h-27">
      <div className="absolute top-4 right-4 flex gap-2">
      <IconButton Icon={Copy} onClick={(e) => {e.stopPropagation();}}/>
      {item.pinned ? <IconButton Icon={PinOff} onClick={(e) => {e.stopPropagation();}}/> : <IconButton Icon={Pin} onClick={(e) => {e.stopPropagation();}}/>}
    </div>
      <p className="font-semibold dark:text-[#f6f6f7] text-[#070600]">
        {item.copiedData.length >50 ?
          `${item.copiedData.slice(0,50)}...`: item.copiedData}
      </p>

      <p className="dark:text-[#f9f9ed] text-[#040f0f] text-xs mt-2">
        {new Date(item.timestamp).toLocaleString()}
      </p>
      <span className='dark:text-[#d9dbf1] text-xs mt-5'>{item.shortcutKey}</span>
      
    </div>
    
  )
}

export default Card
