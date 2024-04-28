import React from 'react'
import { Box, Tooltip, useTheme } from '@mui/material'

interface ITextItem {
  text: string
  size?: number
  weight?: number
  color?: string
  borderBottom?: boolean
  isTooltip?: boolean
  width?: number
  maxWidth?: number
}

const TextItem = ({ text, size = 16, weight = 600, color, borderBottom = false, isTooltip = false, width = 0, maxWidth }: ITextItem) => {
  const theme = useTheme()
  return (
    <Tooltip title={isTooltip ? text : ''}>
      <Box
        sx={{
          maxWidth: maxWidth ? `${maxWidth}px` : '500px',
          minWidth: width ? `${width}px` : '100%',
          fontSize: `${size}px`,
          fontWeight: weight,
          color: color ?? theme.palette.text.disabled,
          borderBottom: borderBottom ? `2.5px solid ${theme.palette.text.disabled}` : 'none',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis'
        }}
      >
        {text}
      </Box>
    </Tooltip>
  )
}

export default TextItem
