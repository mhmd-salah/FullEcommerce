import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./Pages";
import AboutPage from "./Pages/CategoryPage";
import ProductsPage from "./Pages/ProductsPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import RootLayout from "./Pages/RootLayout";
import ProductsLayout from "./Pages/products";
import ProductDetailPage from "./Pages/products/ProductDetailPage";
import Categoies from "./Pages/products/Categories";
import CartPage from "./Pages/CartPage";
import cookieService from "./services/cookieService";
import LoginForm from "./Components/LoginForm";
import CartDrawer from "./Components/CartDrawer";
function App() {
  const location = useLocation()
  const client = new QueryClient();
  const token = cookieService.get("jwt");
  console.log(token)
  return (
    <>
      <QueryClientProvider client={client}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<RootLayout isAuthenticated={token}/>}>
            <Route index element={<HomePage />} />
            <Route path="/categories" element={<AboutPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/products" element={<ProductsLayout />}>
              <Route index element={<ProductsPage />} />
              <Route path=":id" element={<ProductDetailPage />} />
              <Route path="categories" element={<Categoies />} />
            </Route>
          </Route>
          <Route
            path="/login"
            element={<LoginForm isAuthenticated={token} />}
          />
        </Routes>
      </QueryClientProvider>
      <CartDrawer/>
    </>
  );
}

export default App;
