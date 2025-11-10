import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './store'
import { setupCsrfCookie } from './store/baseApi'
import { authApi } from './store/services/authApi'
import './index.css'
import App from './App.jsx'
import { MenuProvider } from './components/UserAccount/Dashboard/context/MenuContext.jsx'

// Setup CSRF cookie and hydrate user on app init
async function initApp() {
  try {
    // First, get CSRF cookie
    await setupCsrfCookie();
    
    // Then, try to hydrate user if session exists
    // This will be handled by useMeQuery in components, but we can prefetch here
    store.dispatch(authApi.endpoints.me.initiate());
  } catch (error) {
    console.error('Failed to initialize app:', error);
  }
  
  // Render app regardless of auth status
  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <Provider store={store}>
        <MenuProvider>
          <App />
        </MenuProvider>
      </Provider>
    </StrictMode>,
  );
}

initApp();