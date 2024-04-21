import React from 'react'
import { Box, useTheme } from '@mui/material'
import { ReactComponent as Logo } from '../assets/logo-inventory.svg'
import { useNavigate } from 'react-router-dom'
import SearchInput from './SearchInput'
import Time from './Time'

const TopBar = () => {
  const theme = useTheme()
  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate('/')
  }

  return (
    <Box
      sx={{
        width: '100vw',
        height: '100px',
        backgroundColor: theme.palette.primary.light,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: '24px 24px',
        boxShadow: '2px 18px 25px rgba(4, 2, 0.6, 0.1)'
      }}
    >
      <Box
        display={'flex'}
        alignItems={'center'}
        onClick={handleNavigate}
        sx={{
          cursor: 'pointer'
        }}
      >
        <Logo />
        <Box
          sx={{
            fontSize: '32px',
            fontStyle: 'normal',
            fontWeight: 'bold',
            lineHeight: '40px',
            marginLeft: '24px',
            color: theme.palette.text.secondary
          }}
        >Inventory</Box>
      </Box>
      <SearchInput />
      <Time />
    </Box>
  )
}

export default TopBar
