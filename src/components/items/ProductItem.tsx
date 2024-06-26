import React from 'react'
import { Box, Paper, Tooltip, useTheme } from '@mui/material'
import MonitorIcon from '@mui/icons-material/Monitor'
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone'
import { IProduct } from 'src/types'
import TextItem from './TextItem'
import { formatDateForTwo } from 'src/utils/formatDate'

const ProductItem = ({ item, addProduct }: { item: IProduct, addProduct: (product: IProduct) => void }) => {
  const theme = useTheme()

  const handleDeleteProduct = () => {
    addProduct(item)
  }

  return (
    <Paper
      sx={{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: theme.palette.primary.light,
        borderRadius: '4px',
        width: '100%',
        minHeight: '90px',
        maxHeight: '90px',
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
        <Box
          minWidth={'35px'}
        >
          <Box
            sx={{
              borderRadius: '50%',
              backgroundColor: item?.type === 'free' ? theme.palette.text.secondary : theme.palette.text.primary,
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
          <TextItem text={item?.title} borderBottom isTooltip width={400} maxWidth={400}/>
          <TextItem text={`SN-${item?.serialNumber}`} weight={400} size={14} />
        </Box>
        <TextItem text={item?.type === 'free' ? 'Свободен' : 'В ремонте'} width={100}
          color={item?.type === 'free' ? theme.palette.text.secondary : theme.palette.text.primary} weight={800} size={15} />
        <Box
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'start'}
          minWidth={'100px'}
        >
          <TextItem text={`c ${formatDateForTwo(item?.guarantee.start)?.format2}`} weight={400} size={15} />
          <TextItem text={`по ${formatDateForTwo(item?.guarantee.end)?.format2}`} weight={400} size={15} />
        </Box>
        <TextItem text={item?.isNew ? 'НОВЫЙ' : 'Б/У'} weight={700} size={13} width={100} />
        <Box
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'start'}
          minWidth={'100px'}
        >
          <TextItem text={`${item?.price[0].value} ${item?.price[0].symbol}`} weight={400} size={9} />
          <TextItem text={`${item?.price[1].value} ${item?.price[1].symbol}`} weight={400} size={14} />
        </Box>
        <TextItem text={item?.groupTitle} weight={400} size={14} borderBottom isTooltip width={200} />
        <TextItem text={item?.orderTitle} weight={400} size={14} borderBottom isTooltip width={200} />
        <Box
          display={'flex'}
          flexDirection={'column'}
          alignItems={'center'}
          justifyContent={'center'}
        >
          <TextItem text={formatDateForTwo(item?.date)?.format1} weight={400} size={14} width={80} />
          <TextItem text={formatDateForTwo(item?.date)?.format2} weight={400} size={14} width={80} />
        </Box>
        <Tooltip title={'Delete'} arrow>
          <DeleteTwoToneIcon sx={{ color: theme.palette.text.primary, cursor: 'pointer' }}
            onClick={handleDeleteProduct} />
        </Tooltip>
      </Box>
    </Paper>
  )
}

export default ProductItem
