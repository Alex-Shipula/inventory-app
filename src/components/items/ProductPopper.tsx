import React from 'react'

import { Box, Popper, Tooltip, useTheme } from '@mui/material'
import HighlightOffIcon from '@mui/icons-material/HighlightOff'
import ControlPointIcon from '@mui/icons-material/ControlPoint'
import { IOrder, IProduct } from 'src/types'
import ProductMiniItem from './ProductMiniItem'
import CustomizedModal from '../CustomizedModal'
import TextItem from './TextItem'
import MonitorIcon from '@mui/icons-material/Monitor'

interface IProductPopper {
  anchorEl: null | HTMLElement
  openPopper: boolean
  handleClosePopper: () => void
  order: IOrder | null
}

const ProductPopper = ({ anchorEl, openPopper, handleClosePopper, order }: IProductPopper
) => {
  const theme = useTheme()
  const [productItem, setProductItem] = React.useState<IProduct | null>(null)

  const handleClose = () => {
    setProductItem(null)
  }

  const handleDeleteProduct = () => {
    console.log('delete')
    handleClose()
  }

  const addProduct = (product: IProduct) => {
    setProductItem(product)
  }

  return (
    <>
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
            <ProductMiniItem key={index} item={product} addProduct={addProduct}/>
          ))}
        </Box>
      </Popper>
      <CustomizedModal title={'Вы уверены что хотите удалить этот продукт?'} open={!!productItem} handleClose={handleClose}
        action={handleDeleteProduct} maxWidth='690px'>
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
                backgroundColor: productItem?.type === 'free' ? theme.palette.text.secondary : theme.palette.text.primary,
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
            <TextItem text={productItem?.title ?? ''} borderBottom isTooltip width={400} />
            <TextItem text={`SN-${productItem?.serialNumber ?? ''}`} weight={400} size={14} />
          </Box>
        </Box>
      </CustomizedModal>
    </>
  )
}

export default ProductPopper
