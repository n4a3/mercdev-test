import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import store from './store'

import App from './components/app'
import { MercdevServiceProvider } from './components/mercdev-service-context'
import { MercdevService } from './services'

const mercdevService = new MercdevService()



ReactDOM.render(
  <Provider store={store}>
    <MercdevServiceProvider value={mercdevService}>
      <App />
    </MercdevServiceProvider>
  </Provider>,
  document.getElementById('root')
)