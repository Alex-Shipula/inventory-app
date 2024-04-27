import React from 'react'
import { Box, useTheme } from '@mui/material'

import WrapperPage from 'src/components/WrapperPage'
import ProductItem from 'src/components/items/ProductItem'
import { mockProducts } from 'src/store/mockProducts'
import CustomizedAutocomplete from 'src/components/CustomizedAutocomplete'
import CustomizedModal from 'src/components/CustomizedModal'
import TextItem from 'src/components/items/TextItem'
import MonitorIcon from '@mui/icons-material/Monitor'
import { IProduct } from 'src/types'

const ProductPage = () => {
  const theme = useTheme()

  const [productItem, setProductItem] = React.useState<IProduct | null>(null)

  const handleClose = () => {
    setProductItem(null)
  }

  const handleDeleteProduct = () => {
    console.log('delete')
    handleClose()
  }

  const addProduct = (product: IProduct) => {
    setProductItem(product)
  }

  return (
    <>
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
            return <ProductItem item={item} key={item.id} addProduct={addProduct}/>
          })}
        </Box>
      </WrapperPage>
      <CustomizedModal title={'Вы уверены что хотите удалить этот продукт?'} open={!!productItem} handleClose={handleClose}
        action={handleDeleteProduct} maxWidth='690px'>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '12px 24px',
            gap: '34px'
          }}
        >
          <Box
            minWidth={'35px'}
          >
            <Box
              sx={{
                borderRadius: '50%',
                backgroundColor: productItem?.type === 'free' ? theme.palette.text.secondary : theme.palette.text.primary,
                width: '12px',
                height: '12px'
              }}
            />
          </Box>
          <MonitorIcon sx={{ color: theme.palette.text.primary }} />
          <Box
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'start'}
            minWidth={'400px'}
          >
            <TextItem text={productItem?.title ?? ''} borderBottom isTooltip width={400} />
            <TextItem text={`SN-${productItem?.serialNumber ?? ''}`} weight={400} size={14} />
          </Box>
        </Box>
      </CustomizedModal>
    </>
  )
}

export default ProductPage
