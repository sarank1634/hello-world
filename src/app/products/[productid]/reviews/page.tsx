// import {notFound, redirect} from'next/navigation'


// export default function ReviewDetails({
//     params,
//  }:{
//         params : { productid: string, reviewID: string};
//     }
// ) {
//     const { productid, reviewID} = params;
    
//     if(parseInt(reviewID) > 1000) {
//         redirect("/products")
//         // notFound();
//     }
//     return <h1>Review {reviewID}  for  {productid}</h1>
// }


import { redirect } from 'next/navigation';

export default async function ReviewDetails({
  params,
}: {
  params: Promise<{ productid: string; reviewID: string }>;
}) {
  // Await the params to resolve the Promise
  const { productid, reviewID } = await params;

  // Check if reviewID exceeds 1000 and redirect if necessary
  if (parseInt(reviewID) > 1000) {
    redirect('/products');
  }

  return <h1>Review {reviewID} for product {productid}</h1>;
}
