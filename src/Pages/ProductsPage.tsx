import { Grid } from "@chakra-ui/react";
import { motion } from "framer-motion";
import ProductCard from "../Components/ProductCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import ProductCardSkelaton from "../Components/ProductCardSkelaton";

function ProductsPage() {

  const getProductsList = async()=>{
    const { data } = await axios.get(
      `${import.meta.env.VITE_SERVER_URL}/api/products?populate=thumbnail`
    );
    return data
  }
  const {data,isLoading}=useQuery({
    queryKey:[`products`],
    queryFn:getProductsList,
  })

  if(isLoading) return (
    <motion.div initial={{opacity:0.7}} whileInView={{opacity:1}}>
      <Grid
        m={3}
        templateColumns="repeat(auto-fill , minmax(250px,1fr))"
        gap={"2"}
      >
        {Array.from({length:5},(_,idx)=>idx).map(() =><ProductCardSkelaton/>)}
      </Grid>
    </motion.div>
  );
  
  return (
    <motion.div style={{ height: 2000 }}>
      <Grid
        m={6}
        templateColumns="repeat(auto-fill , minmax(250px,1fr))"
        gap={"4"}
      >
        {
          data?.data.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))
        }
      </Grid>
    </motion.div>
  );
}

export default ProductsPage;
