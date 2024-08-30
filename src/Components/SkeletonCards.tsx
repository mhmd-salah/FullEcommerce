import { motion } from "framer-motion";

import { Grid } from "@chakra-ui/react";
import ProductCardSkelaton from "./ProductCardSkelaton";
function SkeletonCards() {
  return (
    <motion.div style={{ height: 2000 }}>
      <Grid
        m={6}
        gap={"4"}
      >
        {Array.from({ length: 1 }, (_, idx) => idx).map((idx) => (
          <ProductCardSkelaton key={idx} />
        ))}
      </Grid>
    </motion.div>
  );
}

export default SkeletonCards;
