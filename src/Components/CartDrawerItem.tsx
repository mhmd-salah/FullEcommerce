import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Image,
  Spacer,
} from "@chakra-ui/react";
interface Iprops {
  title: string;
  quantity: number;
}

function CartDrawerItem({
  title = "unknown",
  quantity = 1,
}: Iprops) {
  return (
    <div className="border-b">
      <Flex py={2} alignItems={"center"}>
        <Box mr={1}>
          <Image
            src="https://placehold.co/50"
            borderRadius={50}
            sizes="50"
            objectFit={"cover"}
          />
        </Box>
        <Box className="text-sm text-left">
          <Box>{title}</Box>
          <Box>Quantity : {quantity}</Box>
        </Box>
        <Spacer />
        <Center>
          <Button colorScheme="red" size={"xs"}>
            Remove
          </Button>
        </Center>
      </Flex>
    </div>
  );
}

export default CartDrawerItem;
