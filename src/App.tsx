import React, { Suspense } from 'react'

import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import theme from './theme'
import Routes from './routes'
import ErrorBoundary from './pages/ErrorBoundary'
import AppLoading from './components/AppLoading'

function App () {
  return (
    <>
      <CssBaseline />
      <ErrorBoundary name="App">
        <ThemeProvider theme={theme}>
          <Suspense fallback={<AppLoading />}>
            <Routes />
          </Suspense>
        </ThemeProvider>
      </ErrorBoundary>
    </>
  )
}

export default App
