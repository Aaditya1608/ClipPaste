import React from 'react'
import Header from '../components/Header.jsx'
import { useTheme } from '../context/ThemeContext.jsx'
import { useClipboard } from '../context/ClipboardContext.jsx'
const Settings = () => {
  const {dark, toggleTheme} = useTheme();
  const {stackSize, setStackSize} = useClipboard();
  console.log(stackSize);
  return (
    <div className="h-scroll bg-[#f7f7ff] dark:bg-[#070600] font-mono dark:text-[#f7f7ff]">
    <Header/>
    <div>
        <div className='px-2 py-2 text-xl font-bold'>Appearance</div>
        <form className='flex flex-col px-2 py-3 gap-2'>
            <div className='flex flex-row gap-2'>
            <label>Light</label>
            <input type='radio' name='theme' id='light' onClick={()=> dark && toggleTheme()}></input>
            </div>
            <div className='flex flex-row gap-2'>
            <label>Dark</label>
            <input type='radio' name='theme' id='dark' onClick={()=> !dark && toggleTheme()}></input>
            </div>
            <div className='flex flex-row gap-2'>
            <label>System</label>
            <input type='radio' name='theme' id='system' onClick={()=> dark && toggleTheme()}></input>
            </div>
        </form>
        <div className='px-2 py-2 text-xl font-bold border-t border-t-slate-300'>Shortcuts</div>
        <div className='flex flex-col gap-2 p-4 bg-amber-50 dark:bg-slate-800 w-100 mx-auto rounded-3xl mb-3'>
              <div className='flex flex-row gap-5 justify-between items-baseline'>
                  <div className='text-lg font-bold'> Open ClipStack </div>
                  <div className='text-sm'> Ctrl + Shift + V</div>
              </div>
              <div className='flex flex-row gap-5 justify-between items-baseline'>
                  <div className='text-lg font-bold'> Paste Slot 1 </div>
                  <div className='text-sm'> Ctrl + Shift + 1</div>
              </div>
              <div className='flex flex-row gap-5 justify-between items-baseline'>
                  <div className='text-lg font-bold'> Paste Slot 2 </div>
                  <div className='text-sm'> Ctrl + Shift + 2</div>
              </div>
              <div className='flex flex-row gap-5 justify-between items-baseline'>
                  <div className='text-lg font-bold'> Paste Slot 3 </div>
                  <div className='text-sm'> Ctrl + Shift + 3</div>
              </div>
              <div className='flex flex-row gap-5 justify-between items-baseline'>
                  <div className='text-lg font-bold'> Paste Slot 4 </div>
                  <div className='text-sm'> Ctrl + Shift + 4</div>
              </div>
              <div className='flex flex-row gap-5 justify-between items-baseline'>
                  <div className='text-lg font-bold'> Paste Slot 5 </div>
                  <div className='text-sm'> Ctrl + Shift + 5</div>
              </div>
        </div>
        <div className='px-2 py-2 text-xl font-bold border-t border-t-slate-300'> Clipboard </div>
        <div className='flex flex-col gap-2 px-2 py-2 w-70'>
          <div className='flex flex-row justify-between'>
              <label>History Size</label>
              <input type="number" min='1' max='100' value={stackSize} onChange={(e)=> setStackSize(Number(e.target.value))} className='border rounded-lg border-slate-400 bg-amber-50 dark:bg-slate-900 w-20'></input>
          </div>
          <div className='flex flex-row justify-between'>
              <label>Ignore Duplicates</label>
              <input type='checkbox'></input> 
          </div>
        </div>
        <div className='border-t border-t-slate-300 mb-5'></div>
    </div>

    </div>
  )
}

export default Settings
