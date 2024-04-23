import React from 'react'
import { Box } from '@mui/material'
import WrapperPage from 'src/components/WrapperPage'
import { mockOrders } from 'src/store/mockOrders'
import OrderItem from 'src/components/items/OrderItem'
import ProductPopper from 'src/components/items/ProductPopper'

const OrderPage = () => {
  const [isExpandedId, setIsExpandedId] = React.useState<string>('')
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const selectOrder = mockOrders.find((item) => item.id === isExpandedId) ?? null

  const handleClosePopper = () => {
    setAnchorEl(null)
    setIsExpandedId('')
  }

  return (
    <WrapperPage content={anchorEl ? 'start' : 'center'}>
      <Box
        display={'flex'}
        flexDirection={'column'}
        gap={'10px'}
        paddingTop={'50px'}
        paddingBottom={'50px'}
      >
        {mockOrders.map((item) => {
          return <OrderItem item={item} key={item.id} isExpanded={item.id === isExpandedId}
            setIsExpandedId={setIsExpandedId} setAnchorEl={setAnchorEl} isExpandAll={!!isExpandedId}/>
        })}
      </Box>
      {!!anchorEl && (
        <ProductPopper anchorEl={anchorEl} openPopper={!!anchorEl}
          handleClosePopper={handleClosePopper} order={selectOrder}/>)}
    </WrapperPage>
  )
}

export default OrderPage
