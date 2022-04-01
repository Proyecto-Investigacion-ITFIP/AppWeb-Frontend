import { useQuery } from '@apollo/client';
import { GET_USUARIOS } from '../../graphql/usuarios/queries';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { Enum_Rol, Enum_EstadoUsuario } from '../../utils/enums';

const IndexUsuarios = () => {
const { loading, error, data } = useQuery( GET_USUARIOS );
  
  // useEffect(() => {
  //   console.log("data servidor", data)
  // }, [data]);

  useEffect(() =>{
    if (error){
      toast.error("Error Consultando Usuarios")
    }
  },[error])

  if(loading) return <div>Cargando...</div>

  return (
    <div>
     DATOS USUAIROS:
      <table className='tabla'>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Email</th>
            <th>Identificacion</th>
            <th>telefono</th>
            <th>Rol</th>
            <th>Estado</th>
            <th>Editar</th>
          </tr>
        </thead>
        <tbody>
        { data && 
          data.Usuarios.map((u) => {
            return(
              <tr key={u._id}>
                <td>{u.nombre}</td>
                <td>{u.apellido}</td>
                <td>{u.email}</td>
                <td>{u.identificacion}</td>
                <td>{u.telefono}</td>
                <td>{Enum_Rol[u.rol]}</td>
                <td>{Enum_EstadoUsuario[u.estado]}</td>
                <td>
                  <Link to={`/usuarios/editar/${u._id}`}>
                    <i className="fas fa-edit text-sky-900 hover:text-sky-400 cursor-pointer" />
                  </Link>
                </td>
              </tr>
            );
          })
        }
        </tbody>
      </table>
    </div>
  ); 
};

export default IndexUsuarios;