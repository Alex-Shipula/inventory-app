import React, { Suspense, useEffect } from 'react'

import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import { Provider } from 'react-redux'
import theme from './theme'
import Routes from './routes'
import ErrorBoundary from './pages/ErrorBoundary'
import AppLoading from './components/AppLoading'
import { store } from './store'

function App () {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window?.addEventListener('load', () => {
        navigator?.serviceWorker?.register('./service-worker.js')
          .then(registration => {
            console.log('Service Worker зарегистрирован:', registration)
          })
          .catch(error => {
            console.error('Ошибка при регистрации Service Worker:', error)
          })
      })
    }
  }, [])

  return (
    <>
      <CssBaseline />
      <ErrorBoundary name="App">
        <ThemeProvider theme={theme}>
          <Suspense fallback={<AppLoading />}>
            <Provider store={store}>
              <Routes />
            </Provider>
          </Suspense>
        </ThemeProvider>
      </ErrorBoundary>
    </>
  )
}

export default App
