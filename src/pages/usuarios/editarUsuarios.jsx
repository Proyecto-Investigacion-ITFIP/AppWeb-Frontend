import { useParams, Link } from "react-router-dom";
import { useMutation, useQuery } from "@apollo/client";
import { GET_USUARIO } from "../../graphql/usuarios/queries";
import { ButtonLoading } from "../../components/ButtonLoading";
import { useFormData } from "../../hooks/useFormData";
import { Editar_Usuario } from "../../graphql/usuarios/mutations";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { DropDown } from "../../components/Dropdown";
import { Enum_EstadoUsuario } from "../../utils/enums";

const EditarUsuarios = () => {
  const { form, formData, updateFormData } = useFormData(null);
  const { _id } = useParams();
  const {
    loading: queryLoading,
    error: queryError,
    data: queryData,
  } = useQuery(GET_USUARIO, {
    variables: { _id },
  });
 
  const [
    editarUsuario,
    { data: mutationData, loading: mutationLoanding, error: mutationError },
  ] = useMutation(Editar_Usuario);

  const submitForm = (e) => {
    e.preventDefault();
    // console.log('fb', formData);
    delete formData.rol;
    editarUsuario({
      variables: { _id, ...formData },
    });
  };

  useEffect(() => {
    if (mutationData) {
      toast.success("Usuario Editado Con Exito");
    }
  }, [mutationData]);

  useEffect(() => {
    if (mutationError) {
      toast.error("Error Editando el Usuario");
    }
    if (queryError) {
      toast.error("Error Consultnado el Usuario");
    }
  }, [mutationError, queryError]);

  if (queryLoading) return <div>Cargando...</div>;

  return (
    <div className="flew flex-col w-full h-full items-center justify-center p-10">
      <Link to="/usuarios">
        <i className="fas fa-arrow-left mt-12 cursor-pointer font-bold text-xl hover:text-blue-800">
          {" "}
          Regresar
        </i>
      </Link>
      <form
        className="flex flex-col items-center justify-center"
        onSubmit={submitForm}
        onChange={updateFormData}
        ref={form}
      >
        <div className=" container mx-auto bg-white  mt-10 rounded px-4">
          <div className="xl:w-full border-b border-gray-300 py-5">
            <div className="flex w-11/12 mx-auto xl:w-full xl:mx-0 items-center">
              <p className="text-lg text-gray-800  font-bold">
                Editar Informacion Usuario
              </p>
              <div className="ml-2 cursor-pointer text-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={16}
                  height={16}
                >
                  <path
                    className="heroicon-ui"
                    d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1zm0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="mx-auto pt-4">
            <div className="container mx-auto grid grid-cols-2">
              <div className="lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                <label
                  htmlFor="FirstName"
                  className="pb-2 text-sm font-bold text-gray-800 "
                >
                  Nombre 
                </label>
                <input
                  type="text"
                  name="nombre"
                  defaultValue={queryData.Usuario.nombre}
                  required={true}
                  className="border border-gray-300  pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 "
                />
              </div>
              <div className="lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                <label
                  htmlFor="LastName"
                  className="pb-2 text-sm font-bold text-gray-800 "
                >
                  Apellido
                </label>
                <input
                  type="text"
                  name="apellido"
                  defaultValue={queryData.Usuario.apellido}
                  required={true}
                  className="border border-gray-300 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 "
                />
              </div>
              <div className="lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                <label
                  htmlFor="Email"
                  className="pb-2 text-sm font-bold text-gray-800 "
                >
                  Email
                </label>
                <div className="border border-blue-400 shadow-sm rounded flex">
                  <div className="px-4 py-3  flex items-center border-r border-green-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-mail"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <rect x={3} y={5} width={18} height={14} rx={2} />
                      <polyline points="3 7 12 13 21 7" />
                    </svg>
                  </div>
                  <input
                    type="email"
                    name="email"
                    defaultValue={queryData.Usuario.email}
                    required={true}
                    className="pl-3 py-3 w-full text-sm focus:outline-none placeholder-gray-500 rounded bg-transparent text-gray-500 "
                  />
                </div>
              </div>
              <div className="lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                <label
                  htmlFor="FirstName"
                  className="pb-2 text-sm font-bold text-gray-800 "
                >
                  Identificacion
                </label>
                <input
                  type="text"
                  name="identificacion"
                  defaultValue={queryData.Usuario.identificacion}
                  required={true}
                  className="border border-gray-300 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 "
                />
              </div>

              <div className="lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                <label
                  htmlFor="FirstName"
                  className="pb-2 text-sm font-bold text-gray-800"
                >
                  Telefono
                </label>
                <input
                  type="text"
                  name="telefono"
                  defaultValue={queryData.Usuario.telefono}
                  required={true}
                  className="border border-gray-300  pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 "
                />
              </div>
              <div className="lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                <span className="mt-8 p-2 pb-2 text-sm font-bold text-gray-800">
                  Rol del usuario: {queryData.Usuario.rol}
                </span>
              </div>
              <DropDown
                label="Estado de la persona:"
                name="estado"
                defaultValue={queryData.Usuario.estado}
                required={true}
                options={Enum_EstadoUsuario}
              />
              <div></div>
            </div>
            <ButtonLoading
              disabled={Object.keys(formData).length === 0}
              loading={mutationLoanding}
              text="Confirmar"
            />
          </div>
        </div>
      </form>
      <button className="BtnRegresar mx-2 my-2 bg-gray-600 transition duration-150 ease-in-out hover:bg-gray-400 rounded text-white px-12 py-2 text-xs">
        <Link to="/usuarios">
          <i>Regresar</i>
        </Link>
      </button>
    </div>
  );
};

export default EditarUsuarios;
