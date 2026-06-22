import React from 'react'
import { Pin } from 'lucide-react'
const P = () => {
  return (
    <button
  className="
    h-8 w-8
    flex items-center justify-center
    rounded-full
    dark:bg-[#F6F6F7]
    bg-[#161618]
    border border-white
    dark:text-black text-white
    shadow-lg dark:shadow-black/40
  "
>
  <Pin size={18} />
</button>
  )
}

export default P
