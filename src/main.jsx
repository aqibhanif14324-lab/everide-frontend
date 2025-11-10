import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './store'
import { setupCsrfCookie } from './store/baseApi'
import './index.css'
import App from './App.jsx'
import { MenuProvider } from './components/UserAccount/Dashboard/context/MenuContext.jsx'

// Setup CSRF cookie on app init
setupCsrfCookie().then(() => {
  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <Provider store={store}>
        <MenuProvider>
          <App />
        </MenuProvider>
      </Provider>
    </StrictMode>,
  )
})