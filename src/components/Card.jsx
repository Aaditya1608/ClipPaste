import React from 'react'
import P from './P.jsx'
import POff from './POff.jsx'

const Card = ({item}) => {
  return (
    <div className="rounded-2xl p-4 bg-[#c2fcf7] dark:bg-[#57737A] mb-2 font-mono">
      <p className="font-semibold dark:text-[#f6f6f7] text-[#070600]">
        {item.copiedData}
      </p>

      <p className="dark:text-[#f9f9ed] text-[#040f0f] text-xs mt-2">
        {new Date(item.timestamp).toLocaleString()}
      </p>

      <div className="flex justify-between mt-3">
        <span className='dark:text-[#d9dbf1] text-xs mt-5'>{item.shortcutKey}</span>
        <span>{item.pinned ? <P/> : <POff/>}</span>
      </div>
    </div>
  )
}

export default Card
