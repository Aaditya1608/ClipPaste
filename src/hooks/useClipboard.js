import { useEffect,useRef,useState } from "react";

export default function useClipboard(){
    const previousTextRef = useRef("");
    const [history,setHistory] = useState([]);
    useEffect(()=>{
        const interval = setInterval(async()=>{
            const text = await window.electronAPI.getClipboardText();
            if(text!== previousTextRef.current){
                setHistory(prev =>[
                    {
                        id: Date.now(),
                        copiedData: text,
                        timestamp: new Date().toISOString(),
                        pinned: false,
                        shortcutKey: null,
                    },
                    ...prev
                ])
                previousTextRef.current = text;
            }
        },1000);
        return () => clearInterval(interval);
    },[])
    return {
        history
    };
}