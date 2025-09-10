"use client";
import { useContext } from "react"
import { ThemeContext } from "@/context/ThemeContext";
export default function DarkMode() {
    
    const  {themetoggle,mode} = useContext(ThemeContext);
    return (
        <div className="flex items-center border rounded-full justify-between gap-x-1 text-xs  relative overflow-hidden cursor-pointer" onClick={themetoggle}>
            <div className="p-0.5 pointer-events-none">🔆</div>
            <div className="p-0.5 pointer-events-none">🌙</div>
            <div className={`absolute w-1/2 h-full bg-green-400 rounded-[100px] ${mode === "light" ? "left-0" : "right-0"}`}></div>
        </div>
    )
}