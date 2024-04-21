import React from 'react'
import { Box, useTheme } from '@mui/material'

const TextItem = ({ text, size = 16, weight = 600, color, borderBottom = false }:
{ text: string, size?: number, weight?: number, color?: string, borderBottom?: boolean }) => {
  const theme = useTheme()
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        fontSize: `${size}px`,
        fontWeight: weight,
        color: color ?? theme.palette.text.disabled,
        borderBottom: borderBottom ? `2.5px solid ${theme.palette.text.disabled}` : 'none'
      }}
    >
      {text}
    </Box>
  )
}

export default TextItem
