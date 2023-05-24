import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { HelmetProvider } from 'react-helmet-async'

import App from './App'
import store from './store/store'

const root = ReactDOM.createRoot(document.getElementById('root'))
const helmetContext = {}
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HelmetProvider context={helmetContext}>
        <App />
      </HelmetProvider>
    </Provider>
  </React.StrictMode>
)
