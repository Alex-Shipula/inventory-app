import React from 'react'
import { CircularProgress, Stack } from '@mui/material'

const AppLoading = () => {
  return (
    <Stack
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      }}
      justifyContent="center"
      alignItems="center"
    >
      <CircularProgress color="primary" style={{ height: '100px', width: '100px' }}/>
    </Stack>
  )
}

export default AppLoading
