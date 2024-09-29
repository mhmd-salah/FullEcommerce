import {  useDeleteDashboardProductMutation, useGetDashboardProductsQuery } from "@/App/services/Products";
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
import { Link } from "react-router-dom";

function DashboardProductsTable() {
  const { data, isLoading } = useGetDashboardProductsQuery({ page: 1 });
  const [destroyProduct, { isLoading: isDestrying }] = useDeleteDashboardProductMutation();
  const { isOpen, onOpen, onClose } = useDisclosure();

  if (isLoading)
    return (
      <div className="text-2xl text-gray-700 font-light">Table Loading...</div>
    );
  else
    return (
      <>
        <CustomAlertDialog
          isOpen={isOpen}
          onOpen={onOpen}
          onClose={onClose}
          title="Are you sure"
          desc="Delete Product"
          cancelTxt="cancel"
          okTxt="Delete"
          onOkHandler={() => destroyProduct(3)}
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
                      onClick={() => {}}
                    >
                      V
                    </Button>
                    <Button colorScheme="red" variant="solid" onClick={onOpen}>
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
