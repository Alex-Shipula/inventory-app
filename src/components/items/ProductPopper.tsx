import React from 'react'

import { Box, Popper, Tooltip, useTheme } from '@mui/material'
import HighlightOffIcon from '@mui/icons-material/HighlightOff'
import ControlPointIcon from '@mui/icons-material/ControlPoint'
import { IOrder } from 'src/types'
import ProductMiniItem from './ProductMiniItem'

interface IProductPopper {
  anchorEl: null | HTMLElement
  openPopper: boolean
  handleClosePopper: () => void
  order: IOrder | null
}

const ProductPopper = ({ anchorEl, openPopper, handleClosePopper, order }: IProductPopper
) => {
  const theme = useTheme()

  return (
    <Popper
      open={openPopper}
      anchorEl={anchorEl}
      placement={'right-start'}
      popperOptions={{
        modifiers: [
          {
            name: 'offset',
            options: {
              offset: [0, 25]
            }
          }
        ]
      }}
      sx={{
        minWidth: '300px',
        minHeight: '300px',
        borderRadius: '10px',
        backgroundColor: theme.palette.primary.light,
        padding: '20px'
      }}
    >
      <HighlightOffIcon sx={{
        position: 'absolute',
        top: '-14px',
        right: '-10px',
        cursor: 'pointer',
        width: '30px',
        height: '30px',
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.primary.light,
        borderRadius: '50%'
      }}
      onClick={handleClosePopper} />

      <Box
        display={'flex'}
        flexDirection={'column'}
        gap={'10px'}
        sx={{
          maxWidth: '800px',
          maxHeight: '500px',
          backgroundColor: theme.palette.primary.light,
          overflowY: 'auto',
          overflowX: 'hidden',
          '::-webkit-scrollbar': {
            width: '4px'
          },
          '::-webkit-scrollbar-track': {
            background: '#F1F1F1'
          },
          '::-webkit-scrollbar-thumb': {
            background: '#D4DCE0',
            borderRadius: '16px'
          }
        }}
      >
        <Tooltip title={order?.title} arrow>
          <Box
            sx={{
              minHeight: '50px',
              fontSize: '20px',
              fontWeight: 800,
              color: theme.palette.text.primary,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap'
            }}
          >{order?.title}</Box>
        </Tooltip>
        <Box
          display={'flex'}
          alignItems={'center'}
          gap={'8px'}
          sx={{
            fontSize: '11px',
            fontWeight: 400,
            color: theme.palette.text.secondary,
            cursor: 'pointer',
            marginLeft: '20px'
          }}
        >
          <ControlPointIcon sx={{ color: theme.palette.text.secondary }} />
          Добавить продукт
        </Box>
        {order?.products?.length && order?.products?.length > 0 && order?.products.map((product, index) => (
          <ProductMiniItem key={index} item={product} />
        ))}
      </Box>
    </Popper>
  )
}

export default ProductPopper
