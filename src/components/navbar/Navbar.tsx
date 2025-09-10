import Link from "next/link";
import { links } from "@/constants"
export default function Navbar() {
    return (
        <div className="w-full flex items-center justify-between pt-8">
            <Link href={"/"} className="hover:scale-105 transition-all duration-100">Lamamia</Link>
            <div className="flex items-center gap-x-3">
                {links.map((link) => (
                    <Link key={link.id} href={link.url}
                        className="hover:scale-105 transition-all duration-300 text-sm">{link.name}</Link>
                ))}
            </div>
        </div>
    )
}