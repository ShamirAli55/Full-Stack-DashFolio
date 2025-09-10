import Link from "next/link";
import { links } from "@/constants"
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
export default function Navbar() {
    return (
        <div className="w-full flex items-center justify-between pt-8">
            <Link href={"/"} className="hover:scale-105 transition-all duration-100">Lamamia</Link>
            <div className="flex items-center gap-x-3">
                <DarkModeToggle />
                {links.map((link) => (
                    <Link key={link.id} href={link.url}
                        className="hover:scale-105 transition-all duration-300 text-sm">{link.name}</Link>
                ))}
                <Link href={"/logout"}>
                    <button className="bg-green-400 text-white text-sm py-2 px-4 rounded-lg hover:cursor-pointer hover:bg-green-600">Logout</button>
                </Link>
            </div>
        </div>
    )
}