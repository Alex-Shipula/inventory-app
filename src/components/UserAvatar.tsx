import React from 'react'
import { Avatar } from '@mui/material'

interface IUserAvatar {
  url: string
  size: number
}

const UserAvatar = ({ url, size }: IUserAvatar) => {
  const width = size || 36
  return <Avatar src={url} sx={{ width: width, height: width }} />
}

export default UserAvatar
