import React, { useEffect } from 'react'
import { Box, useTheme } from '@mui/material'

import WrapperPage from 'src/components/WrapperPage'
import ProductItem from 'src/components/items/ProductItem'
import CustomizedAutocomplete from 'src/components/CustomizedAutocomplete'
import CustomizedModal from 'src/components/CustomizedModal'
import TextItem from 'src/components/items/TextItem'
import MonitorIcon from '@mui/icons-material/Monitor'
import { IOrder, IProduct } from 'src/types'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectProductsState, setProductsState,
  useDeleteProductMutation
} from 'src/store/products'
import { selectOrdersState, setOrdersState } from 'src/store/orders'
import { optionsProductFilter } from 'src/types/constants'
import { productsFilter } from 'src/helpers/filters'

const ProductPage = () => {
  const theme = useTheme()
  const dispatch = useDispatch()
  const orders = useSelector(selectOrdersState)
  const products = useSelector(selectProductsState)
  const [deleteProducts] = useDeleteProductMutation()

  const [allProducts, setAllProducts] = React.useState<IProduct[] | undefined>(products)
  const [productItem, setProductItem] = React.useState<IProduct | null>(null)
  const [filterType, setFilterType] = React.useState<string>('')
  const [filterSpecification, setFilterSpecification] = React.useState<string>('')

  const optionsSpecificProductFilter = products?.map((item) => {
    return { title: item?.title, value: item?.title }
  }).filter((item, index, self) => self.findIndex((t) => t.title === item.title) === index)

  useEffect(() => {
    products && setAllProducts(products)
  }, [products])

  const handleClose = () => {
    setProductItem(null)
  }

  const handleChangeType = (type: string) => {
    setFilterType(type)
    const filteredProducts = productsFilter(type, filterSpecification, products)
    filteredProducts && setAllProducts(filteredProducts)
  }

  const handleChangeSpecification = (specification: string) => {
    setFilterSpecification(specification)
    const filteredProducts = productsFilter(filterType, specification, products)
    filteredProducts && setAllProducts(filteredProducts)
  }

  const handleDeleteProduct = () => {
    const allOrders: IOrder[] | undefined = orders?.map((item) => {
      return {
        ...item,
        products: item.products.filter((product) => product.id !== productItem?.id)
      }
    })
    const allProducts: IProduct[] | undefined = allOrders?.map((item: IOrder) => item.products).flat()
    allOrders && dispatch(setOrdersState(allOrders))
    allProducts && dispatch(setProductsState(allProducts))
    productItem && deleteProducts(productItem?.id)!
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
          height={'100%'}
          paddingTop={'50px'}
        >
          <Box
            width={'100%'}
            height={'200px'}
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
              Продукты / {allProducts?.length}
            </Box>
            <CustomizedAutocomplete
              options={optionsProductFilter}
              onChange={(e: {title: string, value: string} | null) => handleChangeType(e?.value ?? 'all')}
              textFieldProps={{
                placeholder: 'Поиск по типу продукта',
                sx: {
                  width: '300px'
                }
              }}
            />
            <CustomizedAutocomplete
              options={optionsSpecificProductFilter ?? []}
              onChange={(e: {title: string, value: string} | null) => handleChangeSpecification(e?.value ?? '')}
              textFieldProps={{
                placeholder: 'Поиск по спецификации',
                sx: {
                  width: '300px'
                }
              }}
            />
          </Box>
          <Box
            display={'flex'}
            flexDirection={'column'}
            paddingBottom={'100px'}
            gap={'18px'}>
            {allProducts?.map((item, index) => {
              return <ProductItem item={item} key={index} addProduct={addProduct}/>
            })}
          </Box>
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
