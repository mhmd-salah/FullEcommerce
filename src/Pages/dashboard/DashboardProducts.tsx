import { useAddDashboardProductMutation } from "@/App/services/Products";
import DashboardProductsTable from "@/Components/DashboardProductsTable";
import Modal from "@/shared/Modal";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  useDisclosure,
} from "@chakra-ui/react";
import { ChangeEvent, useEffect, useState } from "react";

function DashboardProducts() {

  const [addProduct,{isLoading,isSuccess}] = useAddDashboardProductMutation()

  // states
  const [newProduct, setNewProduct] = useState<null | any>(null);
  const [thumbnail, setThumbnail] = useState<null | any>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  // handler
  const ChangeHandler = (field: any) => (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e?.target.value;
    setNewProduct({
      ...newProduct,
      [field]: inputValue,
    });
    console.log(newProduct);
  };
  const ChangeThumbnailHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e?.target.files;
    if (inputValue && inputValue.length > 0) {
      setThumbnail(inputValue[0]);
    }
  };
  const submitHandler=(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("data", JSON.stringify({
      title: newProduct?.title,
      description: newProduct?.description,
      price: newProduct?.price,
      stock: newProduct?.stock,
    }));
    formData.append("files.thumbnail", thumbnail);
    addProduct({body:formData})
  }

  useEffect(() => {
    if (isSuccess) {
      setNewProduct(null);
      onClose();
    }
  }, [isSuccess]);
  return (
    <>
      <div className="flex justify-end mb-4">
        <Button
          colorScheme="teal"
          onClick={() => {
            onOpen();
          }}
        >
          Add New Product
        </Button>
        <Modal
          title="Add Product"
          okText="Add"
          cancelText="Cancel"
          onClose={onClose}
          isOpen={isOpen}
          onOkClick={submitHandler}
          isLoading={isLoading}
        >
          <Box as="form">
            <FormControl>
              <FormLabel>Product Title</FormLabel>
              <Input type="text" onChange={ChangeHandler("title")} />
            </FormControl>
            <FormControl my={2}>
              <FormLabel>Product Description</FormLabel>
              <Input type="text" onChange={ChangeHandler("description")} />
            </FormControl>
            <FormControl my={2}>
              <FormLabel>Product Price</FormLabel>
              <NumberInput precision={2} step={0.2} defaultValue={0.0}>
                <NumberInputField onChange={ChangeHandler("price")} />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>
            <FormControl>
              <FormLabel>Product Stock</FormLabel>
              <NumberInput precision={2} step={0.2} defaultValue={0.0}>
                <NumberInputField onChange={ChangeHandler("stock")} />
              </NumberInput>
            </FormControl>
            <FormControl>
              <FormLabel>Product Thumbnail</FormLabel>
              <Input
                type="file"
                accept="image/*"
                onChange={ChangeThumbnailHandler}
              />
            </FormControl>{" "}
          </Box>
        </Modal>
      </div>
      <DashboardProductsTable />
    </>
  );
}

export default DashboardProducts;
