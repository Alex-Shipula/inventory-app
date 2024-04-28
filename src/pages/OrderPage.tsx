import React, { useEffect } from 'react'
import { Box, Tooltip, useTheme } from '@mui/material'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import WrapperPage from 'src/components/WrapperPage'
import OrderItem from 'src/components/items/OrderItem'
import ProductPopper from 'src/components/items/ProductPopper'
import CustomizedAutocomplete from 'src/components/CustomizedAutocomplete'
import CustomizedModal from 'src/components/CustomizedModal'
import { IOrder, IProduct } from 'src/types'
import TextItem from 'src/components/items/TextItem'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectOrdersState,
  setOrdersState, useDeleteOrderMutation
} from 'src/store/orders'
import { setProductsState } from 'src/store/products'
import { ordersFilter } from 'src/helpers/filters'

const OrderPage = () => {
  const theme = useTheme()
  const dispatch = useDispatch()
  const orders = useSelector(selectOrdersState)
  const [deleteOrders] = useDeleteOrderMutation()

  const [allOrders, setAllOrders] = React.useState<IOrder[] | undefined>(orders)
  const [isExpandedId, setIsExpandedId] = React.useState<string>('')
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const [orderItem, setOrderItem] = React.useState<IOrder | null>(null)

  const selectOrder = orders?.find((item) => item.id === isExpandedId) ?? null
  const optionsOrdersFilter = [{ title: 'Все', value: 'all' }, ...orders?.map((item) => {
    return { title: item?.title, value: item?.title }
  }).filter((item, index, self) => self.findIndex((t) => t.title === item.title) === index)!]

  useEffect(() => {
    orders && setAllOrders(orders)
  }, [orders])

  const handleChangeType = (type: string) => {
    const filteredOrders = ordersFilter(type, orders)
    filteredOrders && setAllOrders(filteredOrders)
  }

  const handleClosePopper = () => {
    setAnchorEl(null)
    setIsExpandedId('')
  }

  const handleClose = () => {
    setOrderItem(null)
  }

  const handleDeleteOrder = () => {
    const allOrders: IOrder[] | undefined = orders?.filter((item) => item.id !== orderItem?.id)
    const allProducts: IProduct[] | undefined = allOrders?.map((item: IOrder) => item.products).flat()
    allOrders && dispatch(setOrdersState(allOrders))
    allProducts && dispatch(setProductsState(allProducts))
    orderItem && deleteOrders(orderItem?.id)!
    setOrderItem(null)
  }

  const handleOpenDeleteOrder = (item: IOrder) => {
    setOrderItem(item)
  }

  return (
    <>
      <WrapperPage>
        <Box
          display={'flex'}
          flexDirection={'column'}
          gap={'10px'}
          paddingTop={'50px'}
          paddingBottom={'50px'}
        >
          <Box
            width={'100%'}
            display={'flex'}
            alignItems={'center'}
            justifyContent={'start'}
            paddingBottom={'50px'}
            gap={'30px'}
          >
            <Box
              width={'100%'}
              display={'flex'}
              alignItems={'center'}
              justifyContent={'start'}
              gap={'30px'}
            >
              <Tooltip title={'Add order'}>
                <AddCircleIcon sx={{ color: theme.palette.text.secondary, cursor: 'pointer', width: '60px', height: '60px' }} />
              </Tooltip>
              <Box
                sx={{
                  color: theme.palette.text.primary,
                  fontSize: '32px',
                  fontWeight: 700
                }}
              >
                Приходы / {allOrders?.length}
              </Box>
            </Box>
            <CustomizedAutocomplete
              options={optionsOrdersFilter}
              onChange={(e: { title: string, value: string } | null) => handleChangeType(e?.value ?? '')}
              textFieldProps={{
                placeholder: 'Поиск по типу прихода',
                sx: {
                  width: '300px'
                }
              }}
            />
          </Box>
          {allOrders?.map((item) => {
            return <OrderItem item={item} key={item.id} isExpanded={item.id === isExpandedId}
              setIsExpandedId={setIsExpandedId} setAnchorEl={setAnchorEl} isExpandAll={!!isExpandedId}
              addOrder={handleOpenDeleteOrder} />
          })}
        </Box>
        {!!anchorEl && (
          <ProductPopper anchorEl={anchorEl} openPopper={!!anchorEl}
            handleClosePopper={handleClosePopper} order={selectOrder} />)}
      </WrapperPage>
      <CustomizedModal title={'Вы уверены что хотите удалить этот приход?'} open={!!orderItem} handleClose={handleClose}
        action={handleDeleteOrder} maxWidth='690px'>
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
          <TextItem text={orderItem?.title ?? ''} weight={400} size={14} borderBottom isTooltip width={200} />
          <Box
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'center'}
            alignItems={'center'}
            minWidth={'50px'}
          >
            <TextItem text={`${orderItem?.products?.length ?? 0}`} weight={600} size={16} width={10} />
            <TextItem text={'Продукта'} weight={400} size={11} />
          </Box>
        </Box>
      </CustomizedModal>
    </>
  )
}

export default OrderPage
