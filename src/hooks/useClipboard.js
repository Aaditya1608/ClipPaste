import { useEffect,useRef } from "react";

export default function useClipboard(){
    const previousTextRef = useRef("");

    useEffect(()=>{
        const interval = setInterval(async()=>{
            const text = await window.electronAPI.getClipboardText();
            if(text!== previousTextRef.current){
                console.log("Updated copied text: "+text)
                previousTextRef.current = text;
            }
        },1000)
    },[])
}