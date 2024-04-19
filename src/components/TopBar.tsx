import React from 'react'
import { Box } from '@mui/material'

const TopBar = () => {
  return (
    <Box
      sx={{
        width: '100vw',
        height: '100px',
        backgroundColor: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: '24px 24px',
        boxShadow: '2px 18px 25px rgba(4, 2, 0.6, 0.1)'
      }}
    >
      <Box>Empty</Box>
      <Box>Empty</Box>
      <Box>Empty</Box>
    </Box>
  )
}

export default TopBar
