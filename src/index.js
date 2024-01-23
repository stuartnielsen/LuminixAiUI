import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import PageRouter from './pages/PageRouter'
import reportWebVitals from './reportWebVitals'
import { ThemeProvider, createTheme } from '@mui/material'
import { theme } from './env/theme'
import { GoogleOAuthProvider } from '@react-oauth/google'

const basicTheme = createTheme({
  theme
})
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <GoogleOAuthProvider clientId='472575613359-ahbmvors0a7dl3mc94te9pca30rsnil8.apps.googleusercontent.com'>
    <React.StrictMode>
      <ThemeProvider theme={basicTheme}>
        <PageRouter />
      </ThemeProvider>
    </React.StrictMode>
  </GoogleOAuthProvider>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
