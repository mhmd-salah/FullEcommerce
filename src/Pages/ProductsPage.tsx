import { Grid, GridItem } from "@chakra-ui/react";
import ProductCard from "../Components/ProductCard";
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
    <div  >
      <Grid
        m={3}
        templateColumns="repeat(4,minmax(220px,1fr))"
        gap={"4"}
        className="w-full"
      >
        {Array.from({ length: 4 }, (_, idx) => idx).map(() => (
          <GridItem>
            <ProductCardSkelaton />
          </GridItem>
        ))}
      </Grid>
    </div>
  );
  
  return (
    <div>
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
    </div>
  );
}

export default ProductsPage;
