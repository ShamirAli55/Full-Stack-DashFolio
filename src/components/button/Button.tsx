import Link from "next/link";
interface Props {
    name: string;
    href: string;
}
export default function button({ name, href }: Props) {
    return (
        <Link href={href}>
             <button className="bg-green-400 text-white py-4 px-6 rounded-lg hover:cursor-pointer hover:bg-green-600">{name}</button>
        </Link>
    )
}