import { api } from "@/api";
import { useQuery } from "@tanstack/react-query";

const fetchProducts = async () => {
  const res = await api.get(
    "/products?populate=thumbnail,category"
  );
  return res.data;
};

export const useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });
};
