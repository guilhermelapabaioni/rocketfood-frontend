import React from 'react'
import ReactDOM from 'react-dom/client'

import GlobalStyle from './styles/global'
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'

import { AuthProvider } from './auth/auth'
import { FoodsProvider } from './auth/foodFunctions'
import { Routes } from './routes/index'
import Toast from './components/Toast'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Toast />
      <AuthProvider>
        <FoodsProvider>
          <Routes />
        </FoodsProvider>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
)
