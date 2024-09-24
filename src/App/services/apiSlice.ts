import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  tagTypes: ["Products"],
  refetchOnFocus:true,
  refetchOnMountOrArgChange:true,
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_SERVER_URL,
  }),
  endpoints: (builder) => ({
    getDashboardProducts: builder.query({
      query: (arg) => {
        const {page} = arg;
        return {
          url: `/api/products?populate=thumbnail&pagination[page]=${page}&pagination[pageSize]=7`,
          method: "GET",
        };
      },
    }),

  }),
});

export const { useGetDashboardProductsQuery } = apiSlice; 