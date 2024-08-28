import { Routes,Route } from "react-router-dom"
import HomePage from "./Pages";
import AboutPage from "./Pages/AboutPage";
import ProductsPage from "./Pages/ProductsPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
function App() {

  const client = new QueryClient();
  return (
    <>
      <QueryClientProvider client={client}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products" element={<ProductsPage />} />
        </Routes>
      </QueryClientProvider>
    </>
  );
}

export default App
