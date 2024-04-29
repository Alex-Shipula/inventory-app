import React, { useCallback, useLayoutEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import PrivateRoutes from './PrivateRoutes'
import PublicRoutes from './PublicRoutes'
import { useAuthWatchDog } from 'src/hooks/auth'
import { getDataFirestore } from 'src/helpers/getDataFirestore'
import { useDispatch } from 'react-redux'
import { setProductsState } from 'src/store/products'
import { setOrdersState } from 'src/store/orders'
import { IOrder, IProduct } from 'src/types'

const Routes = () => {
  const dispatch = useDispatch()
  const [auth, setAuth] = useState('')
  const [refresh, setRefresh] = useState(0)

  useLayoutEffect(() => {
    const token = localStorage.getItem('token')
    const name = localStorage.getItem('name')
    if (token ?? name) {
      token && setAuth(token)
      name && setAuth(name)
    } else {
      setAuth('')
    }
    getDataFirestore('orders').then((data: IOrder[] | undefined) => {
      const allProducts: IProduct[] | undefined = data?.flatMap((item: IOrder) => item.products)
      data && dispatch(setOrdersState(data))
      allProducts && dispatch(setProductsState(allProducts))
    })!
  }, [])

  const afterLogin = useCallback(() => {
    setRefresh((old) => old + 1)
  }, [])

  const afterLogout = useCallback(() => {
    setRefresh((old) => old + 1)
  }, [])

  useAuthWatchDog(afterLogin, afterLogout)

  return (
    <BrowserRouter>{auth ? <PrivateRoutes key={refresh} /> : <PublicRoutes key={refresh} />}</BrowserRouter>
  )
}
export default Routes
