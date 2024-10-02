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
      providesTags: (result, error, arg) =>
        result
          ? [
              ...result.data.map(({ id }: { id: number }) => ({
                type: "Products" as const,
                id,
              })),
              "Products",
            ]
          : ["Post"],
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
      invalidatesTags: (result, error, arg) => [{ type: "Products", id: arg.id }],
    }),
  }),
});

export const {
  useGetDashboardProductsQuery,
  useDeleteDashboardProductMutation,
} = ProductsApiSlice;
