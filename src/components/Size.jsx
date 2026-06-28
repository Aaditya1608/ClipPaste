import { useClipboard } from '../context/ClipboardContext.jsx'
import { useTheme } from '../context/ThemeContext.jsx';

export default function Size() {
    const { currentItems, pinnedItems,stackSize} = useClipboard();
    const { isDark } = useTheme();
  return (
    <div className='fixed bottom-0 left-0 right-0 w-full dark:text-white text-black border dark:border-white/50 dark:bg-[#202020] text-xs font-mono'>
        <div className='flex flex-row justify-between px-0.5'>
            <div> Copied items: {currentItems}</div>
            <div> Pinned items: {pinnedItems}</div>
            <div> Stack Size: {stackSize}</div>
            <div> {isDark} theme</div>
        </div>
    </div>
  )
}

