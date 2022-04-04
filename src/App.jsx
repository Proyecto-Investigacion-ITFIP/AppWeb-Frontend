import { Routes, Route, BrowserRouter } from "react-router-dom";
import Index from './pages/index';
import Forms from './pages/forms';
import Product from './pages/product'
import Dashboard from "./pages/dashboard";
import SidebarLayout from './layouts/sidebarLayout';
import IndexUsuarios from './pages/usuarios/Usuarios'
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context';
import EditarUsuarios from "./pages/usuarios/editarUsuarios";
import IniciarSesion from "./pages/autentificacion/iniciar-sesion";
import Registro from "./pages/autentificacion/registro";
import { AuthContext } from "./context/authContext";
import { useState } from "react";

const httpLink = createHttpLink({
  // uri:'https://maestro-producto-back.herokuapp.com/graphql'
  uri: 'http://localhost:4000/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = JSON.parse(localStorage.getItem('token'));
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
}); 

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
});

function App() {  

  //crear estado global Recibir token
  const [authToken, setAuthToken] = useState('');

  const setToken = (token) => {
    setAuthToken(token)
    if(token){
      // convertir el token en Strin: JSON.stringify
      localStorage.setItem('token', JSON.stringify(token));
    }
  };

  return (
    <ApolloProvider client={client}>
      <AuthContext.Provider value={{ authToken, setAuthToken, setToken }}>
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
      </AuthContext.Provider>
    </ApolloProvider>
  );
}

export default App  