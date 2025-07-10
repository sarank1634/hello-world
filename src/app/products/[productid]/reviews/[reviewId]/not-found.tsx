// "useclient";
// import { usePathname } from "next/navigation";
// export default function NotFound() {
//     const pathname = usePathname();
//     const productId = pathname.split("/")[2];
//     const reviewId = pathname.split("/")[4]

// Not-found page for /products/[productid]/reviews/[reviewId]
// According to Next.js conventions, a not-found route should export a
// default component with NO props. When `notFound()` is triggered
// from within the route segment, this component is rendered. We keep
// it simple and read the pathname on the client if detailed
// information is required.

"use client";

import { usePathname } from "next/navigation";

export default function NotFound() {
  const pathname = usePathname();
  const segments = pathname.split("/");
  const productId = segments[2] || "?";
  const reviewId = segments[4] || "?";

  return (
    <main className="p-8 text-center">
      <h1 className="text-2xl font-semibold">
        Review {reviewId} not found for product {productId}
      </h1>
    </main>
  );
}


