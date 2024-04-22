import { Box } from '@mui/material'
import React from 'react'

import WrapperPage from 'src/components/WrapperPage'
import ProductItem from 'src/components/items/ProductItem'
import { mockProducts } from 'src/store/mockProducts'

const ProductPage = () => {
  return (
    <WrapperPage>
      <Box
        display={'flex'}
        flexDirection={'column'}
        gap={'10px'}
        paddingTop={'350px'}
        paddingBottom={'50px'}
      >
        {mockProducts.map((item) => {
          return <ProductItem item={item} key={item.id} />
        })}
      </Box>
    </WrapperPage>
  )
}

export default ProductPage
