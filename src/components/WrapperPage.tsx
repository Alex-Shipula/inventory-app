import React from 'react'
import { Box } from '@mui/material'

const WrapperPage = ({ children, content }: { children: React.ReactNode, content?: string }) => {
  const isMobile = window.innerWidth < 600

  return (
    <Box
      display={'flex'}
      justifyContent={content ?? 'center'}
      alignItems={'center'}
      width={'100vw'}
      minWidth={'max-content'}
      height={'100vh'}
      padding={isMobile ? '10px 15px' : '50px 100px'}
    >
      {children}
    </Box>

  )
}

export default WrapperPage
