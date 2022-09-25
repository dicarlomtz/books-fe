import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import { BooksApp } from './BooksApp'
import { store } from './store'

ReactDOM.createRoot(document.querySelector('#root')).render(
  // <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <BooksApp />
      </BrowserRouter>
    </Provider>
  // </React.StrictMode>
)
