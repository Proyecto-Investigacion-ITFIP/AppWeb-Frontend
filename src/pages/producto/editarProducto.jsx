import { useParams, Link } from "react-router-dom";
import { useMutation, useQuery } from "@apollo/client";
import { GET_PRODUCTO } from "../../graphql/producto/queries";
import { ButtonLoading } from "../../components/ButtonLoading";
import { useFormData } from "../../hooks/useFormData";
import { Editar_Producto } from "../../graphql/producto/mutations";
import { useEffect } from "react";
import { toast } from "react-toastify";

const EditarProducto = () => {
  const { form, formData, updateFormData } = useFormData(null);
  const { _id } = useParams();
  const {
    loading: queryLoading,
    error: queryError,
    data: queryData,
  } = useQuery(GET_PRODUCTO, {
    variables: { _id },
  });

  useEffect(() => {
    console.log("data query",queryData)
  }, [queryData]);
  useEffect(() => {
    console.log("formData",formData)
  }, [formData]);
  const [
    editarProducto,
    { data: mutationData, loading: mutationLoanding, error: mutationError },
  ] = useMutation(Editar_Producto);

  const submitForm = (e) => {
    e.preventDefault();
    console.log('fb', formData);
    formData.precioUnidad = parseFloat(formData.precioUnidad)
    formData.cantidadTotalExistente = parseInt(formData.cantidadTotalExistente)
    editarProducto({
      variables: { _id, ...formData },
    });
  };

  useEffect(() => {
    if (mutationData) {
      toast.success("Producto Editado Con Exito");
    }
  }, [mutationData]);

  useEffect(() => {
    if (mutationError) {
      toast.error("Error Editando el Producto");
    }
    if (queryError) {
      toast.error("Error Consultnado el Producto");
    }
  }, [mutationError, queryError]);

  if (queryLoading) return <div>Cargando...</div>;

  return (
    <div className="flew flex-col w-full h-full items-center justify-center p-10">
      <Link to="/productos">
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
                Editar Informacion Cliente
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
                  Nombre Producto 
                </label>
                <input
                  type="text"
                  name="nombreProducto"
                  defaultValue={queryData.Producto.nombreProducto}
                  required={true}
                  className="border border-gray-300  pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 "
                />
              </div>
              <div className="lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                <label
                  htmlFor="LastName"
                  className="pb-2 text-sm font-bold text-gray-800 "
                >
                Descripcion
                </label>
                <input
                  type="text"
                  name="descripcion"
                  defaultValue={queryData.Producto.descripcion}
                  required={true}
                  className="border border-gray-300 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 "
                />
              </div>
            
              <div className="lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                <label
                  htmlFor="FirstName"
                  className="pb-2 text-sm font-bold text-gray-800 "
                >
                  Marca
                </label>
                <input
                  type="text"
                  name="marca"
                  defaultValue={queryData.Producto.marca}
                  required={true}
                  className="border border-gray-300 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 "
                />
              </div>

              <div className="lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                <label
                  htmlFor="FirstName"
                  className="pb-2 text-sm font-bold text-gray-800"
                >
                    Modelo
                </label>
                <input
                  type="text"
                  name="modelo"
                  defaultValue={queryData.Producto.modelo}
                  required={true}
                  className="border border-gray-300  pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 "
                />
              </div>
              <div className="lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                <label
                  htmlFor="FirstName"
                  className="pb-2 text-sm font-bold text-gray-800"
                >
                Precio Unidad
                </label>
                <input
                  type="text"
                  name="precioUnidad"
                  defaultValue={queryData.Producto.precioUnidad}
                  required={true}
                  className="border border-gray-300  pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 "
                />
              </div>
              <div className="lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                <label
                  htmlFor="FirstName"
                  className="pb-2 text-sm font-bold text-gray-800"
                >
                Cantidad Total Existente
                </label>
                <input
                  type="text"
                  name="cantidadTotalExistente"
                  defaultValue={queryData.Producto.cantidadTotalExistente}
                  required={true}
                  className="border border-gray-300  pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 "
                />
              </div>
              <div className="lg:w-1/2 md:w-1/2 flex flex-col mb-6">
              <label
                htmlFor="FirstName"
                className="pb-2 text-sm font-bold text-gray-800"
              >
              Estado Producto
              </label>
              <input
                type="text"
                name="estadoProducto"
                defaultValue={queryData.Producto.estadoProducto}
                required={true}
                className="border border-gray-300  pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 "
              />
            </div>
              
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
        <Link to="/productos">
          <i>Regresar</i>
        </Link>
      </button>
    </div>
  );
};

export default EditarProducto;
