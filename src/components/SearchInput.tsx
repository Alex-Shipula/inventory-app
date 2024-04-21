import React from 'react'
import TextField from './TextField'
import { Box } from '@mui/material'

const SearchInput = () => {
  return (
    <Box
      width={'400px'}
    >
      <TextField
        fullWidth
        size="small"
        variant="outlined"
        placeholder="Поиск"
      />
    </Box>
  )
}

export default SearchInput
