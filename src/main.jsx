import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import MyFirstComponent from './components/MyFirstComponent';


ReactDOM.render(
  <BrowserRouter>
    <App />
    <MyFirstComponent texto='con propeyts' num={1}/>
    <MyFirstComponent texto='segundo' num={2}/>
    <MyFirstComponent texto='tercero' num={3} />
  </BrowserRouter>,
  document.getElementById('root')
)
  