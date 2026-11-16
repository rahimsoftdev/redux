import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
// import ContextProvider from './context/ContextProvider.jsx'
import store from './app/store.js'
import ThemeContextProvider from './contexts/ThemeContextProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeContextProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeContextProvider>
  </StrictMode>,
)
