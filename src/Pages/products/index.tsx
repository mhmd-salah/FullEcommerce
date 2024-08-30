import {  Outlet } from 'react-router-dom';
import Header from '../../Components/Header';
import Aside from '../../Components/Aside';

function ProductsLayout() {
  return (
    <>
      <Header />
      <div className="flex">
        <Aside/>
        <Outlet />
      </div>
    </>
  );
}

export default ProductsLayout