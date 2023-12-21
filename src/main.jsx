import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CartProvider } from './context/cart.jsx'
import { Provider } from 'react-redux'
import store from './store.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </CartProvider>
  </React.StrictMode>,
)


