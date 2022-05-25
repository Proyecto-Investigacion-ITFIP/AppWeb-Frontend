import { useQuery, useMutation} from '@apollo/client';
import { GET_CLIENTES } from '../../graphql/clientes/queries';
import { ELIMNAR_CLIENTE } from '../../graphql/clientes/mutations';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import ReactLoading from 'react-loading';
import Tooltip  from '@mui/material/Tooltip';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


const Example = ({ type, color }) => (
  <ReactLoading type={type} color={color} height={"20%"} width={"20%"} />
);
  
const Clientes = () => {
  const { loading, error, data, refetch } = useQuery(GET_CLIENTES);
  const [
    EliminarUsuario,
    { data: dataMutation, loading: loadingMutation, error: errorMutation },
  ] = useMutation(ELIMNAR_CLIENTE);

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (dataMutation) {
      toast.success("Cliente eliminado satisfactoriamente");
    }
  }, [dataMutation]);

  const ejecutaEliminar = (iden) => {
    EliminarUsuario({
      variables: { _id: iden },
    });
    refetch();
    handleClose();
  };

  useEffect(() => {
    console.log("data servidor", data)
    refetch();
  }, [data]);

  useEffect(() => {
    if (error) {
      toast.error("Error Consultando Clientes");
    }
  }, [error]);

  if (loading) return <div>Cargando...</div>;

  return (
    <div>
      <div className="flex justify-end mr-9 mt-6">
        <button className="mx-2 my-2 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-3 text-xs">
          <Link to="/nuevo-cliente">Nuevo Cliente</Link>
        </button>
      </div>

      <h3>DATOS CLIENTES:</h3>
      <table className="tabla">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Email</th>
            <th>Identificacion</th>
            <th>Telefono</th>
            <th>Departamento</th>
            <th>Ciudad</th>
            <th>Accion</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.Clientes.map((u) => {
              return (
                <tr key={u._id}>
                  <td>{u.nombre}</td>
                  <td>{u.apellido}</td>
                  <td>{u.email}</td>
                  <td>{u.identificacion}</td>
                  <td>{u.telefono}</td>
                  <td>{u.departamento}</td>
                  <td>{u.ciudad}</td>
                  <td>
                    <Tooltip title="Editar Cliente" arrow placement="right">
                      <Link to={`/clientes/editar/${u._id}`}>
                        <i className="fas fa-edit text-sky-900 hover:text-sky-400 cursor-pointer p-1" />
                      </Link>
                    </Tooltip>
                    <Tooltip title="Eliminar Cliente" arrow placement="right">
                      <i
                        onClick={handleClickOpen}
                        className="fas fa-trash-alt text-red-900 hover:text-red-400 cursor-pointer p-1"
                      />
                    </Tooltip>
                    <Dialog open={open} onClose={handleClose}>
                      <div className="p-2 flex flex-col">
                        <DialogTitle id="alert-dialog-title">
                          {"¿Está seguro de querer eliminar este cliente?"}
                        </DialogTitle>
                        <DialogContent>
                          <DialogContentText id="alert-dialog-description">
                            Eliminaras por completo el registro de este Cliente
                            en la plataforma Maestro Producto y no se volvera a
                            mostrar más.
                          </DialogContentText>
                        </DialogContent>
                        <div className="flex w-full items-center justify-center my-4">
                          <button
                            onClick={() => ejecutaEliminar(u._id)}
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

export default Clientes;