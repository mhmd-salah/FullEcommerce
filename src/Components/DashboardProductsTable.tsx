import {
  useDeleteDashboardProductMutation,
  useGetDashboardProductsQuery,
} from "@/App/services/Products";
import CustomAlertDialog from "@/shared/AlertDialog";
import {
  Button,
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
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function DashboardProductsTable() {
  const { data, isLoading } = useGetDashboardProductsQuery({ page: 1 });
  const [destroyProduct, { isLoading: isDestroying, isSuccess }] =
    useDeleteDashboardProductMutation();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [idProduct, setIdProduct] = useState<null | number>(0);
  useEffect(() => {
    if (isSuccess) {
      setIdProduct(null)
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
                      onClick={() => {}}
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
