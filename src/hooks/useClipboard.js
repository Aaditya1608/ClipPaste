import { useEffect,useRef,useState } from "react";

export default function useClipboard(){
    const previousTextRef = useRef(""); //used to point to the copied text before copying
    const [history,setHistory] = useState([]); // used to store the copied item details
    useEffect(()=>{
        const interval = setInterval(async()=>{ //every one second we check( any change in the useRef) if new item is being copied or not.. 
            const text = await window.electronAPI.getClipboardText(); // we get the copied text from the user
            if(text!== previousTextRef.current){ // we only consider the text, only if the new text doesnt equal to the previous text
                setHistory(prev =>{ // this is used to set the array of copied items in runtime (every 1s)
                    const filtered = // we filter out the other copied text, from the recent copied text, if it exists..
                        prev.filter(
                            item =>
                                item.copiedData!==text  // we check if other item equals to the newest copied item
                        );
                    const newItem = {  // we store the copied item details here
                        id: Date.now(),
                        copiedData: text,
                        timestamp: new Date().toISOString(),
                        pinned: false,
                        shortcutKey: null,
                    };
                    return [ // we return the newly copied data first, and then the other copied item based on FIFO queue
                        newItem,
                        ...filtered
                    ].slice(0,5)
                })
                previousTextRef.current = text;
            }
        },1000);
        return () => clearInterval(interval); // this is used to prevent checking every 1s
    },[])
    return {
        history
    };
}