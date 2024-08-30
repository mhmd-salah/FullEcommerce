import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import RootLayout from "../Pages/RootLayout";
import HomePage from "../Pages";
import ProductsPage from "../Pages/products/ProductsPage";
import ProductDetailPage from "../Pages/products/ProductDetailPage";
import ProductsLayout from "../Pages/products";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* root layout */}
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
      </Route>
      {/* products layout */}
      <Route path="/products" element={<ProductsLayout/>}>
        <Route index element={<ProductsPage />} />
        <Route path=":id" element={<ProductDetailPage />} />
      </Route>
    </>
  )
);
