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
  Input,
} from "@chakra-ui/react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

function CartDrawer() {
  const dispatch = useDispatch<useAppDispatch>();
  const btnRef = useRef<HTMLButtonElement>(null);
  const { isOpenCartDrawer } = useSelector(selectGlobal);
  const onClose = () => dispatch(onCloseCartDrawer());
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
          <Input placeholder="Type here..." />
        </DrawerBody>

        <DrawerFooter>
          <Button variant="outline" colorScheme="red" mr={3} onClick={() => {}}>
            Clear All
          </Button>
          {/* <Button colorScheme="blue">Save</Button> */}
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
export default CartDrawer;
