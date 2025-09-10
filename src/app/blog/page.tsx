import Image from "next/image";
import Link from "next/link";
export default function Blog() {
    return (
        <div className="flex flex-col gap-10 min-h-screen py-8 justify-between">
            <Link href={"/blog/1"} className="flex bg-amber-300 w-full h-fit px-6 justify-between gap-x-5">
                <div className="relative w-[650px] h-[200px]">
                    <Image
                    src={"https://images.unsplash.com/photo-1709484545569-7df62b42e1fe?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt="image" fill className="object-cover w-full h-full relative"/>
                </div>
                <div className="px-14 py-8">
                    <h1>qui est esse</h1>
                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur in blanditiis officia libero, voluptatibus magni deleniti doloribus eveniet dicta ut.</h3>
                </div>
            </Link>
                           <Link href={"/blog/1"} className="flex bg-amber-300 w-full h-fit px-6 justify-between gap-x-5">
                <div className="relative w-[650px] h-[200px]">
                    <Image
                    src={"https://images.unsplash.com/photo-1709484545569-7df62b42e1fe?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt="image" fill className="object-cover w-full h-full relative"/>
                </div>
                <div className="px-14 py-8">
                    <h1>qui est esse</h1>
                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur in blanditiis officia libero, voluptatibus magni deleniti doloribus eveniet dicta ut.</h3>
                </div>
            </Link>
                        <Link href={"/blog/1"} className="flex bg-amber-300 w-full h-fit px-6 justify-between gap-x-5">
                <div className="relative w-[650px] h-[200px]">
                    <Image
                    src={"https://images.unsplash.com/photo-1709484545569-7df62b42e1fe?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt="image" fill className="object-cover w-full h-full relative"/>
                </div>
                <div className="px-14 py-8">
                    <h1>qui est esse</h1>
                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur in blanditiis officia libero, voluptatibus magni deleniti doloribus eveniet dicta ut.</h3>
                </div>
            </Link>
                        <Link href={"/blog/1"} className="flex bg-amber-300 w-full h-fit px-6 justify-between gap-x-5">
                <div className="relative w-[650px] h-[200px]">
                    <Image
                    src={"https://images.unsplash.com/photo-1709484545569-7df62b42e1fe?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt="image" fill className="object-cover w-full h-full relative"/>
                </div>
                <div className="px-14 py-8">
                    <h1>qui est esse</h1>
                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur in blanditiis officia libero, voluptatibus magni deleniti doloribus eveniet dicta ut.</h3>
                </div>
            </Link>         
        </div>
    );
}