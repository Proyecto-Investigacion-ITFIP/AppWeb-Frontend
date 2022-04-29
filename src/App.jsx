import { Routes, Route, BrowserRouter } from "react-router-dom";
import Index from './pages/index';
import Product from './pages/product'
import Dashboard from "./pages/dashboard";
import SidebarLayout from './layouts/sidebarLayout';
import IndexUsuarios from './pages/usuarios/usuarios'
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context';
import EditarUsuarios from "./pages/usuarios/editarUsuarios";
import IniciarSesion from "./pages/autentificacion/iniciar-sesion";
import Registro from "./pages/autentificacion/registro";
import { AuthContext } from "./context/authContext";
import { UserContext } from "./context/userContext";
import { useState, useEffect } from "react";
import jwt_decode  from "jwt-decode";
import Clientes from "./pages/cliente/cliente";
import CrearCliente from "./pages/cliente/crearCliente"
import EditarClientes from "./pages/cliente/editarCliente"
import PostRegistro from "./pages/postRegistro";


const httpLink = createHttpLink({
  // uri:'https://maestro-producto-back.herokuapp.com/graphql'
  uri: 'http://localhost:4000/graphql',
});

//cada vez que Graphql haga un request al back:
// guardar el token en el headers 
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

  const [usuarioData, setUsuarioData] = useState({});
  //crear estado global Recibir token
  const [authToken, setAuthToken] = useState('');

  const setToken = (token) => {
    setAuthToken(token)
    if(token){
      // convertir el token en Strin: JSON.stringify
      localStorage.setItem('token', JSON.stringify(token));
    }else{
      localStorage.removeItem('token')
    }
  };

  useEffect(() => {
    console.log('token effect', authToken );
    // console.log('token Decoded', jwt_decode(authToken));
    if(authToken){
      const decoded = jwt_decode(authToken);
      console.log(decoded);
      setUsuarioData({
        _id: decoded._id,
        nombre: decoded.nombre,
        apellido: decoded.apellido,
        email: decoded.email,
        identificacion: decoded.identificacion,
        telefono: decoded.telefono,
        rol: decoded.rol
      }); 
    } 
  }, [authToken]);

  return (
    <ApolloProvider client={client}>
      <AuthContext.Provider value={{ authToken, setAuthToken, setToken }}>
        <UserContext.Provider value={{ usuarioData, setUsuarioData }}>
          <BrowserRouter>
            <Routes>
              <Route path="/auth/index" element={<Index />} />
              <Route path="/auth/iniciar-sesion" element={<IniciarSesion />} />
              <Route path="/auth/registro" element={<Registro />} />
              <Route path="/registro-completado" element={<PostRegistro /> } />
            </Routes>
            <Routes>
              <Route path="/" element={<SidebarLayout />}>
                <Route path="" element={<Dashboard />} />
                <Route path="/usuarios" element={<IndexUsuarios />} />
                <Route path="/usuarios/editar/:_id" element={<EditarUsuarios />} />
                <Route path="/clientes" element={<Clientes />} />
                <Route path="/clientes/editar/:_id" element={<EditarClientes />} />
                <Route path="/nuevo-cliente" element={<CrearCliente />} />
                <Route path="/segurity" element={<Product />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </UserContext.Provider>
      </AuthContext.Provider>
    </ApolloProvider>
  );
}

export default App  