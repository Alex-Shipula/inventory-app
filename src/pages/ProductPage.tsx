import React from 'react'
import { Box, useTheme } from '@mui/material'

import WrapperPage from 'src/components/WrapperPage'
import ProductItem from 'src/components/items/ProductItem'
import { mockProducts } from 'src/store/mockProducts'
import CustomizedAutocomplete from 'src/components/CustomizedAutocomplete'

const ProductPage = () => {
  const theme = useTheme()
  return (
    <WrapperPage>
      <Box
        display={'flex'}
        flexDirection={'column'}
        gap={'10px'}
        paddingTop={'350px'}
        paddingBottom={'50px'}
      >
        <Box
          width={'100%'}
          display={'flex'}
          alignItems={'center'}
          justifyContent={'start'}
          gap={'50px'}
          paddingBottom={'50px'}
        >
          <Box
            sx={{
              color: theme.palette.text.primary,
              fontSize: '32px',
              fontWeight: 700
            }}
          >
            Продукты / {mockProducts.length}
          </Box>
          <CustomizedAutocomplete
            options={[{ title: 'ddd', value: 'ffff' }]}
            onChange={(e) => { console.log(e) }}
            onInputChange={(e) => { console.log(e) }}
            textFieldProps={{
              placeholder: 'Поиск по типу продукта',
              sx: {
                width: '300px'
              }
            }}
          />
          <CustomizedAutocomplete
            options={[{ title: 'ddd', value: 'ffff' }]}
            onChange={(e) => { console.log(e) }}
            onInputChange={(e) => { console.log(e) }}
            textFieldProps={{
              placeholder: 'Поиск по спецификации',
              sx: {
                width: '300px'
              }
            }}
          />
        </Box>
        {mockProducts.map((item) => {
          return <ProductItem item={item} key={item.id} />
        })}
      </Box>
    </WrapperPage>
  )
}

export default ProductPage
