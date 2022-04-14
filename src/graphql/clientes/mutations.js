import { gql } from "@apollo/client";

const Crear_Cliete = gql `
mutation CrearCliente(
    $nombre: String!
    $apellido: String!
    $email: String!
    $identificacion: String!
    $telefono: String!
    $departamento: String!
    $ciudad: String! 
    ) {
  crearCliente (
      nombre: $nombre
      apellido: $apellido
      email: $email
      identificacion: $identificacion
      telefono: $telefono
      departamento: $departamento
      ciudad: $ciudad 
      ) {
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

export { Crear_Cliete };