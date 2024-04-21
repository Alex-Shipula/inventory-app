import React from 'react'
import { Box, useTheme } from '@mui/material'
import LogoutIcon from '@mui/icons-material/Logout'
import { useLocation } from 'react-router-dom'
import UserAvatar from './UserAvatar'
import LeftBarItem from './LeftBarItem'

const items = ['ПРИХОД', 'ГРУППЫ', 'ПРОДУКТЫ', 'ПОЛЬЗОВАТЕЛИ', 'НАСТРОЙКИ']

const routerList = [
  '/income',
  '/groups',
  '/products',
  '/users',
  '/settings'
]

const LeftBar = () => {
  const theme = useTheme()
  const location = useLocation()
  const userName = localStorage.getItem('name')
  const userFoto = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKJ_tV5j-slciYG1EJIxkca6RJdiuHTa3ZnQ&s'

  const handleLogout = () => {
    localStorage.clear()
    window.location.reload()
  }

  return (
    <Box
      sx={{
        height: '100vh',
        backgroundColor: theme.palette.primary.light,
        padding: '50px 50px',
        boxShadow: '2px 18px 25px rgba(4, 2, 0.6, 0.3)'
      }}
    >
      <Box
        height={'100%'}
        display={'flex'}
        flexDirection={'column'}
        alignItems={'center'}
        justifyContent={'space-between'}
      >
        <Box
          display={'flex'}
          flexDirection={'column'}
          alignItems={'center'}
        >
          <UserAvatar url={userFoto ?? ''} size={100} />
          <Box
            sx={{
              fontSize: '24px',
              fontWeight: 700,
              color: theme.palette.text.primary
            }} >
            {userName}
          </Box>
        </Box>
        <Box
          display={'flex'}
          flexDirection={'column'}
          alignItems={'center'}
          gap={'30px'}
        >
          {items.map((item, index) => {
            return <LeftBarItem
              key={index}
              item={item}
              router={routerList[index]}
              isSelect={location.pathname === routerList[index]} />
          })}
        </Box>
        <LogoutIcon sx={{ color: theme.palette.background.paper, cursor: 'pointer', width: '50px', height: '50px' }}
          onClick={handleLogout} />
      </Box>
    </Box>
  )
}

export default LeftBar
