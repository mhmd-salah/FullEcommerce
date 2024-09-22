import { store } from "@/App/store";
import { ChakraProvider } from "@chakra-ui/react";
import { ReactNode } from "react";
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
  return (
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
