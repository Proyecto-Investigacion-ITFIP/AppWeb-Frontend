import { gql } from "@apollo/client";

const REGISTRO = gql`
  mutation Registro(
    $nombre: String!
    $apellido: String!
    $email: String!
    $identificacion: String!
    $telefono: String!
    $rol: Enum_Rol!
    $contrasena: String!
  ) {
    registro(
      nombre: $nombre
      apellido: $apellido
      email: $email
      identificacion: $identificacion
      telefono: $telefono
      rol: $rol
      contrasena: $contrasena
    ) {
        token
        error
    }
  }
`;





export { REGISTRO };