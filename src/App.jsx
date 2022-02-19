import Banner from './pages/banner';
import Banner2 from './pages/banner2';
import MyFirstComponent from './components/MyFirstComponent';
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import './App.css'
import Index from './pages/Index';



function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/banner2" element={<Banner2 />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App
