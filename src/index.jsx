import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

import Dashboard from './components/Dashboard'
import { AppThemeProvider } from './components/ui'

import store from './store'
import { Provider } from 'react-redux'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppThemeProvider>
        <Dashboard />
      </AppThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
