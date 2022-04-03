import { Link } from 'react-router-dom';
import { Enum_Rol } from '../../utils/enums';
import { DropDownRg  } from '../../components/Dropdown'
import { ButtonLoadingRg } from '../../components/ButtonLoading';
import { useFormData } from '../../hooks/useFormData';
import { useMutation } from '@apollo/client';
import { REGISTRO } from '../../graphql/auth/mutation';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';


const Registro = () => {
  const navigate = useNavigate();
  const { form, formData, updateFormData } = useFormData();
  const [ registro, { data: mutationData, loading: mutationLoanding, error: mutationError }, ] = useMutation(REGISTRO);

  const submitForm = (e) => {
    e.preventDefault();
    // console.log('datos', formData)
    registro({ variables: formData });
  };

  useEffect(() => {
    // console.log('data mutation', mutationData)
    if(mutationData){
      if(mutationData.registro.token){
        localStorage.setItem('token', mutationData.registro.token); 
        navigate('/');
      }
    }
  }, [mutationData])
  
  return (
    <div className="bg-sky-900">
      <Link to="/auth/index">
        <i className="fas fa-arrow-left cursor-pointer font-bold text-white text-xl hover:text-gray-300 mt-8 ml-28">
          {" "}
          Regresar
        </i>
      </Link>
      <form className='' onSubmit={ submitForm } onChange={updateFormData} ref={form} >
        <div className="bg-color flex flex-col items-center">
          <section className="flex flex-col border-2  border-gray-100 rounded-3xl p-20 m-8">
            <h4 className="flex justify-center p-2  text-2xl text-gray-100">
              Regístrate
            </h4>
            <label htmlFor="nombre ">
              <input
                name="nombre"
                className="registro-input  m-2 "
                type="text"
                placeholder="Nombre"
                required
              />
            </label>

            <label htmlFor="apellido">
              <input
                name="apellido"
                className="registro-input  m-2"
                type="text"
                placeholder="Apellido"
                required
              />
            </label>

            <label htmlFor="email">
              <input
                name="email"
                className="registro-input  m-2"
                type="email"
                placeholder="Correo"
                required
              />
            </label>

            <label htmlFor="identificacion">
              <input
                name="identificacion"
                className="registro-input  m-2"
                type="text"
                placeholder="Identificacion"
                required
              />
            </label>

            <label htmlFor="telefono">
              <input
                name="telefono"
                className="registro-input  m-2"
                type="text"
                placeholder="Telefono"
                required
              />
            </label>

            <label htmlFor="password">
              <input
                name="contrasena"
                className="registro-input b m-2"
                type="password"
                placeholder="Contraseña"
                required
              />
            </label>  

            <DropDownRg   
            name='rol'
            required={true}
            options={Enum_Rol}
            />

            <div className="flex flex-col justify-around">
              <ButtonLoadingRg
                disabled={Object.keys(formData).length === 0}
                loading={false}
                text='Registrarme'
               />
              <Link to="/auth/index" className="flex justify-center">
                <span className="text-sm text-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                   {"👈"} Regresar
                </span>
              </Link>
            </div>
          </section>
        </div>
      </form>
    </div>
  );
};

export default Registro