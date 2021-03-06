import { gql } from '@apollo/client';

const GET_CLIENTES = gql`
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

const GET_CLIENTE = gql `
query Cliente($_id: String!) {
  Cliente(_id: $_id) {
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

export { GET_CLIENTES, GET_CLIENTE };