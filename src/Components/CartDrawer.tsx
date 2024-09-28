import {
  onCloseCartDrawer,
  selectGlobal,
} from "@/App/feathers/globalSlice";
import { useAppDispatch } from "@/App/store";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Text,
} from "@chakra-ui/react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearAll, removeFromCart, selectCartProduct } from "@/App/feathers/cartSlice";
import CartDrawerItem from "./CartDrawerItem";

function CartDrawer() {
  const dispatch = useDispatch<useAppDispatch>();
  const btnRef = useRef<HTMLButtonElement>(null);
  const { isOpenCartDrawer } = useSelector(selectGlobal);
  const { cartProducts } = useSelector(selectCartProduct);
  const onClose = () => dispatch(onCloseCartDrawer());
  // console.log(cartProducts)
  return (
    <Drawer
      isOpen={isOpenCartDrawer}
      placement="right"
      onClose={onClose}
      finalFocusRef={btnRef}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Shopping Cart</DrawerHeader>

        <DrawerBody>
          {/* <Input placeholder="Type here..." /> */}
          {cartProducts.length? cartProducts.map((item:any) =>(
            <CartDrawerItem
            // key={item&&item.id}
              {...item}
            />
          )):<Text color={"gray"}>Cart Drawer is empty</Text>}
        </DrawerBody>

        <DrawerFooter>
          <Button variant="outline" colorScheme="red" mr={3} onClick={() =>dispatch(clearAll())}>
            Clear All
          </Button>
          {/* <Button colorScheme="blue">Save</Button> */}
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
export default CartDrawer;
