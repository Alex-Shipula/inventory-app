import React from 'react'
import { Box, Tooltip, useTheme } from '@mui/material'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import WrapperPage from 'src/components/WrapperPage'
import { mockOrders } from 'src/store/mockOrders'
import OrderItem from 'src/components/items/OrderItem'
import ProductPopper from 'src/components/items/ProductPopper'
import CustomizedAutocomplete from 'src/components/CustomizedAutocomplete'

const OrderPage = () => {
  const theme = useTheme()

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
              Приходы / {mockOrders.length}
            </Box>
          </Box>
          <CustomizedAutocomplete
            options={[{ title: 'ddd', value: 'ffff' }]}
            onChange={(e) => { console.log(e) }}
            onInputChange={(e) => { console.log(e) }}
            textFieldProps={{
              placeholder: 'Поиск по типу прихода',
              sx: {
                width: '300px'
              }
            }}
          />
        </Box>
        {mockOrders.map((item) => {
          return <OrderItem item={item} key={item.id} isExpanded={item.id === isExpandedId}
            setIsExpandedId={setIsExpandedId} setAnchorEl={setAnchorEl} isExpandAll={!!isExpandedId} />
        })}
      </Box>
      {!!anchorEl && (
        <ProductPopper anchorEl={anchorEl} openPopper={!!anchorEl}
          handleClosePopper={handleClosePopper} order={selectOrder} />)}
    </WrapperPage>
  )
}

export default OrderPage
