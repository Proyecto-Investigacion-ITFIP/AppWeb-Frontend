import Dashboard from './pages/dashboard';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Index from './pages/index';
import Forms from './pages/forms';
import SidebarLayout from './layouts/sidebarLayout';


function App() {  
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
        </Routes>
        <Routes>
          <Route path="/dashboard" element={<SidebarLayout />}>
          <Route path="pagina1" element={<Forms />} />

          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App