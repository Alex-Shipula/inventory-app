import React, { useEffect, useState } from 'react'
import MuiTextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import useTheme from '@mui/material/styles/useTheme'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type { TextFieldProps as MuiTextFiledProps } from '@mui/material/TextField'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Box, type SxProps, type Theme } from '@mui/material'

type TextFieldMock = Record<string, string | Record<string, string | Record<string, string>>>

export type TextFiledProps = Omit<MuiTextFiledProps, 'sx'> & {
  title?: React.ReactNode
  sx?: {
    root?: SxProps<Theme>
    placeholder?: SxProps<Theme>
    title?: SxProps<Theme>
    textField?: TextFieldMock
  }
  inputHeight?: string
}

export default function TextField ({
  title,
  placeholder,
  value,
  onChange,
  sx,
  inputHeight,
  ...rest
}: TextFiledProps) {
  const theme = useTheme()
  const [fieldValue, setFieldValue] = useState<string>(() => value as string)

  useEffect(() => {
    onChange?.({ target: { value: fieldValue } } as any)
  }, [fieldValue])

  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      sx={sx?.root}>
      <Box
        display={'flex'}
        justifyContent="space-between"
        alignItems={'center'}
      >
        {!!title && (
          <Typography
            variant='body2'
            sx={{
              marginBottom: theme.spacing(1.125),
              ...sx?.title
            }}
            color={theme.palette.text.secondary}
          >
            {title}
          </Typography>
        )}
      </Box>
      <MuiTextField
        placeholder={placeholder ?? 'Enter Text…'}
        value={fieldValue}
        onChange={(e) => {
          setFieldValue(e.target.value)
          return onChange?.(e)
        }}
        sx={{
          '& .MuiInputBase-root': {
            width: '100%',
            height: inputHeight ?? '30px',
            borderRadius: '4px',
            outline: 'none',
            backgroundColor: theme.palette.background.default,
            ...sx?.textField
          },
          '& .MuiOutlinedInput-root:hover': {
            '& > fieldset': {
              borderColor: theme.palette.text.primary
            },
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: theme.palette.text.primary
            }
          },
          '& .Mui-disabled:hover': {
            '& > fieldset': {
              borderColor: theme.palette.text.primary
            }
          },
          '& fieldset': { borderColor: theme.palette.text.primary }
        }}
        {...rest}
      />
    </Box>
  )
}
