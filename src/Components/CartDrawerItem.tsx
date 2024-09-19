import { removeFromCart } from "@/App/feathers/cartSlice";
import { useAppDispatch } from "@/App/store";
import {
  Box,
  Button,
  Center,
  Flex,
  Image,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
interface Iprops {
  id:number,
  attributes:Iattr
  quantity: number;
}

interface Iattr {
  title: string;
  thumbnail:{
    data:{
      attributes:{
        url:string
      }
    }
  }
}

function CartDrawerItem({id,attributes,quantity}:Iprops) {
  const dispatch = useDispatch<useAppDispatch>()
  if(attributes)console.log(attributes);
  return (
    <div className="border-b">
      <Flex py={2} alignItems={"center"}>
        <Box mr={1}>
          <Image

            src={`${import.meta.env.VITE_SERVER_URL}${
              attributes && attributes.thumbnail.data.attributes.url
            }`}
            borderRadius={50}
            w={45}
            objectFit={"cover"}
          />
        </Box>
        <Box className="text-sm text-left">
          <Text>{attributes && attributes.title}</Text>
          <Text>Quantity : {quantity}</Text>
        </Box>
        <Spacer />
        <Center>
          <Button
            colorScheme="red"
            size={"xs"}
            onClick={() => dispatch(removeFromCart(id))}
          >
            Remove
          </Button>
        </Center>
      </Flex>
    </div>
  );
}

export default CartDrawerItem;
