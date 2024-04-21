import React from 'react'
import { Box } from '@mui/material'

const WrapperPage = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      width={'100%'}
      height={'100%'}
      padding={'50px 100px'}
    >
      {children}
    </Box>

  )
}

export default WrapperPage
