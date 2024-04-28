import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { testApiUrl } from 'src/config'
import { RootState } from '.'
import { IProduct } from 'src/types'

export interface ProductsState {
  totalCount?: number
  productsState?: IProduct[]
}

const initialState: ProductsState = {
  totalCount: 0,
  productsState: []
}

export const ProductsSlice = createSlice({
  name: 'Products',
  initialState,
  reducers: {
    setProductsTotalCount: (state, action: PayloadAction<number>) => {
      state.totalCount = action.payload
    },
    setProductsState: (state, action: PayloadAction<IProduct[]>) => {
      state.productsState = action.payload
    }
  }
})

export const { setProductsTotalCount, setProductsState } = ProductsSlice.actions

export const selectProductsTotalCount = (state: RootState) => state.products.totalCount
export const selectProductsState = (state: RootState) => state.products.productsState

export default ProductsSlice.reducer

export const ProductsApi = createApi({
  reducerPath: 'ProductsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${testApiUrl}/v1/products`,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('token')
      if (token) {
        headers.set('authorization', `Bearer ${token}`)
      }
      return headers
    }
  }),
  tagTypes: ['Products'],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        url: '',
        method: 'GET'
      })
    }),
    createProducts: builder.mutation<IProduct, IProduct>({
      query: ({
        ...rest
      }) => ({
        url: '',
        method: 'POST',
        body: {
          ...rest
        }
      }),
      invalidatesTags: [{ type: 'Products', id: 'ProductsLIST' }]
    }),
    updateProduct: builder.mutation<IProduct, IProduct>({
      query: ({
        id, ...rest
      }) => ({
        url: `/${id}`,
        method: 'PATCH',
        body: {
          ...rest
        }
      }),
      invalidatesTags: [{ type: 'Products', id: 'ProductsLIST' }]
    }),
    deleteProduct: builder.mutation({
      query: (id: string) => ({
        url: `/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: [{ type: 'Products', id: 'ProductsLIST' }]
    }),
    getProductById: builder.query({
      query: (id: string) => ({
        url: `/${id}`,
        method: 'GET'
      })
    })
  })
})

export const {
  useGetProductsQuery,
  useCreateProductsMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
  useGetProductByIdQuery
} = ProductsApi
