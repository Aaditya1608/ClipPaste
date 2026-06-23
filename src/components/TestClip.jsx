import useClipboard from "../hooks/useClipboard.js";

export default function TestClip(){
    useClipboard();
    return(
        <div className="flex flex-col gap-3">
          Clipboard listener active...
        </div>
    );
}