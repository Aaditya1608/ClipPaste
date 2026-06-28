import { createContext, useContext, useState, useEffect, useRef } from "react";

const ClipboardContext = createContext();
const HISTORY_KEY = 'clipboardHistory';
const STACK_SIZE_KEY = 'stackSize';

export function ClipboardProvider({ children }) {
  const previousTextRef = useRef(""); //used to point to the copied text before copying

  const [history, setHistory] = useState(() => {
  const savedHistory = localStorage.getItem(HISTORY_KEY);

  return savedHistory
    ? JSON.parse(savedHistory)
    : [];
});

const [stackSize, setStackSize] = useState(() => {
  const savedSize = localStorage.getItem(STACK_SIZE_KEY);

  return savedSize
    ? JSON.parse(savedSize)
    : 5;
});

 

  const clearHistory = () => {
    setHistory(prev=>
      prev.filter(item => item.pinned)
    );
  }
  const currentItems = history.length;
  const pinnedItems = history.filter(
      (item) => item.pinned
    ).length;
  const togglePin = (id) => {
    setHistory((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            pinned: !item.pinned,
          };
        }
        return item;
      }),
    );
  };

  const checkClipboard = async () => {
    const text = await window.electronAPI.getClipboardText(); // we get the copied text from the user
    if (text !== previousTextRef.current) {
      // we only consider the text, only if the new text doesnt equal to the previous text
      setHistory((prev) => {
        // this is used to set the array of copied items in runtime (every 1s)
        const existingItem = prev.find((item) => item.copiedData === text);
        const filtered = // we filter out the other copied text, from the recent copied text, if it exists..
          prev.filter(
            (item) => item.copiedData !== text, // we check if other item equals to the newest copied item
          );
        const newItem = {
          // we store the copied item details here
          id: Date.now(),
          copiedData: text,
          timestamp: new Date().toISOString(),
          pinned: existingItem ? existingItem.pinned : false,
          shortcutKey: existingItem ? existingItem.shortcutKey : null,
        }; 
        console.log("Current stack size:", stackSize);
        return [
          // we return the newly copied data first, and then the other copied item based on FIFO queue
          newItem,
          ...filtered,
        ].slice(0, stackSize);
      });
      previousTextRef.current = text;
    }
  };
  useEffect(() => {
    const interval = setInterval(checkClipboard, 1000);
    return () => clearInterval(interval); // this is used to prevent checking every 1s
  }, [stackSize]);
  useEffect(() => {
    console.log("Trimming history to", stackSize);
    setHistory((prev) => prev.slice(0, stackSize));
  }, [stackSize]); 
  useEffect(()=>{
    console.log("Saving history:", history.length);
    localStorage.setItem(
      HISTORY_KEY,
      JSON.stringify(history)
    )
  },[history]);
  useEffect(()=>{
    localStorage.setItem(
      STACK_SIZE_KEY,
      JSON.stringify(stackSize)
    )
  },[stackSize])
  const value = {
    history,
    togglePin,
    stackSize,
    setStackSize,
    clearHistory,
    currentItems,
    pinnedItems
  };
  return (
    <ClipboardContext.Provider value={value}>
      {children}
    </ClipboardContext.Provider>
  );
}
export function useClipboard() {
  return useContext(ClipboardContext);
}
