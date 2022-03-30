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

export { GET_USUARIOS };