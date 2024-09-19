import { createStandaloneToast } from "@chakra-ui/react";

export interface IcartItem {
  id: number;
  quantity: number;
}

const { toast } = createStandaloneToast();

export const addItemToShoppingCart = (
  cartItem: Partial<IcartItem> = {},
  shoppingCart = []
) => {
  const existsitem = shoppingCart.find(
    (item: Partial<IcartItem>) => item.id === cartItem.id
  );
  if (existsitem) {
    toast({
      title: "Add to your cart",
      description: "this item already exists thw quantity will be increased",
      status: "success",
      duration: 1008,
      isClosable: true,
    });
    return shoppingCart.map((item: { id: number; quantity: number }) =>
      item.id === cartItem.id ? { ...item, quantity: item.quantity + 1 } : null
    );
  }
  return [...shoppingCart, { ...cartItem, quantity: 1 }];
};
