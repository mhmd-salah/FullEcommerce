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
import AdminDashboard from "./Pages/dashboard";
import DashboardLayout from "./Pages/dashboard/DashboardLayout";
import DashboardProducts from "./Pages/dashboard/DashboardProducts";
function App() {
  const location = useLocation()
  const client = new QueryClient();
  const token = cookieService.get("jwt");
  console.log(token)
  return (
    <>
      <QueryClientProvider client={client}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<RootLayout isAuthenticated={token} />}>
            <Route index element={<HomePage />} />
            <Route path="/categories" element={<AboutPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/products" element={<ProductsLayout />}>
              <Route index element={<ProductsPage />} />
              <Route path=":id" element={<ProductDetailPage />} />
              <Route path="categories" element={<Categoies />} />
            </Route>
          </Route>
          {/* dashboard routes */}
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index  element={<AdminDashboard />} />
            <Route path="products" element={<DashboardProducts/>} />
            <Route path="categories" element={<h1>categories</h1>} />
          </Route>
          {/* login route */}
          <Route
            path="/login"
            element={<LoginForm isAuthenticated={token} />}
          />
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
      </QueryClientProvider>
      <CartDrawer />
    </>
  );
}

export default App;
