import React from 'react'
import { Box, Tooltip, useTheme } from '@mui/material'
import MonitorIcon from '@mui/icons-material/Monitor'
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone'
import { IProduct } from 'src/types'
import TextItem from '../TextItem'

const ProductMiniItem = ({ item }: { item: IProduct | null }) => {
  const theme = useTheme()
  return (
    <>
      {item && <Box
        sx={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '12px 24px',
          gap: '5px'
        }}
      >
        <Box
          minWidth={'15px'}
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
        <MonitorIcon sx={{ color: theme.palette.text.primary, width: '30px', height: '30px' }} />
        <Box
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'start'}
          minWidth={'140px'}
        >
          <TextItem text={item?.title} borderBottom isTooltip width={140} size={13}/>
          <TextItem text={`SN-${item?.serialNumber}`} weight={400} size={10} />
        </Box>
        <TextItem text={item?.type === 'free' ? 'Свободен' : 'В ремонте'} width={35}
          color={item?.type === 'free' ? theme.palette.text.secondary : theme.palette.text.primary} weight={500} size={12} />
        <Tooltip title={'Delete'} arrow>
          <DeleteTwoToneIcon sx={{ color: theme.palette.text.primary, cursor: 'pointer' }} />
        </Tooltip>
      </Box>}
    </>
  )
}

export default ProductMiniItem
