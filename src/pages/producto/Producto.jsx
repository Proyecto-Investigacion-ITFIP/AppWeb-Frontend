import { useQuery, useMutation } from "@apollo/client";
import { GET_PRODUCTOS } from "../../graphql/producto/queries";
import { Eliminar_Producto } from "../../graphql/producto/mutations";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Tooltip from '@mui/material/Tooltip';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const Productos = () => {
  const { loading, error, data, refetch } = useQuery(GET_PRODUCTOS);
  const [
    EliminarProducto,
    {
      data: dataMutationEliminar,
      loading: loadingMutationEliminar,
      error: errorMutationEliminar,
    }, 
  ] = useMutation(Eliminar_Producto);

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (dataMutationEliminar) {
      toast.success("Producto eliminado satisfactoriamente");
    }
  }, [dataMutationEliminar]);

  const ejecutaEliminar = (iden) => {
    EliminarProducto({ variables: { nombreProducto: iden } 
    });
    refetch();
    handleClose();
  };

  useEffect(() => {
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
            <th>Accion</th>
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
                  <Tooltip title='Editar Producto' arrow placement='right'> 
                    <Link to={`/productos/editar/${u._id}`}>
                      <i className="fas fa-edit text-sky-900 hover:text-sky-400 cursor-pointer p-1" />
                    </Link>
                  </Tooltip>
                  <Tooltip title='Eliminar Producto' arrow placement='right'> 
                    <i
                      onClick={handleClickOpen}
                      className="fas fa-trash-alt text-red-900 hover:text-red-400 cursor-pointer p-1"
                    />
                  </Tooltip>
                  <Dialog open={open} onClose={handleClose}>
                  <div className="p-2 flex flex-col">
                    <DialogTitle id="alert-dialog-title">
                      {"¿Está seguro de querer eliminar este Producto?"}
                    </DialogTitle>
                    <DialogContent>
                      <DialogContentText id="alert-dialog-description">
                      Eliminaras por completo el registro de este Producto
                      en la plataforma Maestro Producto y no se volvera a
                      ostrar más.
                      </DialogContentText>
                    </DialogContent>
                    <div className="flex w-full items-center justify-center my-4">
                      <button
                        onClick={() => ejecutaEliminar(u.nombreProducto)}
                        className="mx-2 px-4 py-2 bg-green-500 text-white hover:bg-green-700 rounded-md shadow-md"
                      >
                        Sí
                      </button>
                      <button
                        onClick={handleClose}
                        className="mx-2 px-4 py-2 bg-red-500 text-white hover:bg-red-700 rounded-md shadow-md"
                      >
                        No
                      </button>
                    </div>
                  </div>
                </Dialog>
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
