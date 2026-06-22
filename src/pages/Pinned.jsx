import React from 'react'
import Header from '../components/Header.jsx'
import data from '../data.json';
import Card from '../components/Card.jsx';
const Pinned = () => {
  return (
    <div className="h-screen bg-[#f7f7ff] dark:bg-[#070600] border border-zinc-200 dark:border-zinc-700">
    <Header/>
    <div className='px-3 py-1 text-2xl font-mono font-bold'>Pinned Items</div>
    {data.history.filter((item)=>item.pinned).map((item) => (
        <Card
          key={item.id}
          item={item}
        />
      ))}
    </div>
  )
}

export default Pinned
