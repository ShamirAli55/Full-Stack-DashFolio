import Image from "next/image";
import Link from "next/link";
async function getData() 
{
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    return res.json();    
}
export default async function Blog() 
{
    const data = await getData();
    return (
        <div className="flex flex-col gap-10 min-h-screen py-8 justify-between">
        {data.map((item) => (
            <Link key={item.id} href={"/blog/1"} className="flex bg-amber-300 w-full h-fit px-6 justify-between gap-x-5">
                <div className="relative min-w-[350px] h-[200px]">
                    <Image
                        src={"https://images.unsplash.com/photo-1709484545569-7df62b42e1fe?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt="image" fill className="object-cover w-full h-full relative" />
                </div>
                <div className="px-14 py-8 text-black">
                    <h1>{item.title}</h1>
                    <h3>{item.body}</h3>
                </div>
            </Link>
        ))}
        </div>
    );
}