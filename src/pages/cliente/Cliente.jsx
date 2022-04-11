import { useQuery } from '@apollo/client';
import { GET_CLIENTES } from '../../graphql/clientes/queries';
import { useEffect, Fragment } from 'react';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { ButtonLoading } from "../../components/ButtonLoading"



const Clientes = () => {
  const { loading, error, data } = useQuery(GET_CLIENTES);

  useEffect(() => {
    console.log("data servidor", data)
  }, [data]);

  useEffect(() => {
    if (error) {
      toast.error("Error Consultando Clientes");
    } 
  }, [error]);

  if (loading) return <div>Cargando...</div>;

  return (
    <div>
    

     DATOS CLIENTES:
      <table className='tabla'>
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
        { data && 
          data.Clientes.map((u) => {
            return(
              <tr key={u._id}>
                <td>{u.nombre}</td>
                <td>{u.apellido}</td>
                <td>{u.email}</td>
                <td>{u.identificacion}</td>
                <td>{u.telefono}</td>
                <td>{u.departamento}</td>
                <td>{u.ciudad}</td>
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

export default Clientes;