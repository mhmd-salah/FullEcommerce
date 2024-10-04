import {
  useDeleteDashboardProductMutation,
  useGetDashboardProductsQuery,
} from "@/App/services/Products";
import CustomAlertDialog from "@/shared/AlertDialog";
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
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import React, { ChangeEvent, useEffect, useState } from "react";
import { Link } from "react-router-dom";

function DashboardProductsTable() {
  const { data, isLoading } = useGetDashboardProductsQuery({ page: 1 });
  const [destroyProduct, { isLoading: isDestroying, isSuccess }] =
    useDeleteDashboardProductMutation();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isModalOpen,
    onOpen: onModalOpen,
    onClose: onModalClose,
  } = useDisclosure();
  const [idProduct, setIdProduct] = useState<null | number>(0);
  const [productToEdit, setProductToEdit] = useState<null | Record<
    string,
    string
  >>(null);
  const [thumbnail, setThumbnail]= useState<null | any>(null);

  // |-Handlers-|
  const ChangeHandler =
    (field: any) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const inputValue = e?.target.value;
      setProductToEdit({
        ...productToEdit,
        [field]: inputValue,
      });
      console.log(productToEdit);
    };
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(productToEdit);
  };
  const ChangeThumbnailHandler=(e:ChangeEvent)=>{
    setThumbnail(e.target?.files[0]);

  }
  useEffect(() => {
    if (isSuccess) {
      setIdProduct(null);
      onClose();
    }
  }, [isSuccess]);
  if (isLoading)
    return (
      <div className="text-2xl text-gray-700 font-light">Table Loading...</div>
    );
  else
    return (
      <>
        <Modal
          title="Update Product"
          okText="Update"
          cancelText="Cancel"
          onClose={onModalClose}
          isOpen={isModalOpen}
          onOkClick={submitHandler}
        >
          <Box as="form" onSubmit={submitHandler}>
            <FormControl>
              <FormLabel>Update Product Name</FormLabel>
              <Input
                placeholder="Product Title"
                // name="title"
                value={productToEdit?.title}
                onChange={ChangeHandler("title")}
              />
            </FormControl>
            <FormControl my={3}>
              <FormLabel>Update Price</FormLabel>
              <NumberInput
                defaultValue={productToEdit?.price}
                precision={2}
                step={0.2}
              >
                <NumberInputField
                  // name="price"
                  onChange={ChangeHandler("price")}
                />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>
            <FormControl my={3}>
              <FormLabel>Count in Stock</FormLabel>
              <NumberInput defaultValue={0} precision={2} step={0.2}>
                <NumberInputField
                  // name="stock"
                  defaultValue={productToEdit?.stock}
                  onChange={ChangeHandler("stock")}
                />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>
            <FormControl>
              <FormLabel>Thumbnail</FormLabel>
              <Input
                id="thumbnail"
                type="file"
                p={2}
                accept="image/png, image/gif, image/jpeg"
                onChange={ChangeThumbnailHandler}
              />
            </FormControl>
          </Box>
        </Modal>
        <CustomAlertDialog
          isLoading={isDestroying}
          isOpen={isOpen}
          onOpen={onOpen}
          onClose={onClose}
          title="Are you sure"
          desc="Delete Product"
          cancelTxt="cancel"
          okTxt="Delete"
          onOkHandler={() => destroyProduct(idProduct)}
        />
        <TableContainer>
          <Table variant="striped" colorScheme="teal">
            <TableCaption>Imperial to metric conversion factors</TableCaption>
            <Thead>
              <Tr>
                <Th>Id</Th>
                <Th>Title</Th>
                <Th>Category</Th>
                <Th>Thumbnail</Th>
                <Th isNumeric>Price</Th>
                <Th isNumeric>Stock</Th>
                <Th>Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data?.data?.map((product: any) => (
                <Tr key={product.id}>
                  <Td>{product?.id}</Td>
                  <Td>{product?.attributes.title}</Td>
                  <Td>
                    {product?.attributes?.category?.attributes?.title ||
                      "Un Known"}
                  </Td>
                  <Td isNumeric>{"Un Known"}</Td>
                  <Td isNumeric>{product?.attributes?.price || "Un Known"}</Td>
                  <Td isNumeric>{product?.attributes?.stock ?? "Un Known"}</Td>
                  <Td className="space-x-2">
                    <Button
                      as={Link}
                      to={`/products/${product?.id}`}
                      colorScheme="teal"
                      variant="solid"
                    >
                      V
                    </Button>
                    <Button
                      colorScheme="red"
                      variant="solid"
                      onClick={() => {
                        setIdProduct(product?.id);

                        onOpen();
                      }}
                    >
                      D
                    </Button>
                    <Button
                      colorScheme="blue"
                      variant="solid"
                      onClick={() => {
                        setProductToEdit(product.attributes);
                        onModalOpen();
                      }}
                    >
                      E
                    </Button>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </>
    );
}
export default DashboardProductsTable;
