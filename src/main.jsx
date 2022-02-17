import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import MyFirstComponent from './components/MyFirstComponent'

ReactDOM.render(
  <React.StrictMode>
    <App />
    <MyFirstComponent />
    <MyFirstComponent />
    <MyFirstComponent />
  </React.StrictMode>,
  document.getElementById('root')
)
