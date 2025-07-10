import {Metadata} from 'next';


type Props = {
    params : Promise<{productid: string}>;
}

export const genarateMetadata = async ({ 
    params,
}: Props): Promise<Metadata> => {
 const {productid} = await params; 
 return {
    title: `product ${productid}`,
    description: `product ${productid}`,
 }
}

export default async function ProductDetails({
    params
}: Props) {
    const {productid} = await params;
    return <h1>Details about Product {productid}</h1>;
}