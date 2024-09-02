import {motion} from "framer-motion"
import { Grid } from "@chakra-ui/react";
import ProductCard from "../../Components/ProductCard";
import axios from "axios";
import { useQuery } from "react-query";
import SkeletonCards from "../../Components/SkeletonCards";



export interface iproductsAttributes{
  id:number;
  title:string
  description:string
  price:number
}
interface IproductsData {
    id: number;
    attributes: iproductsAttributes;
}
export interface iapiResponse{
  data:IproductsData[]
}
function ProductsPage() {
  const getProductsList = async ():Promise<iapiResponse> => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_SERVER_URL}/api/products?populate=thumbnail`
    );
    return data;
  };
  const { data, isLoading } = useQuery<iapiResponse>({
    queryKey: [`products`],
    queryFn: getProductsList,
  });
  if (isLoading)
    return (
      <SkeletonCards/>
    );
    
  return (
    <motion.div style={{ height: 2000 }}>
      <Grid
        m={6}
        templateColumns="repeat(auto-fill , minmax(250px,1fr))"
        gap={"4"}
      >
        {data?.data.map((product) => (

          <ProductCard key={product.id} {...product} />
          
        ))}
      </Grid>
    </motion.div>
  );
}

export default ProductsPage;
