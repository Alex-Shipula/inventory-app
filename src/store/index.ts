import { configureStore, combineReducers, isRejectedWithValue, type Middleware } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import productsReduser, { ProductsApi } from './products'
import ordersReduser, { OrdersApi } from './orders'

const unauthenticatedMiddleware: Middleware = () => (next) => (action) => {
  if (isRejectedWithValue(action) &&
    (action.payload?.status === 401)) {
    localStorage.removeItem('token')
    window.location.reload()
  }
  return next(action)
}

const reducers = {
  products: productsReduser,
  [ProductsApi.reducerPath]: ProductsApi.reducer,
  orders: ordersReduser,
  [OrdersApi.reducerPath]: OrdersApi.reducer
}

const rootReducer = combineReducers<typeof reducers>(reducers)

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
      .concat(unauthenticatedMiddleware)
      .concat(ProductsApi.middleware)
      .concat(OrdersApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>

setupListeners(store.dispatch)
