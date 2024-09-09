import {  Outlet } from 'react-router-dom';
import Aside from '../../Components/Aside';
import NavChakra from '@/Components/NavChakra';

function ProductsLayout() {
  return (
    <>
      {/* <NavChakra/> */}
      <div className="flex">
        <Aside/>
        <Outlet />
      </div>
    </>
  );
}

export default ProductsLayout