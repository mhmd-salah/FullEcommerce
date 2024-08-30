import { Routes,Route } from "react-router-dom"
import HomePage from "./Pages";
import AboutPage from "./Pages/CategoryPage";
import ProductsPage from "./Pages/ProductsPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import RootLayout from "./Pages/RootLayout";
import ProductsLayout from "./Pages/products";
import ProductDetailPage from "./Pages/products/ProductDetailPage";
function App() {

  const client = new QueryClient();
  return (
    <>
      <QueryClientProvider client={client}>
        <Routes>
          <Route path="/" element={<RootLayout/>}>
            <Route index element={<HomePage />} />
            <Route path="/category" element={<AboutPage />} />
          </Route>
          <Route path="/products" element={<ProductsLayout/>}>
            <Route index element={<ProductsPage />} />
            <Route path=":id" element={<ProductDetailPage />} />
          </Route>
        </Routes>
      </QueryClientProvider>
    </>
  );
}

export default App
