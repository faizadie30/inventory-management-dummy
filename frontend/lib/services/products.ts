import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface Product {
  id: string;
  name: string;
  sku: string;
  barcode: string;
  description: string;
  price: number;
  stockQuantity: number;
  costPrice: number;
  isActive: boolean;
  categories: any[];
  variations: any[];
  createdAt: string;
  updatedAt: string;
}

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/' }),
  tagTypes: ['Products'],
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({
      query: () => 'products',
      providesTags: ['Products'],
    }),
    getProduct: builder.query<Product, string>({
      query: (id) => `products/${id}`,
      providesTags: ['Products'],
    }),
    createProduct: builder.mutation<Product, Partial<Product>>({
      query: (body) => ({
        url: 'products',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Products'],
    }),
    updateProduct: builder.mutation<Product, { id: string; body: Partial<Product> }>({
      query: ({ id, body }) => ({
        url: `products/${id}`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['Products'],
    }),
    deleteProduct: builder.mutation<void, string>({
      query: (id) => ({
        url: `products/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Products'],
    }),
  }),
});