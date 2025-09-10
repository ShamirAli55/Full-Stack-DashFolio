import Image from "next/image"
export default function Footer() {
    const imgs = ["1", "2", "3", "4"];
    return (
        <div className="flex items-center justify-between">
            <div>&copy;2023.All rights reserved</div>
            <div className="flex items-center gap-x-3">
                {imgs.map((img, idx) => (
                    <Image key={idx} src={`/${img}.png`} alt="logo" width={15} height={15} />
                ))}
            </div>
        </div>
    )
}