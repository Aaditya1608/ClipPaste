import React from "react";
import Dark from "./components/darkTheme.jsx"
import Card from "./components/Card.jsx";
import Settings from "./components/Set.jsx";
import P from "./components/P.jsx";
import data from './data.json';

export default function App() {
  return (
    <div className="h-scroll bg-[#f7f7ff] dark:bg-[#070600] border border-zinc-200 dark:border-zinc-700">
    <div
      className="flex items-start bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 px-1 py-1"
    >
      <div className="flex w-full justify-between mb-5">
        <div className="text-2xl font-bold font-mono dark:text-[#F6F6F7] text-[#070600]">ClipStack</div>
        <div className="flex flex-row gap-1">
          <P/>
          <Settings/>
          <Dark/>
        </div>
      </div>
    </div>
    {data.history.map((item) => (
        <Card
          key={item.id}
          item={item}
        />
      ))}
    </div>
  );
}
