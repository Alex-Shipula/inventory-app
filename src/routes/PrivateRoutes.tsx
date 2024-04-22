import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from 'src/components/Layout'
import MockPage from 'src/pages/MockPage'
import OrderPage from 'src/pages/OrderPage'
import ProductPage from 'src/pages/ProductPage'

const PrivateRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path="orders" element={<OrderPage />} />
        <Route path="groups" element={<MockPage />} />
        <Route path="products" element={<ProductPage />} />
        <Route path="users" element={<MockPage />} />
        <Route path="settings" element={<MockPage />} />
      </Route>
    </Routes>
  )
}

export default PrivateRoutes
