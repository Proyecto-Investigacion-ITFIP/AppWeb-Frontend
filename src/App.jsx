import { useState } from 'react'
import Banner from './pages/banner';
import Banner2 from './pages/banner2';
import { Routes, Route, Link } from "react-router-dom";
import logo from './logo.svg'
import './App.css'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.jsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
        <p className='text-3xl font-bold underline text-black'>comprobando tailwind</p>
      </header>
      <div className='text-3x1 text-sky-300 bg-slate-900'>carlos</div>
      <p className="text-gray-700"><Link to='/banner'> Ruta 1</Link></p>
      <p className="text-sky-800"><Link to='/banner2'> Ruta 2</Link></p>
    <Routes>
      <Route path='/banner' element={<Banner />} />
      <Route path='/banner2' element={<Banner2/>} />
    </Routes>
    </div>
  )
}

export default App
