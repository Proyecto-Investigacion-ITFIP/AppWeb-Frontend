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

export { GET_USUARIOS, GET_USUARIO  };