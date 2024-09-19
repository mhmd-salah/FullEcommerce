import {motion} from "framer-motion"
import { Grid } from "@chakra-ui/react";
import ProductCard from "../../Components/ProductCard";
import axios from "axios";
import { useQuery } from "react-query";
import SkeletonCards from "../../Components/SkeletonCards";
import { api } from "@/api";


export interface Iattr {
  data:{
    data:{
      attributes:{
        title: string;
        description: string;
        price: number;
      }
    }
  }
}

export interface iproductsAttributes {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail?: {
    data: {
      attributes: {
        url: string;
      }
    }
  };}
export interface IproductsData {
  id: number;
  attributes: iproductsAttributes;
}
export interface iapiResponse{
  data:IproductsData[]
  isLoading?: boolean;
}
function ProductsPage() {
  const getProductsList = async ():Promise<iapiResponse> => {
    const { data } = await axios.get(
      `${api}/api/products?populate=thumbnail`
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
