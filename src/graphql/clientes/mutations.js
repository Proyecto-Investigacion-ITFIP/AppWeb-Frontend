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

const Editar_Cliete = gql `
mutation editarCliente(
  $_id: String!
  $nombre: String!
  $apellido: String!
  $email: String!
  $identificacion: String!
  $telefono: String!
  $departamento: String!
  $ciudad: String!
  ) {
  editarCliente(
    _id: $_id
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

const ELIMNAR_CLIENTE = gql `
mutation eliminarCliente(
  $_id: String
  $email: String
) {
  eliminarCliente(
    _id: $_id
    email: $email
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

export { Crear_Cliete, Editar_Cliete, ELIMNAR_CLIENTE };