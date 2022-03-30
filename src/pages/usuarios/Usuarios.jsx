import { useQuery } from '@apollo/client';
import { GET_USUARIOS } from '../../graphql/usuarios/queries';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

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

  if(loading) return <di>Cargando...</di>

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
                <td>{u.rol}</td>
                <td>{u.estado}</td>
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