import { Routes, Route, BrowserRouter } from "react-router-dom";
import Index from './pages/index';
import Forms from './pages/forms';
import Product from './pages/product'
import Dashboard from "./pages/dashboard";
import SidebarLayout from './layouts/sidebarLayout';
import IndexUsuarios from './pages/usuarios/Usuarios'
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'
import EditarUsuarios from "./pages/usuarios/editarUsuarios";
import IniciarSesion from "./pages/autentificacion/iniciar-sesion";
import Registro from "./pages/autentificacion/registro";

// const httpLink = createHttpLink({
//   uri:'https://maestro-producto-back.herokuapp.com/graphql'
// });

const client = new ApolloClient({
    uri: 'https://maestro-producto-back.herokuapp.com/graphql',
    cache: new InMemoryCache(),
});

function App() {  
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
            <Route path="/auth/index" element={<Index />} />
            <Route path="/auth/inicar-sesion" element={<IniciarSesion />} />
            <Route path="/auth/registro" element={<Registro />} />
        </Routes>
        <Routes>
          <Route path="/" element={<SidebarLayout />}>
            <Route path="" element={<Dashboard />} />
            <Route path="/usuarios" element={<IndexUsuarios />} />
            <Route path="/usuarios/editar/:_id" element={<EditarUsuarios />} />
            <Route path="/messeges" element={<Forms />} />
            <Route path="/segurity" element={<Product />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App  