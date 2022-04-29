import React, { Fragment } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import pexelCicla from '../img/pexelCicla.jpeg'
import pexel2 from '../img/pexel2.jpg'
import pexel3 from '../img/pexel3.jpg'
import pexel4 from '../img/pexel4.jpg'
import { Link } from 'react-router-dom'


const PostRegistro = () => {
  return (
    <Fragment>
      <Navbar />
      <div className="container mx-auto pt-16">
            <div className="w-11/12 xl:w-2/3 lg:w-2/3 md:w-2/3 mx-auto sm:mb-10 mb-16">
                <h2 className=" xl:text-5xl md:text-3xl text-xl text-center text-gray-800 font-extrabold mb-5 pt-4">
                ¡Gracias Por Registrate A CiclasMundo!
                </h2>
                <p className="text-base md:text-lg lg:text-xl text-center text-gray-600 font-normal xl:w-10/12 xl:mx-auto">
                Porfavor espera a que un Adminitrador valide tus datos esto puede tardar unos minutos. 
                O comunicate con uno via WhatsApp para confirmar tú registro y agilizar el proceso<br/> <br/>
                <span>Luego vuelve e  </span>
                <Link to="/auth/iniciar-sesion" className='underline text-blue-800 hover:text-blue-700'>
                  Iniciar Sesión  
                </Link>
                </p> 
                <div className="xl:py-16 lg:py-16 md:py-16 sm:py-16 px-15 flex flex-wrap m-1">
                <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-b lg:border-b xl:border-r lg:border-r :border-r border-gray-200 xl:pb-10 pb-16 items-center">
                   <img className="m-2 h-40" src={ pexelCicla }></img>
                </div>
                <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-b lg:border-b xl:border-r lg:border-r border-gray-200 xl:pb-10 pb-16 items-center">
                   <img className="m-2 h-40" src={ pexel2 }></img>
                </div>
                <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-b lg:border-b border-gray-200 xl:pb-10 pb-16 pt-4 items-center">
                    <img className="post-img-cicla m-2 h-40" src={ pexel3 }></img>
                </div>
                <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center lg:border-b xl:border-b lg:border-l xl:border-l border-gray-200 xl:pb-10 pb-16 items-center">
                    <img className="m-2 h-40" src={ pexel4 }></img>
                </div>
                
            </div>
            </div>
        </div>
      <Footer />
    </Fragment>
    )
}   

export default PostRegistro 