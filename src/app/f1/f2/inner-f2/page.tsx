import Link from "next/link";

export default function innerF2() {
    return (
        <>
            <h1>inner f2 page</h1>
            <div>
                <Link href={"/f5"}>f5</Link>
            </div>
        </>
    )
}