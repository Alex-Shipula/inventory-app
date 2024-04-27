import React from 'react'

import { Box, Paper, Tooltip, useTheme } from '@mui/material'
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks'
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { IOrder } from 'src/types'
import TextItem from './TextItem'
import { calculateTotalCostOrderProduct } from 'src/utils/totalCostOrderProduct'

interface IOrderItem {
  item: IOrder
  isExpanded: boolean
  setIsExpandedId: (id: string) => void
  setAnchorEl: (anchorEl: null | HTMLElement) => void
  isExpandAll: boolean
}

const OrderItem = ({ item, isExpanded, setIsExpandedId, setAnchorEl, isExpandAll }: IOrderItem) => {
  const theme = useTheme()
  const ref = React.useRef(null)

  const handleOpenPopper = () => {
    setAnchorEl(ref?.current)
    setIsExpandedId(item.id)
  }

  return (
    <Paper
      ref={ref}
      sx={{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: theme.palette.primary.light,
        borderRadius: '4px',
        width: '100%',
        height: '90px',
        overflow: 'hidden',
        '&:hover': {
          boxShadow: '2px 18px 25px rgba(4, 2, 4.6, 0.33)'
        }
      }}
    >
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
        {!isExpandAll && <TextItem text={item?.title} weight={400} size={14} borderBottom isTooltip width={200} />}
        <Tooltip title={'Expand'} arrow>
          <LibraryBooksIcon sx={{ color: theme.palette.text.primary, cursor: 'pointer' }}
            onClick={handleOpenPopper} />
        </Tooltip>
        <Box
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'center'}
          alignItems={'center'}
          minWidth={'50px'}
        >
          <TextItem text={`${item?.products?.length}`} weight={600} size={16} width={10} />
          <TextItem text={'Продукта'} weight={400} size={11} />
        </Box>
        <TextItem text={item?.date} weight={400} size={14} width={80} />
        {!isExpandAll && <Box
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'start'}
          minWidth={'100px'}
        >
          <TextItem text={`${calculateTotalCostOrderProduct([item])?.UAH} UAH`} weight={400} size={9} />
          <TextItem text={`${calculateTotalCostOrderProduct([item])?.USD} USD`} weight={400} size={14} />
        </Box>}
        {!isExpandAll && <Tooltip title={'Delete'} arrow>
          <DeleteTwoToneIcon sx={{ color: theme.palette.text.primary, cursor: 'pointer' }} />
        </Tooltip>}
      </Box>
      {isExpanded && (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '70px',
            height: '100%',
            backgroundColor: theme.palette.secondary.light
          }}>
          <ArrowForwardIosIcon sx={{ color: theme.palette.primary.light, cursor: 'pointer' }} />
        </Box>
      )}
    </Paper>
  )
}

export default OrderItem
