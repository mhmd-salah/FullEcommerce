import cookieService from "@/services/cookieService";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ProductsApiSlice = createApi({
  reducerPath: "api",
  tagTypes: ["Products"],
  refetchOnFocus: true,
  refetchOnMountOrArgChange: true,
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_SERVER_URL,
  }),
  endpoints: (builder) => ({
    getDashboardProducts: builder.query({
      query: (arg) => {
        const { page } = arg;
        return {
          url: `/api/products?populate=thumbnail&pagination[page]=${page}&pagination[pageSize]=7`,
          method: "GET",
        };
      },
    }),
    deleteDashboardProduct: builder.mutation({
      query(id) {
        return {
          url: `/api/products/${id}`,
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${cookieService.get("jwt")}`,
          },
        };
      },
    }),
  }),
});

export const {
  useGetDashboardProductsQuery,
  useDeleteDashboardProductMutation,
} = ProductsApiSlice;
