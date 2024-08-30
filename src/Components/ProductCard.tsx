import {  Button, Card, CardBody, Flex, Heading, Image, Spacer, Stack, Text } from "@chakra-ui/react";
import {motion} from "framer-motion"
import { iproductsAttributes } from "../Pages/products/ProductsPage";

interface iproductsAttributesProps{
  attributes: iproductsAttributes;
}
function ProductCard({ attributes }:iproductsAttributesProps) {
  return (
    <motion.div
      // style={{ scale: 0.94 }}
      initial={{ opacity: 0.7 }}
      whileInView={{ opacity: 1, scale: 1 }}
      // transition={{ duration: 0.3 }}
    >
      <Card bg={"#f6f7f8"} border={"2px solid #eee"}>
        <CardBody>
          <Image
            src={`${import.meta.env.VITE_SERVER_URL}${
              attributes.thumbnail?.data?.attributes?.url
            }`}
            alt="Green double couch with wooden legs"
            borderRadius="50%"
            boxSize={140}
            mx={"auto"}
          />
          <Stack mt="6" spacing="3">
            <Heading size="md" textAlign={"center"}>
              {attributes.title}
            </Heading>
            <Text size={"sm"} textAlign={"center"}>
              This sofa is perfect for modern tropical spaces, baroque inspired
              spaces, earthy toned spaces
            </Text>
            <Flex>
              <Text color="blue.600" fontSize="2xl">
                $450
              </Text>
              <Spacer />
              <Button variant="solid" colorScheme="teal">
                Add to cart
              </Button>
            </Flex>
          </Stack>
        </CardBody>
      </Card>
    </motion.div>
  );
}

export default ProductCard