import { gql } from '@apollo/client';

const GET_USUARIOS = gql`
    query QueryUsuarios {
    Usuarios {
     _id
     nombre
     email
     identificacion
     apellido
     telefono
     rol
     estado
  }
}
`;

const GET_USUARIO = gql `
query QueryUsuario($_id: String!) {
  Usuario( _id: $_id ){
    _id
    nombre
    apellido
    email
    identificacion
    telefono
    rol
    estado
  }
}
`;

const GET_CLIENTES = gql `
query Clientes {
  Clientes {
    _id
    apellido
    nombre
    email
    identificacion
    telefono
    rol
  }
}
`;
export { GET_USUARIOS, GET_USUARIO, GET_CLIENTES  };