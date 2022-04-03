import { Fragment } from "react";
import { Link } from "react-router-dom";

const IniciarSesion = () => {
  return (
    <Fragment>
      <div className="split left bg-sky-900">
        <div className="centered">
          <h2 className="text-white">Jane Flex</h2>
        </div>
      </div>

      <div className="split right">
        <Link to="/auth/index">
          <i className="fas fa-arrow-left cursor-pointer font-bold text-sky-900 text-xl hover:text-sky-800 mt-8 ml-28">
            {" "}
            Regresar
          </i>
        </Link>
        <div className="flex flex-col justify-center items-center mt-20">
          <h2 className="capitalize font-bold text-xl mb-10 mr-36">
            Ingresa a tu Cuenta
          </h2>
          <div className="lg:w-1/2 md:w-1/2 flex flex-col mb-6">
            <label
              htmlFor="LastName"
              className="pb-2 text-sm font-bold text-gray-800 "
            >
              Email
            </label>
            <input
              type="email"
              name="correo"
              required
              className="border border-gray-500 w-96 h-10 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-600  "
            />
          </div>
          <div className="lg:w-1/2 md:w-1/2 flex flex-col mb-6">
            <label
              htmlFor="LastName"
              className="pb-2 text-sm font-bold text-gray-800 "
            >
              Contreseña
            </label>
            <input
              type="password"
              name="contraseña"
              required
              className="border border-gray-500 w-96 h-10 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-600"
            />
          </div>
          <div className="flex flex-row ml-14">
            <input type="checkbox" name="guardar" required />
            <label htmlFor="LastName" className="pb-2 text-xs ml-1 ">
              Recordarme
            </label>
            <Link
              to="/Registrar"
              className="text-xs font-bold ml-36 text-indigo-700"
            >
              ¿Has olvidado la contreseña?
            </Link>
          </div>
          <div className="lg:w-1/2 md:w-1/2 flex flex-col mb-6">
            <button className="w-96 mx-2 my-2 bg-sky-700 transition duration-150 ease-in-out hover:bg-sky-600 rounded text-white px-6 py-2 text-base">
              Iniciar Sesion
            </button>
            <div className="flex flex-row mt-6 ">
              <span className="text-sm">¿No tienes una cuenta?</span>
              <Link to="/auth/registro" className="text-sm ml-1  text-sky-900 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                  ¡Registrate!
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default IniciarSesion;
