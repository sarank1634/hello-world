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



function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}



type ReviewsListProps = {
  params: { productid: string };
};

export default function ReviewsList({ params }: ReviewsListProps) {
  const random = getRandomInt(2);
  if (random === 1) {
    throw new Error('Error loading reviews');
  }

  const { productid } = params;

  return <h1>Reviews list for product {productid}</h1>;
}
