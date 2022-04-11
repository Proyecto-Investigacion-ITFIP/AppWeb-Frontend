import { gql } from '@apollo/client';

const GET_CLIENTES= gql`
query QueryClientes {
    Clientes {
      _id
      nombre
      apellido
      email
      identificacion
      telefono
      departamento
      ciudad
    }
  }
`;


export { GET_CLIENTES };