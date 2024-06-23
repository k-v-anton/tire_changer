import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'

import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import { App } from './components/App'
import { routerPages } from './router/routerPages'
import { store } from './store/store'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App>
        <RouterProvider router={routerPages} />
      </App>
    </Provider>
  </React.StrictMode>
)
