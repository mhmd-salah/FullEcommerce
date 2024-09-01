import {  Outlet } from 'react-router-dom';
import Aside from '../../Components/Aside';
import Header from '@/Components/Header';

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