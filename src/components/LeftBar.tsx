import React from 'react'
import { Box } from '@mui/material'

const LeftBar = () => {
  return (
    <Box
      sx={{
        width: '250px',
        height: '100vh',
        backgroundColor: '#fff',
        padding: '50px 24px',
        boxShadow: '2px 18px 25px rgba(4, 2, 0.6, 0.3)'
      }}
    >
      <Box>Logo</Box>
      <Box>Menu</Box>
    </Box>
  )
}

export default LeftBar
