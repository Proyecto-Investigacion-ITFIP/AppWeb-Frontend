import { Fragment } from "react";

const Dashboard = () => {
  return (
    <Fragment>
      <h2 className="text-3xl mt-4 flex items-center justify-center">
        BIENVENIDO
      </h2>
      <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 p-8 gap-8">
        <div className="rounded  border-gray-300  dark:border-gray-700  border-2 h-24">
          <span className="flex items-center justify-center pt-1">
            Administra los usuarios registrados en la platafomra
          </span>
        </div>

        <div className="rounded border-gray-300  dark:border-gray-700  border-2 h-24">
          <span className="flex items-center justify-center pt-1">
            Regitras y controlar tu Stack de Productos
          </span>
        </div>

        <div className="rounded border-gray-300  dark:border-gray-700 border-2 h-24">
          <span className="flex items-center justify-center pt-1">
            Generar la factura Elecronica para tus clietes
          </span>
        </div>

        <div className="rounded border-gray-300  dark:border-gray-700  border-2 h-24">
          <span className="flex items-center justify-center pt-1">
            Visualiza el registro de tú ventas realizadas 
          </span>
        </div>
      </div>
      <img
        className="flex m-auto"
        src="https://cdn-icons-png.flaticon.com/512/2463/2463034.png"
        width="256"
        height="256"
        alt="navegación icono gratis"
        title="navegación icono gratis"
      ></img>
    </Fragment>
  );
};

export default Dashboard;
