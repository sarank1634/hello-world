import Link from "next/link"

export default function ProductList() {
    const productid = 100;
    return (
    <>
    <Link href="/">Home</Link>
    <h1>Product List</h1>
    <h1>
        <Link href="/products/1">product 1</Link>
    </h1>
    <h1>
        <Link href="/products/2">product 2</Link>
    </h1>
    <h1>
        <Link href="/products/3" replace>
        product 3
        </Link>
    </h1>
    <h1>
        <Link href={`/products/${productid}`}>product {productid}</Link>
    </h1>
    
    </>
    );
}