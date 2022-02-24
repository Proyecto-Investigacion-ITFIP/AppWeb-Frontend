import { Routes, Route, BrowserRouter } from "react-router-dom";
import Index from './pages/index';
import Forms from './pages/forms';
import Product from './pages/product'
import Dashboard from "./pages/dashboard";
import SidebarLayout from './layouts/sidebarLayout';


function App() {  
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
        </Routes>
        <Routes>
          <Route path="/inicio" element={<SidebarLayout />}>
          <Route path="inicio/dashboard" element={<Dashboard />} />
          <Route path="inicio/messeges" element={<Forms />} />
          <Route path="inicio/segurity" element={<Product />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App