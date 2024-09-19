import {
  Button,
  Card,
  CardBody,
  Flex,
  Heading,
  Image,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { iproductsAttributes } from "../Pages/products/ProductsPage";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

interface iproductsAttributesProps {
  id: number;
  attributes: iproductsAttributes;
}
function ProductCard({ attributes, id }: iproductsAttributesProps) {
  const renderCount = useRef(0.2);
  renderCount.current + 0.2;
  console.log(renderCount.current);
  return (
    <motion.div
      style={{ overflow: "hidden" }}
      initial={{ translateX: -100, opacity: 0.0, scale: 0.66 }}
      whileInView={{ translateX: 0, opacity: 1, scale: 1 }}
      transition={{ duration: 0.1, delay: (id / 2) * 0.2 }}
    >
      <Card
        bg={"rgb(231, 240, 240)"}
        textColor={"black"}
        border={"2px solid #eee"}
      >
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
              <Text color="teal.600" fontSize="2xl">
                $450
              </Text>
              <Spacer />
              <Button
                as={Link}
                to={`${id}`}
                variant="solid"
                bg="teal.500"
                _hover={{
                  bg: "teal.600",
                }}
              >
                More Details
              </Button>
            </Flex>
          </Stack>
        </CardBody>
      </Card>
    </motion.div>
  );
}

export default ProductCard;
