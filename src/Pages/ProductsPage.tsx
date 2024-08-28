import { Grid } from "@chakra-ui/react";
import { motion } from "framer-motion";
import ProductCard from "../Components/ProductCard";
import { useEffect, useState } from "react";
import axios from "axios";

function ProductsPage() {
  const [productsList, setProductsList] = useState([]);
  useEffect(() => {
    (() => {
      axios
        .get("http://localhost:1337/api/products")
        .then((res) => setProductsList(res.data.data))
        .catch((err) => console.log(err));
    })();
  }, []);

  return (
    <motion.div style={{ height: 2000 }}>
      <Grid
        m={6}
        templateColumns="repeat(auto-fill , minmax(250px,1fr))"
        gap={"4"}
      >
        {
          productsList.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))
        }
      </Grid>
    </motion.div>
  );
}

export default ProductsPage;
