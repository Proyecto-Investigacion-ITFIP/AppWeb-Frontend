import Banner from './pages/banner';
import Dashboard from './pages/dashboard';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Index from './pages/index';


function App() {  
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/banner" element={<Banner />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App