import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

 const baseUrl = import.meta.env.DEV
  ? import.meta.env.VITE_API_URL_LOCAL   // when running `npm run dev`
  : import.meta.env.VITE_API_URL_PROD;  // when deployed on Vercel

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
    credentials: "include",
  }),
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (inputData) => ({
        url: "/register",
        method: "POST",
        body: inputData,
      }),
    }),
    loginUser: builder.mutation({
      query: (inputData) => ({
        url: "/login",
        method: "POST",
        body: inputData,
      }),
    }),
  }),
});


export const { useRegisterUserMutation, useLoginUserMutation } = authApi;
