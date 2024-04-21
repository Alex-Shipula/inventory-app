import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
      light: '#ffffff',
      dark: '#000000'
    },
    secondary: {
      main: '#dc004e'
    },
    text: {
      primary: '#2C3C44',
      secondary: '#86b952'
    },
    background: {
      default: '#f0f3f5',
      paper: '#8bc34a'
    }
  }
})

export default theme
