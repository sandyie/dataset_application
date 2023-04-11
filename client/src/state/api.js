
 import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
  reducerPath: "adminApi",
  tagTypes: ["Prouducts"],
  endpoints: (build) => ({

    getProducts: build.query({
        query: () => "client/products",
        providesTags: ["Products"],
    }),

    }),
});

export const {
    useGetProductsQuery
  } = api;