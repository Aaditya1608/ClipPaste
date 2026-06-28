import { Pin, Settings,House } from "lucide-react";
import Dark from "./darkTheme.jsx";
import IconButton from "./IconButton.jsx";
import { useNavigate } from "react-router-dom";
const Header = () => {
    const navigate = useNavigate()
  return (
    <div
      className="flex items-start bg-[#f7f7ff] border-b border-b-slate-200 dark:bg-[#070600] px-1 py-1 mb-2"
    >
      <div className="flex w-full justify-between mb-2">
        <div className="text-2xl font-bold font-mono dark:text-[#F6F6F7] text-[#070600] px-1">ClipStack</div>
        <div className="flex flex-row gap-1">
          <IconButton Icon={Pin} onClick={()=>navigate('/pinned')}/>
          <IconButton Icon={Settings} onClick={()=>navigate('/settings')}/>
          <IconButton Icon={House} onClick={()=>navigate('/')}/> 
          <Dark/>
        </div>
      </div>
    </div>
  )
}

export default Header
