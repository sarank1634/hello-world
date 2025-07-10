// "useclient";
// import { usePathname } from "next/navigation";
// export default function NotFound() {
//     const pathname = usePathname();
//     const productId = pathname.split("/")[2];
//     const reviewId = pathname.split("/")[4]
//     return (
//         <div>
//             <h1>Review {reviewId} not found for product {productId} </h1>
//         </div>
//     );
// }
import { Metadata } from 'next';

type Props = {
  params: Promise<{ productid: string }>;
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const { productid } = await params;
  return {
    title: `Product ${productid}`,
    description: `Details about product ${productid}`,
  };
};

export default async function ProductDetails({
  params,
}: Props) {
  const { productid } = await params;
  return <h1>Details about Product {productid}</h1>;
}


// app 
// / products/
        // / [productid]
                // / reviews/
                        // / [reviewId]
                                // / not-found
                    //page.tsx   
            //layout.tsx
            //page.tsx
    // page.tsx