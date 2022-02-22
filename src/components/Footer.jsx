import semillero from '../img/semillero.png'
import itfip from '../img/itfip.png'
import disruptivo from '../img/disruptivo.png'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="flex place-content-center  bg-slate-800">
      <div className="container py-4 px-4 text-center mt-8 p-10">
        <div className="flex flex-col items-center">
          <Link to="/" className="relative hover:opacity-70" >
            <h1 className="text-xl font-bold text-gray-200">
              CICLA
              <span className="bg-sky-800 text-grat-200 uppercase ml-1 p-1 rounded-lg">
                mundo
              </span>
            </h1>
          </Link>
          <div className="flex items-center gap-1 mt-11 text-sm font-bold text-gray-200">
          Involucrados 
          </div>
          <div className="flex items-center gap-1 mt-4 mb-10">
            <img className="m-2 h-32" src={ semillero }></img>
            <img className="m-2 h-32" src={ itfip }></img>
            <img className="m-2 h-32" src={ disruptivo }></img>
          </div>
        </div>
        <div className="flex gap-2 place-content-center">
        <span className='text-gray-200'> 
         ©️ 2022 Todos los Derechos Reservados ◽
        </span>
          <a
            className="text-gray-600 hover:text-black dark:hover:text-white dark:text-gray-100 hover:underline"
            href="https://midu.tube"
            rel="nofollow noreferrer"
            target="_blank"
          >
          Semilleros
          </a>
          <span className="text-gray-600 dark:text-gray-400"> ◽ </span>
          <a
            className="text-gray-600 hover:text-black dark:hover:text-white dark:text-gray-100 hover:underline"
            href="https://github.com/Proyecto-Investigacion-ITFIP"
            rel="nofollow noreferrer"
            target="_blank"
          >
          Informacion de proyecto 
          </a>
          <span className="text-gray-600 dark:text-gray-400"> ◽ </span>
          <a
            className="text-gray-600 hover:text-black dark:hover:text-white dark:text-gray-100 hover:underline"
            href="https://github.com/Proyecto-Investigacion-ITFIP/AppWeb-Frontend/issues/new"
            rel="nofollow noreferrer"
            target="_blank"
          >
            Enviar Sugerencia{" "}
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer