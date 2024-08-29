import { Box, SkeletonCircle, SkeletonText } from "@chakra-ui/react";

function ProductCardSkelaton() {
  return (
    <Box w={250} h={300} padding="6" boxShadow="lg" bg="white">
      <SkeletonCircle size="40" mx={"auto"} />
      <SkeletonText mt="4" noOfLines={4} spacing="3" skeletonHeight="2" />

    </Box>
  );
}

export default ProductCardSkelaton