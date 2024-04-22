import React from 'react'

import { Box, Paper, useTheme } from '@mui/material'
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks'
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone'
import { IOrder } from 'src/types'
import TextItem from '../TextItem'

const OrderItem = ({ item }: { item: IOrder }) => {
  const theme = useTheme()
  return (
    <Paper
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
        <TextItem text={item?.title} weight={400} size={14} borderBottom isTooltip width={200}/>
        <LibraryBooksIcon sx={{ color: theme.palette.text.primary, cursor: 'pointer' }} />
        <Box
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'center'}
          alignItems={'center'}
          minWidth={'50px'}
        >
          <TextItem text={`${item?.products?.length}`} weight={600} size={16} width={10}/>
          <TextItem text={'Продукта'} weight={400} size={11} />
        </Box>
        <TextItem text={item?.date} weight={400} size={14} width={80}/>
        <Box
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'start'}
          minWidth={'100px'}
        >
          <TextItem text={`${item?.price[0].value} ${item?.price[0].symbol}`} weight={400} size={9} />
          <TextItem text={`${item?.price[1].value} ${item?.price[1].symbol}`} weight={400} size={14} />
        </Box>
        <DeleteTwoToneIcon sx={{ color: theme.palette.text.primary, cursor: 'pointer' }} />
      </Box>
    </Paper>
  )
}

export default OrderItem
