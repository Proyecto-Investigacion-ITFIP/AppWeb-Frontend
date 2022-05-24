import { useQuery, useMutation } from '@apollo/client';
import { GET_USUARIOS } from '../../graphql/usuarios/queries';
import { ELIMINAR_USUARIO } from '../../graphql/usuarios/mutations'
import { useEffect, Fragment } from 'react';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { Enum_Rol, Enum_EstadoUsuario } from '../../utils/enums';
import PrivateRoute from '../../components/PrivateRoute';
import Tooltip from '@mui/material/Tooltip';

const IndexUsuarios = () => {
  const { loading, error, data, refetch } = useQuery(GET_USUARIOS);
  const [
    EliminarUsuario,
    { data: dataMutation, loading: loadingMutation, error: errorMutation },
  ] = useMutation(ELIMINAR_USUARIO);

  useEffect(() => {
    if (dataMutation) {
      toast.success("Usuario eliminado satisfactoriamente");
    }
  }, [dataMutation]);

  const ejecutaEliminar = (iden) => {
    EliminarUsuario({
      variables: { _id: iden },
    });
    refetch();
  };

  useEffect(() => {
    if (error) {
      toast.error("Error Consultando Usuarios");
    }
  }, [error]);

  if (loading) return <div>Cargando...</div>;

  return (
    <PrivateRoute roleList={["ADMINISTRADOR"]}>
      <div>
        DATOS USUAIROS:
        <table className="tabla">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Email</th>
              <th>Identificacion</th>
              <th>telefono</th>
              <th>Rol</th>
              <th>Estado</th>
              <th>Accion</th>
            </tr>
          </thead>
          <tbody>
            {data && data.Usuarios ? (
              <Fragment>
                {data.Usuarios.map((u) => (
                  <tr key={u._id}>
                    <td>{u.nombre}</td>
                    <td>{u.apellido}</td>
                    <td>{u.email}</td>
                    <td>{u.identificacion}</td>
                    <td>{u.telefono}</td>
                    <td>{Enum_Rol[u.rol]}</td>
                    <td>{Enum_EstadoUsuario[u.estado]}</td>
                    <td>
                    <Tooltip title='Editar Usuario' arrow placement='right'>
                      <Link to={`/usuarios/editar/${u._id}`}>
                        <i className="fas fa-edit text-sky-900 hover:text-sky-400 cursor-pointer p-1" />
                      </Link>
                    </Tooltip>
                    <Tooltip title='Eliminar Usuario' arrow placement='right'>
                      <i
                        className="fas fa-trash-alt text-red-900 hover:text-red-400 cursor-pointer p-1"
                        onClick={() => ejecutaEliminar(u._id)}
                      />
                    </Tooltip>
                    </td>
                  </tr>
                ))}
              </Fragment>
            ) : (
              <div>No AUTORIZADO</div>
            )}
          </tbody>
        </table>
      </div>
    </PrivateRoute>
  );
};

export default IndexUsuarios;