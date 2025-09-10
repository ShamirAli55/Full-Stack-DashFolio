import Image from "next/image";
import Link from "next/link";
export default function Blog() {
    return (
        <div>
            <Link href={"/blog/1"}>
                <div>
                    <Image src={"dpkpokeop"} alt="djijd" fill/>
                </div>
                <div></div>

            </Link>
        </div>
    );
}