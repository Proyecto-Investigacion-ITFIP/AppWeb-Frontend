import { Link } from "react-router-dom"


const Banner = () => {
  return (
    <div>
        <h1 className='text-gray-300 bg-lime-700 text-3x1'>
            Ruta 1
        </h1>
        <p> contenido ruta 1</p>
        <button>
            <Link to='/'>volver a home</Link>
        </button>
        <br></br>
        <button className="bg-lime-300 rounded-lg p-2  border-2 border-solid border-black">
            <Link to='/banner2'>ruta 2</Link>
        </button>
    </div>
  )
}

export default Banner