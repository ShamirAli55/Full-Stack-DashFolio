import Image from "next/image";
import Link from "next/link";
async function getData() {
    const res = await fetch("http://localhost:3001/api/posts", {
        cache: "no-cache"
    });

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    return res.json();
}


export const metadata = {
    title: "Shamir Dev Blog",
    description: "It is a blog website for web development and programming",
}

export default async function Blog() {
    const data = await getData();
    return (
        <div className="flex flex-col gap-10 min-h-1/2 py-8 justify-between">
            {data.map((item) => (
                <Link key={item._id} href={`/blog/${item._id}`} className="flex bg-amber-300 w-full h-fit px-6  gap-x-5 py-4">
                    <div className="relative min-h-[200px] w-1/3 ">
                        <Image
                            src={item.img} alt="image" fill className="object-cover aspect-square w-full h-full  rounded-lg" />
                    </div>
                    <div className="px-14 py-8 text-black">
                        <h1 className="text-4xl">{item.title}</h1>
                        <h3 className="text-xl py-3">{item.desc}</h3>
                    </div>
                </Link>
            ))}
        </div>
    );
}