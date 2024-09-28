import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./Pages";
import CategoryPage from "./Pages/CategoryPage";
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
import NotFoundPage from "./Pages/NotFoundPage";
import { AnimatePresence } from "framer-motion";
import PageWrapper from "./Components/PageWrapper";
// import Test from "./Components/Test";

function App() {
  const location = useLocation();
  const client = new QueryClient();
  const token = cookieService.get("jwt");

  return (
    <>
    {/* <Test/> */}
      <QueryClientProvider client={client}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<RootLayout isAuthenticated={token} />}>
              <Route
                index
                element={
                  <PageWrapper>
                    <HomePage />
                  </PageWrapper>
                }
              />
              <Route
                path="/categories"
                element={
                  <PageWrapper>
                    <CategoryPage />
                  </PageWrapper>
                }
              />
              <Route
                path="/cart"
                element={
                  <PageWrapper>
                    <CartPage />
                  </PageWrapper>
                }
              />
              <Route path="/products" element={<ProductsLayout />}>
                <Route
                  index
                  element={
                    <PageWrapper>
                      <ProductsPage />
                    </PageWrapper>
                  }
                />
                <Route path=":id" element={<ProductDetailPage />} />
                <Route path="categories" element={<Categoies />} />
              </Route>
            </Route>
            {/* dashboard routes */}
            <Route path="/dashboard" element={<DashboardLayout />}>
              <Route
                index
                element={
                  <PageWrapper>
                    <AdminDashboard />
                  </PageWrapper>
                }
              />
              <Route
                path="products"
                element={
                  <PageWrapper>
                    <DashboardProducts />
                  </PageWrapper>
                }
              />
              <Route
                path="categories"
                element={
                  <PageWrapper>
                    <h1>categories</h1>
                  </PageWrapper>
                }
              />
            </Route>
            {/* login route */}
            <Route
              path="/login"
              element={<LoginForm isAuthenticated={token} />}
            />
            <Route
              path="*"
              element={
                <PageWrapper>
                  <NotFoundPage />
                </PageWrapper>
              }
            />
          </Routes>
        </AnimatePresence>
      </QueryClientProvider>
      <CartDrawer />
    </>
  );
}

export default App;
