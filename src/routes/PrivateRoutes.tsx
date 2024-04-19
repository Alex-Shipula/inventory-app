import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from 'src/components/Layout'
import MockPage from 'src/pages/MockPage'

const PrivateRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path="orders" element={<MockPage />} />
        <Route path="products" element={<MockPage />} />
      </Route>
    </Routes>
  )
}

export default PrivateRoutes
