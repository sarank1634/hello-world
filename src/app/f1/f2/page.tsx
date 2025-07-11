import Link from "next/link";

export default function f2() {
    return (
         <>
         <h1>f2 page</h1>
    <div>   
    <Link href={"/f1"}>Go to f1</Link>
    <Link href={"/f4"}>Go to f4</Link>
    </div>
    </>
    )
}