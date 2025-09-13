"use client";
import Link from "next/link";
import { links } from "@/constants"
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import { signOut, useSession } from "next-auth/react";
export default function Navbar() {
    const session = useSession();
    return (
        <div className="w-full flex items-center justify-between pt-8">
            <Link href={"/"} className="hover:scale-105 transition-all duration-100 font-bold text-4xl">DashFolio</Link>
            <div className="flex items-center gap-x-3">
                <DarkModeToggle />
                {links.map((link) => (
                    <Link key={link.id} href={link.url}
                        className="hover:scale-105 transition-all duration-300 text-sm">{link.name}</Link>
                ))}
                {session.status === "authenticated" && (
                    <button onClick={() => signOut()} className="bg-green-400 text-white text-sm py-2 px-4 rounded-lg hover:cursor-pointer hover:bg-green-600">Logout</button>
                )}
            </div>
        </div>
    )
}