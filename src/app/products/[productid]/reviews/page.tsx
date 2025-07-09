import {notFound} from'next/navigation'


export default async function ReviewDetails({
    params,
 }:{
        params : Promise<{productid: string, reviewID: string}>;
    }
) {
    const {productid, reviewID} = await params;
    if(parseInt(reviewID) > 1000) {
        notFound();
    }
    return <h1>Review {reviewID}  for  {productid}</h1>
}