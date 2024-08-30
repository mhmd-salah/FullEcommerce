import { Outlet } from 'react-router-dom';
import Header from '../../Components/Header';

function ProductsLayout() {
  return (
    <>
      <Header />
      <div className='flex '>
        <nav className='border-r border-[#ccc] min-w-52 p-3'>
          hello
        </nav>
        <Outlet />
      </div>
    </>
  );
}

export default ProductsLayout