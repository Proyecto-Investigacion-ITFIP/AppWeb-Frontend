import { Link } from "react-router-dom"
import { Crear_Producto } from "../../graphql/producto/mutations";
import { useFormData } from "../../hooks/useFormData";
import { useMutation } from "@apollo/client";
import { ButtonLoading } from '../../components/ButtonLoading';
import { toast } from "react-toastify";
import { useEffect } from "react";

const CrearProducto = () => {
    const { form, formData, updateFormData } = useFormData();
    const [
      registroProducto,
      { data: mutationData, loading: mutationLoading, error: mutationError },
    ] = useMutation(Crear_Producto);


    const submitForm = (e) => {
        e.preventDefault();
        console.log('DATOS', formData)
        formData.precioUnidad = parseFloat(formData.precioUnidad)
        formData.cantidadTotalExistente = parseInt(formData.cantidadTotalExistente)
        registroProducto({ variables: formData })
      }

      useEffect(() => {
        if (mutationData) {
          toast.success("Producto Creado Con Exito");
        }
      }, [mutationData]);

      useEffect(() => {
        if (mutationError) {
          toast.error("Error de Creacion de Producto");
        }
      }, [mutationError]);
    
      if (mutationLoading) return <div>Cargando...</div>;

  return (
    <div className="flew flex-col w-full h-full items-center justify-center p-6">
    <Link to="/productos">
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
            <p className="text-lg text-gray-800  font-bold">Nuevo Producto</p>
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
                htmlFor="nombreProducto"
                className="pb-2 text-sm font-bold text-gray-800 "
              >
              Nombre Producto <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="nombreProducto"
                required={true}
                className="border border-gray-300  pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 "
              />
            </div>
            <div className="lg:w-1/2 md:w-1/2 flex flex-col mb-6">
              <label
                htmlFor="descripcion"
                className="pb-2 text-sm font-bold text-gray-800 "
              >
              Descripcion <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="descripcion"
                required={true}
                className="border border-gray-300 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 "
              />
            </div>

            <div className="lg:w-1/2 md:w-1/2 flex flex-col mb-6">
            <label
              htmlFor="marca"
              className="pb-2 text-sm font-bold text-gray-800 "
            >
                Marca <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="marca"
              required={true}
              className="border border-gray-300 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 "
            />
          </div>
          
            <div className="lg:w-1/2 md:w-1/2 flex flex-col mb-6">
              <label
                htmlFor="modelo"
                className="pb-2 text-sm font-bold text-gray-800 "
              >
                Modelo <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="modelo"
                required={true}
                className="border border-gray-300 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 "
              />
            </div>
            <div className="lg:w-1/2 md:w-1/2 flex flex-col mb-6">
              <label
                htmlFor="precioUnidad"
                className="pb-2 text-sm font-bold text-gray-800"
              >
                Precio Unidad<span className="text-red-600">*</span>
              </label>
              <input
                type="number"
                name="precioUnidad"
                required={true}
                className="border border-gray-300  pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 "
              />
            </div>
            <div className="lg:w-1/2 md:w-1/2 flex flex-col mb-6">
              <label
                htmlFor="cantidadTotalExistente"
                className="pb-2 text-sm font-bold text-gray-800"
              >
                Cantidad Existente <span className="text-red-600">*</span>
              </label>
              <input
                type="number"
                name="cantidadTotalExistente"
                required={true}
                className="border border-gray-300  pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 "
              />
            </div>
          </div>
          <ButtonLoading
          disabled={Object.keys(formData).length === 0}
          loading={false}
          text="Nuevo Producto"
        />
        </div>
      </div>
    </form>
    <button className="BtnRegresar mx-2 my-2 bg-gray-600 transition duration-150 ease-in-out hover:bg-gray-400 rounded text-white px-6 py-2 text-xs">
      <Link to="/productos">
        <i className="p-9"> Regresar </i>
      </Link>
    </button>
  </div>
  )
}
export default CrearProducto