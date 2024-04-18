import React from 'react'

import { Outlet } from 'react-router-dom'
import Box from '@mui/material/Box'

const zoom = 0.8

export default function Layout () {
  return (
    <Box
      display="flex"
      sx={{
        transform: `scale(${zoom})`,
        transformOrigin: 'left top',
        width: `calc(100% / ${zoom})`,
        height: `calc(100% / ${zoom})`
      }}
    >
      <Outlet />
    </Box>
  )
}
