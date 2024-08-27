import React from 'react'
import ReactDOM from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './LanguageToggle/store/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Auth0Provider
      domain="dev-hpxkutuqp103h0ku.us.auth0.com"
      clientId="y2THyjvEWVjI1hn8CgrO1iQY7cHqAjuy"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <App />
    </Auth0Provider>
  </Provider>,
)


