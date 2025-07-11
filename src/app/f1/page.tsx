import Link from "next/link";
export default function f1() {
    return (
    <>
    <h1>f1 page</h1>
    <div>   
    <Link href={"/f1/f2"}>Go to f2</Link>
    <Link href={"f3"}>Go to f3</Link>
    </div>
    </>
    )
}