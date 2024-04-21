import React from 'react'

import WrapperPage from 'src/components/WrapperPage'
import ProductItem from 'src/components/items/ProductItem'
import { mockProducts } from 'src/store/mockProducts'

const ProductPage = () => {
  return (
    <WrapperPage>
      <ProductItem item={mockProducts[0]} />
    </WrapperPage>
  )
}

export default ProductPage
