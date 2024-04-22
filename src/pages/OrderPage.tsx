import React from 'react'
import { Box } from '@mui/material'
import WrapperPage from 'src/components/WrapperPage'
import { mockOrders } from 'src/store/mockOrders'
import OrderItem from 'src/components/items/OrderItem'

const OrderPage = () => {
  return (
    <WrapperPage>
      <Box
        display={'flex'}
        flexDirection={'column'}
        gap={'10px'}
        paddingTop={'50px'}
        paddingBottom={'50px'}
      >
        {mockOrders.map((item) => {
          return <OrderItem item={item} key={item.id} />
        })}
      </Box>
    </WrapperPage>
  )
}

export default OrderPage
