import { gql } from '@apollo/client';

const GET_PRODUCTOS = gql `
query QueryProductos {
  Productos {
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

const GET_PRODUCTO = gql `
query Producto($_id: String!) {
  Producto(_id: $_id) {
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

export { GET_PRODUCTOS, GET_PRODUCTO };