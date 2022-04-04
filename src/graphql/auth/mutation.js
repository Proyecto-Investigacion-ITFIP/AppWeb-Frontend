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

const LOGIN = gql`
  mutation Login(
    $email: String!,
    $contrasena: String!
  ) {
  login(
    email: $email, 
    contrasena: $contrasena
    ) {
    token
    error
  }
}
`;


const VALIDAR_TOKEN = gql`
mutation ValidarToken {
  validarToken {
    token
    error
  }
}
`;


export { REGISTRO, LOGIN, VALIDAR_TOKEN };