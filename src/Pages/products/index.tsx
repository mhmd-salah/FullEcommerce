import {  Outlet } from 'react-router-dom';
import Aside from '../../Components/Aside';

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