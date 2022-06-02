import React from 'react'


const Factura = () => {
  return (
    <div className="flew flex-col w-full h-full items-center justify-center p-10">

    <form
      className="flex flex-col items-center justify-center"
      onSubmit={""}
      onChange={""}
      
    >
      <div className=" container mx-auto bg-white  mt-10 rounded px-4">
        <div className="xl:w-full border-b border-gray-300 py-5">
          <div className="flex w-11/12 mx-auto xl:w-full xl:mx-0 items-center">
            <p className="text-lg text-gray-800  font-bold">
                Formulario Factura Electronica
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
                Agregar Cliente 
              </label>
              <input
                type="text"
                name="nombre"
                defaultValue={""}
                required={true}
                className="border border-gray-300  pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 "
              />
            </div>
            <div className="lg:w-1/2 md:w-1/2 flex flex-col mb-6">
              <label
                htmlFor="LastName"
                className="pb-2 text-sm font-bold text-gray-800 "
              >
              Agregar producto 
              </label>
              <input
                type="text"
                name="apellido"
                defaultValue={""}
                required={true}
                className="border border-gray-300 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 "
              />
            </div>
            <div className="lg:w-1/2 md:w-1/2 flex flex-col mb-6">
              <label
                htmlFor="FirstName"
                className="pb-2 text-sm font-bold text-gray-800 "
              >
                Cantidad
              </label>
              <input
                type="text"
                name="identificacion"
                defaultValue={""}
                required={true}
                className="border border-gray-300 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 "
              />
            </div>

            <div className="lg:w-1/2 md:w-1/2 flex flex-col mb-6">
              <label
                htmlFor="FirstName"
                className="pb-2 text-sm font-bold text-gray-800"
              >
                Total Productos
              </label>
              <input
                type="text"
                name="telefono"
                defaultValue={""}
                required={true}
                className="border border-gray-300  pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 "
              />
            </div><div className="lg:w-1/2 md:w-1/2 flex flex-col mb-6">
            <label
              htmlFor="FirstName"
              className="pb-2 text-sm font-bold text-gray-800"
            >
            Descuento:
            </label>
            
          </div>
            <div className="lg:w-1/2 md:w-1/2 flex flex-col mb-6">
              <label
                htmlFor="FirstName"
                className="pb-2 text-sm font-bold text-gray-800"
              >
              Subtotal: 
              </label>
              
            </div>
            <div className="lg:w-1/2 md:w-1/2 flex flex-col mb-6">
              <label
                htmlFor="FirstName"
                className="pb-2 text-sm font-bold text-gray-800"
              >
              Total:
              </label>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
  )
}

export default Factura