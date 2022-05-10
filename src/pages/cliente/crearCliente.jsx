import { Link } from "react-router-dom"
import { Crear_Cliete } from "../../graphql/clientes/mutations"
import { useFormData } from "../../hooks/useFormData";
import { useMutation } from "@apollo/client";
import { ButtonLoading } from '../../components/ButtonLoading';
import { toast } from "react-toastify";
import { useEffect } from "react";

const CrearCliente = () => {
  const { form, formData, updateFormData } = useFormData();
  const [
    registroCliente,
    { data: mutationData, loading: mutationLoading, error: mutationError },
  ] = useMutation(Crear_Cliete);

  const submitForm = (e) => {
    e.preventDefault();
    console.log('DATOS', formData)
    registroCliente({ variables: formData })
  }
  console.log("datoFormu",formData)

  useEffect(() => {
    if (mutationData) {
      toast.success("Cliente Creado Con Exito");
    }
  }, [mutationData]);

  useEffect(() => {
    if (mutationError) {
      toast.error("Error Editando el Cliente");
    }
  }, [mutationError]);

  if (mutationLoading) return <div>Cargando...</div>;

  return (
    <div className="flew flex-col w-full h-full items-center justify-center p-6">
      <Link to="/clientes">
        <i className="fas fa-arrow-left mt-8 cursor-pointer font-bold text-xl hover:text-blue-800">
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
              <p className="text-lg text-gray-800  font-bold">Nuevo Cliente</p>
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
                  htmlFor="nombre"
                  className="pb-2 text-sm font-bold text-gray-800 "
                >
                  Nombre <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  name="nombre"
                  required={true}
                  className="border border-gray-300  pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 "
                />
              </div>
              <div className="lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                <label
                  htmlFor="apellido"
                  className="pb-2 text-sm font-bold text-gray-800 "
                >
                  Apellido <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  name="apellido"
                  required={true}
                  className="border border-gray-300 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 "
                />
              </div>
              <div className="lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                <label
                  htmlFor="email"
                  className="pb-2 text-sm font-bold text-gray-800 "
                >
                  Email <span className="text-red-600">*</span>
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
                    required={true}
                    className="pl-3 py-3 w-full text-sm focus:outline-none placeholder-gray-500 rounded bg-transparent text-gray-500 "
                  />
                </div>
              </div>
              <div className="lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                <label
                  htmlFor="indentificacion"
                  className="pb-2 text-sm font-bold text-gray-800 "
                >
                  Identificacion <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  name="identificacion"
                  required={true}
                  className="border border-gray-300 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 "
                />
              </div>
              <div className="lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                <label
                  htmlFor="departamento"
                  className="pb-2 text-sm font-bold text-gray-800"
                >
                  Departamento <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  name="departamento"
                  required={true}
                  className="border border-gray-300  pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 "
                />
              </div>
              <div className="lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                <label
                  htmlFor="ciudad"
                  className="pb-2 text-sm font-bold text-gray-800"
                >
                  Ciudad <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  name="ciudad"
                  required={true}
                  className="border border-gray-300  pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 "
                />
              </div>
              <div className="lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                <label
                  htmlFor="telefono"
                  className="pb-2 text-sm font-bold text-gray-800"
                >
                  Telefono <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  name="telefono"
                  required={true}
                  className="border border-gray-300  pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 "
                />
              </div>
            </div>
            <ButtonLoading
            disabled={Object.keys(formData).length === 0}
            loading={false}
            text="Nuevo Cliente"
          />
          </div>
        </div>
      </form>
      <button className="BtnRegresar mx-2 my-2 bg-gray-600 transition duration-150 ease-in-out hover:bg-gray-400 rounded text-white px-6 py-2 text-xs">
        <Link to="/clientes">
          <i className="p-9"> Regresar </i>
        </Link>
      </button>
    </div>
  );
}

export default CrearCliente