import {  Button, Card, CardBody, Flex, Heading, Image, Spacer, Stack, Text } from "@chakra-ui/react";
import {motion} from "framer-motion"

function ProductCard({ attributes }) {
  console.log(attributes);
  return (
    <motion.div
      // style={{ scale: 0.99 }}
      initial={{ x: -300 }}
      whileInView={{ x: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card bg={"#f6f7f8"} border={"2px solid #eee"}>
        <CardBody>
          <Image
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="Green double couch with wooden legs"
            borderRadius="50%"
            w={200}
            h={200}
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
              <Button variant="solid" colorScheme="blue">
                Add to cart
              </Button>
            </Flex>
          </Stack>
        </CardBody>
        {/* <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="solid" colorScheme="blue">
            Buy now
          </Button>
          <Button variant="ghost" colorScheme="blue">
            Add to cart
          </Button>
        </ButtonGroup>
      </CardFooter> */}
      </Card>
    </motion.div>
  );
}

export default ProductCard