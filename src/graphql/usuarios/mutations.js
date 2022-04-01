import { gql } from "@apollo/client/core";

const Editar_Usuario = gql `
mutation EditarUsuario (
    $_id: String!
    $nombre: String!
    $apellido: String!
    $email: String!
    $identificacion: String!
    $telefono: String!
    $estado: Enum_EstadoUsuario!
    ) {
    editarUsuario (
        _id: $_id
        nombre: $nombre
        apellido: $apellido
        email: $email
        identificacion: $identificacion
        telefono: $telefono
        estado: $estado
    ) {
    _id
    nombre
    apellido
    email
    telefono    
    identificacion
    rol
    estado
  }
}
`;

export { Editar_Usuario };