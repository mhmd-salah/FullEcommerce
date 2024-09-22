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
          <Tr>
            <Td>inches</Td>
            <Td>millimetres (mm)</Td>
            <Td isNumeric>25.4</Td>
          </Tr>
          <Tr>
            <Td>feet</Td>
            <Td>centimetres (cm)</Td>
            <Td isNumeric>30.48</Td>
          </Tr>
          <Tr>
            <Td>yards</Td>
            <Td>metres (m)</Td>
            <Td isNumeric>0.91444</Td>
          </Tr>
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>To convert</Th>
            <Th>into</Th>
            <Th isNumeric>multiply by</Th>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  );
}

export default DashboardProductsTable