import { redirect } from 'next/navigation';

// This route handles `/products/[productid]/reviews/[reviewId]`
// It shows the details for a single review. For demo purposes we just
// render the IDs. If the `reviewId` is greater than 1000 we redirect the
// user back to the products page.
type ReviewDetailsProps = {
  params: Promise<{ productid: string; reviewId: string }>;
};

export default async function ReviewDetails({ params }: ReviewDetailsProps) {
  const { productid, reviewId } = await params;

  // Example guard – you can replace this with real validation / fetching logic
  if (parseInt(reviewId, 10) > 1000) {
    redirect('/products');
  }

  return (
    <main className="p-8 text-center">
      <h1 className="text-2xl font-semibold">
        Review {reviewId} for product {productid}
      </h1>
    </main>
  );
}
