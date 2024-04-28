import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { testApiUrl } from 'src/config'
import { RootState } from '.'
import { IOrder } from 'src/types'

export interface OrdersState {
  totalCount?: number
  ordersState?: IOrder[]
}

const initialState: OrdersState = {
  totalCount: 0,
  ordersState: []
}

export const OrdersSlice = createSlice({
  name: 'Orders',
  initialState,
  reducers: {
    setOrdersTotalCount: (state, action: PayloadAction<number>) => {
      state.totalCount = action.payload
    },
    setOrdersState: (state, action: PayloadAction<IOrder[]>) => {
      state.ordersState = action.payload
    }
  }
})

export const { setOrdersTotalCount, setOrdersState } = OrdersSlice.actions

export const selectOrdersTotalCount = (state: RootState) => state.orders.totalCount
export const selectOrdersState = (state: RootState) => state.orders.ordersState

export default OrdersSlice.reducer

export const OrdersApi = createApi({
  reducerPath: 'OrdersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${testApiUrl}/v1/orders`,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('token')
      if (token) {
        headers.set('authorization', `Bearer ${token}`)
      }
      return headers
    }
  }),
  tagTypes: ['Orders'],
  endpoints: (builder) => ({
    getOrders: builder.query({
      query: () => ({
        url: '',
        method: 'GET'
      })
    }),
    createOrders: builder.mutation<IOrder, IOrder>({
      query: ({
        ...rest
      }) => ({
        url: '',
        method: 'POST',
        body: {
          ...rest
        }
      }),
      invalidatesTags: [{ type: 'Orders', id: 'OrdersLIST' }]
    }),
    updateOrder: builder.mutation<IOrder, IOrder>({
      query: ({
        id, ...rest
      }) => ({
        url: `/${id}`,
        method: 'PATCH',
        body: {
          ...rest
        }
      }),
      invalidatesTags: [{ type: 'Orders', id: 'OrdersLIST' }]
    }),
    deleteOrder: builder.mutation({
      query: (id: string) => ({
        url: `/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: [{ type: 'Orders', id: 'OrdersLIST' }]
    }),
    getOrderById: builder.query({
      query: (id: string) => ({
        url: `/${id}`,
        method: 'GET'
      })
    })
  })
})

export const {
  useGetOrdersQuery,
  useCreateOrdersMutation,
  useUpdateOrderMutation,
  useDeleteOrderMutation,
  useGetOrderByIdQuery
} = OrdersApi
