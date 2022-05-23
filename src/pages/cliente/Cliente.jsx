import { useQuery, useMutation} from '@apollo/client';
import { GET_CLIENTES } from '../../graphql/clientes/queries';
import { ELIMNAR_CLIENTE } from '../../graphql/clientes/mutations';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import ReactLoading from 'react-loading';

const Example = ({ type, color }) => (
  <ReactLoading type={type} color={color} height={"20%"} width={"20%"} />
);

const Clientes = () => {
  const { loading, error, data, refetch } = useQuery(GET_CLIENTES);
  const [
    EliminarUsuario,
    { data: dataMutation, loading: loadingMutation, error: errorMutation },
  ] = useMutation(ELIMNAR_CLIENTE);

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
  };

  useEffect(() => {
    // console.log("data servidor", data)
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
            <th>telefono</th>
            <th>departamento</th>
            <th>ciudad</th>
            <th>editar</th>
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
                    <Link to={`/clientes/editar/${u._id}`}>
                      <i className="fas fa-edit text-sky-900 hover:text-sky-400 cursor-pointer p-1" />
                    </Link>
                    <i
                      className="fas fa-trash-alt text-red-900 hover:text-red-400 cursor-pointer p-1"
                      onClick={() => ejecutaEliminar(u._id)}
                    />
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