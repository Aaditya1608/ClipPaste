import React from "react";
import Dark from "./components/darkTheme.jsx"

export default function App() {
  return (
    <div
      className="h-screen flex justify-end items-start bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 px-1 py-1"
    >
      <Dark/>
    </div>
  );
}
