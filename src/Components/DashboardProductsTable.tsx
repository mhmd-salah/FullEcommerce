import { useGetDashboardProductsQuery } from '@/App/services/apiSlice';
import { Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from '@chakra-ui/react';

function DashboardProductsTable() {
  const {data,error,isLoading} = useGetDashboardProductsQuery({page:1})
  if(isLoading) return <div className="text-2xl text-gray-700 font-light">Table Loading...</div>

  
  return (
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
            <Tr>
              <Td>{product?.id}</Td>
              <Td>{product?.attributes.title}</Td>
              <Td>{product?.attributes?.category?.attributes?.title || "Un Known" }</Td>
              <Td isNumeric >{product?.attributes?.price || "Un Known" }</Td>
              <Td isNumeric >{product?.attributes?.stock || "Un Known" }</Td>
              <Td>
                
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}

export default DashboardProductsTable