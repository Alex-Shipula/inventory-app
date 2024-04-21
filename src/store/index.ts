import { configureStore, combineReducers, isRejectedWithValue, type Middleware } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

const unauthenticatedMiddleware: Middleware = () => (next) => (action) => {
  if (isRejectedWithValue(action) &&
    (action.payload?.status === 401)) {
    localStorage.removeItem('name')
    window.location.reload()
  }
  return next(action)
}

const reducers = {
}

const rootReducer = combineReducers<typeof reducers>(reducers)

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
      .concat(unauthenticatedMiddleware)
})

export type RootState = ReturnType<typeof store.getState>

setupListeners(store.dispatch)
