import React from 'react'
import { Box, Paper, useTheme } from '@mui/material'
import MonitorIcon from '@mui/icons-material/Monitor'
import { IProduct } from 'src/types'
import TextItem from '../TextItem'

const ProductItem = ({ item }: { item: IProduct }) => {
  const theme = useTheme()
  return (
    <Paper
      sx={{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: theme.palette.primary.light,
        cursor: 'pointer',
        borderRadius: '4px',
        width: '100%',
        height: '60px'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '12px 24px',
          gap: '24px'
        }}
      >
        <Box
          sx={{
            borderRadius: '50%',
            backgroundColor: item?.type === 'free' ? theme.palette.text.secondary : theme.palette.text.primary,
            width: '12px',
            height: '12px'
          }}
        />
        <MonitorIcon sx={{ color: theme.palette.text.primary }} />
        <Box>
          <TextItem text={item?.title} borderBottom/>
          <Box></Box>
        </Box>
      </Box>
    </Paper>
  )
}

export default ProductItem
