import { store } from "@/App/store";
import AppSkeleton from "@/Pages/AppSkelaton";
import { ChakraProvider } from "@chakra-ui/react";
import { ReactNode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});
function MainWrapper({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return loading ? (
    <AppSkeleton/>
  ) : (
    <QueryClientProvider client={client}>
      <Provider store={store}>
      <BrowserRouter>
        <ChakraProvider>{children}</ChakraProvider>
      </BrowserRouter>
      </Provider>
    </QueryClientProvider>
  );
}

export default MainWrapper;

