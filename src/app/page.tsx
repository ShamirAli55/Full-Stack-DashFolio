import Image from "next/image";
import styles from "./page.module.css";
import Hero from "../../public/hero.png";
import Button from "@/components/button/Button";
export default function Page() {
  return (
    <div className="flex justify-between">
      <div className="h-full w-1/2 ">
        <h1 className={`${styles.title} text-7xl font-bold w-[90%]`}>Better design for your digital products.</h1>
        <p className="text-xl py-8 tracking-wide w-[85%]">Turning your ideas into Reality. We bring together the teams from the global tech industry.</p>
        <Button name={"See our works"} href={"/portfolio"} />
      </div>
      <div className="h-full w-1/2 px-22">
        <Image src={Hero} alt="hero" className="w-96 object-cover" />
      </div>
    </div>
  );
};