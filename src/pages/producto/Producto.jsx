import { useQuery } from "@apollo/client";
import { GET_PRODUCTOS } from "../../graphql/producto/queries";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Productos = () => {
  const { loading, error, data, refetch } = useQuery(GET_PRODUCTOS);
  // const [EliminarProducto, { data: dataMutation, loading: loadingMutation, error: errorMutation }] =
  //     useMutation( ELIMINAR_Producto );

  useEffect(() => { 
    //   console.log("data servidor", data)
    refetch();
  }, [data]);

  useEffect(() => {
    if (error) {
      toast.error("Error Consultando Producto");
    }
  }, [error]);

  if (loading) return <div>Cargando...</div>;

  return (
    <div>
      <div className="flex justify-end mr-9 mt-6">
        <button className="mx-2 my-2 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-3 text-xs">
          <Link to="/nuevo-productos">Registrar nuevo producto</Link>
        </button>
      </div>
      <h3>DATOS PRODUCTOS:</h3>
      <table className="tabla">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Descripcion</th>
            <th>Marca</th>
            <th>Modelo</th>
            <th>Precio Unidad</th>
            <th>Cantidad Existente</th>
            <th>Estado</th>
            <th>editar</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.Productos.map((u) => {
              return (
                <tr key={u._id}>
                  <td>{u.nombreProducto}</td>
                  <td>{u.descripcion}</td>
                  <td>{u.marca}</td>
                  <td>{u.modelo}</td>
                  <td>{u.precioUnidad}</td>
                  <td>{u.cantidadTotalExistente}</td>
                  <td className="text-sky-800">{u.estadoProducto}</td>
                  <td>
                    <Link to={`/clientes/editar/${u._id}`}>
                      <i className="fas fa-edit text-sky-900 hover:text-sky-400 cursor-pointer p-1" />
                    </Link>
                    <Link to={`/clientes/editar/${u._id}`}>
                      <i className="fas fa-trash-alt text-red-900 hover:text-red-400 cursor-pointer p-1" />
                    </Link>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Productos;
