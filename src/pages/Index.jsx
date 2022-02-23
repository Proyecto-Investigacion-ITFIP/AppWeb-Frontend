import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ciclista from '../img/ciclista.png'

const Index = () => {
  return (
    <>
      <Navbar />
      <main className="flex place-content-center bg-slate-800">
        <div className="container px-10 py-10 ">
          <div className="md:text-left text-center relative lg:pb-24">
            <h2 className="font-extrabold text-4xl pt-4 mb-4 lg:text-8x1 md:pt-32 lg:mb-12 text-gray-100">
              Bienvenido a la Plataforma
              <br></br>
              <span className="text-blue-700"> CiclaMundo </span>
              Gestiona y Controla<br></br>los procesos
              <span className="text-blue-700"> Administrativo</span>
            </h2>
            <div className="inline-flex flex-col text-center">
              <a className="text-3xl py-4 px-8 transition rounded-md font-semibold mb-1 text-white bg-sky-900 ring-transparent focus:outline-none hover:bg-blue-900">
                <Link to="/auth/registro">¡Registrate!</Link>
              </a>
            </div>
            <div className="w-full md:absolute md:bottom-4 md:right-0 md:w-3/6">
              <img className="cicla" src={ciclista}></img>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );    
};

export default Index;