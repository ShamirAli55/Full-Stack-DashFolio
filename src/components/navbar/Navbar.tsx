import Link from "next/link";
import { links } from "@/constants"
export default function Navbar() {
    return (
        <div>
            <Link href={"/"}>Lamamia</Link>
            <div>
                {links.map((link) => (
                    <Link key={link.id} href={link.url}>{link.name}</Link>
                ))}
            </div>
        </div>
    )
}