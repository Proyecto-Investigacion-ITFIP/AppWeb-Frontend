import { gql } from "@apollo/client";

const Crear_Producto = gql `
mutation CrearProducto(
    $nombreProducto: String!
    $descripcion: String!
    $marca: String!
    $modelo: String!
    $precioUnidad: Float!
    $cantidadTotalExistente: Int!
    $estadoProducto: Enum_EstadoProducto
    ) {
  crearProducto (
      nombreProducto: $nombreProducto
      descripcion: $descripcion 
      marca: $marca
      modelo: $modelo
      precioUnidad: $precioUnidad
      cantidadTotalExistente: $cantidadTotalExistente
      estadoProducto: $estadoProducto
      ) {
    _id
    nombreProducto
    descripcion
    marca
    modelo
    precioUnidad
    cantidadTotalExistente
    estadoProducto
  }
}
`;

const Editar_Producto = gql `
mutation EditarProducto(
    $id: String! 
    $nombreProducto: String! 
    $descripcion: String!
    $marca: String!
    $modelo: String!
    $precioUnidad: Float!
    $cantidadTotalExistente: Int!
    $estadoProducto: Enum_EstadoProducto
    ) {
    editarProducto(
        _id: $id
        nombreProducto: $nombreProducto 
        descripcion: $descripcion
        marca: $marca
        modelo: $modelo 
        precioUnidad: $precioUnidad
        cantidadTotalExistente: $cantidadTotalExistente
        estadoProducto: $estadoProducto
        ) {
      _id
      nombreProducto
      descripcion
      marca
      modelo
      precioUnidad
      cantidadTotalExistente
      estadoProducto
    }
  }
`;

export { Crear_Producto, Editar_Producto }