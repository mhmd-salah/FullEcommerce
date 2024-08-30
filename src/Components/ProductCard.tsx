import {  Button, Card, CardBody, Flex, Heading, Image, Spacer, Stack, Text } from "@chakra-ui/react";
import {motion} from "framer-motion"
import { iproductsAttributes } from "../Pages/products/ProductsPage";
import { Link } from "react-router-dom";

interface iproductsAttributesProps{
  id:number;
  attributes: iproductsAttributes;
}
function ProductCard({ attributes ,id}:iproductsAttributesProps) {
  return (
    <motion.div
      // style={{ scale: 0.94 }}
      initial={{ opacity: 0.4, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      // transition={{ duration: 0.3 }}
    >
      <Card bg={"rgb(231, 240, 240)"} border={"2px solid #eee"}>
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
              <Button as={Link} to={`${id}`} variant="solid" colorScheme="teal">
                More Details
              </Button>
            </Flex>
          </Stack>
        </CardBody>
      </Card>
    </motion.div>
  );
}

export default ProductCard