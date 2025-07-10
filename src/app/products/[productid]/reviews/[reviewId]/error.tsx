"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Error boundary for `/products/[productid]/reviews/[reviewId]`
// Displays a helpful message, logs the error, and lets the user retry.

type ErrorBoundaryProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function BoundaryError({ error, reset }: ErrorBoundaryProps) {
  // Log error for debugging/observability
  useEffect(() => {
    console.error(error);
  }, [error]);

  const pathname = usePathname();
  const segments = (pathname ?? "").split("/");
  const productId = segments[2] || "?";
  const reviewId = segments[4] || "?";

  return (
    <main className="p-8 text-center">
      <h1 className="text-2xl font-semibold mb-4">
        Something went wrong while loading review {reviewId} for product {productId}
      </h1>
      <p className="mb-4 text-red-600">{error.message}</p>
      <button
        onClick={() => reset()}
        className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
      >
        Try again
      </button>
    </main>
  );
}