import Card from "../components/Card.jsx";
import data from '../data.json';
import Header from "../components/Header.jsx";
import { useState } from "react";

export default function Home() {
  const [selectedItem, setSelectedItem] = useState(null);
  return (
    <div className="h-scroll bg-[#f7f7ff] dark:bg-[#070600] border border-zinc-200 dark:border-zinc-700">
    <Header/>
    {data.history.map((item) => (
        <Card
          key={item.id}
          item={item}
          onClick={()=>setSelectedItem(item)}
        />
      ))}
       {selectedItem && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="w-125 rounded-xl bg-[#F0E7D8] dark:bg-[#57737A] p-6">
            <button
              className="mb-4"
              onClick={() => setSelectedItem(null)}
            >
              ✕
            </button>

            <p className="wrap-break-word">
              {selectedItem.copiedData}
            </p>

            <p className="mt-4 text-sm">
              {new Date(
                selectedItem.timestamp
              ).toLocaleString()}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
