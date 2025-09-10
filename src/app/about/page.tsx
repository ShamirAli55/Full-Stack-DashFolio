import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/components/button/Button";
export default function Page() {
    return (
        <div>
            <div className="h-[35vh] w-full relative">
                <Image src={"https://images.unsplash.com/photo-1747639814786-4854c087318c?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt="about" fill className="w-full h-full object-cover" />
                <div className="absolute text-white bottom-0 px-8 py-6">
                    <h3 className="capitalize text-lg font-bold">Digital storytellers</h3>
                    <p className="font-semibold">Handcrafting award wining digital experiences</p>
                </div>
            </div>

            <div className="flex items-center justify-between gap-x-5">
                <div className="h-1/2 w-full md:h-full md:w-1/2">
                    <h2 className={styles.heading}>Who Are you?</h2>
                    <p className={styles.para}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt esse cumque aliquid, rem consequuntur corrupti qui maxime ea pariatur hic!</p>
                    <p className={styles.para}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium doloribus ut repellat fugiat alias! Omnis voluptatibus, nemo velit eligendi repudiandae suscipit explicabo, nihil commodi nostrum illo deleniti?</p>
                    <p className={styles.para}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga ipsum quaerat sit repellat corrupti voluptates autem, distinctio ab cum dolorem suscipit harum, consectetur fugit facilis repudiandae omnis? Excepturi vitae repellat necessitatibus optio, dolorum distinctio hic alias tempore, sint officiis, dolor reprehenderit!</p>
                </div>
                <div className="h-1/2 w-full md:h-full md:w-1/2">
                    <h2 className={styles.heading}>What We Do?</h2>
                    <p className={styles.para}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum laborum perspiciatis officiis est assumenda nostrum doloribus eaque illum eligendi, culpa officia qui! Adipisci laborum officiis veritatis animi exercitationem officia reiciendis necessitatibus, provident numquam totam aliquam. Accusantium sint vero blanditiis aut.</p>
                    <ul className={styles.list}>
                        <li>Creative Illustrations</li>
                        <li>Dynamic Websites</li>
                        <li>Fast and Handy Mobile Apps</li>
                    </ul>
                    <Button name={"Contact us"} href={"contact"} />
                </div>
            </div>
        </div>
    );
}