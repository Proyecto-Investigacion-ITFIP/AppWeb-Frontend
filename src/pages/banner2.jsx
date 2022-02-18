import { Link } from "react-router-dom"


const Banner2 = () => {
  return (
    <div>
    <h1 className='text-gray-300 bg-indigo-700 text-3x1'>
        Ruta 2
    </h1>
    <p> contenido ruta 2</p>
    <button>
        <Link to='/'>volver a home</Link>
    </button>
    <br></br>
    <button className="bg-indigo-300 rounded-lg p-2  border-2 border-solid border-black">
        <Link to='/banner'>ruta 1</Link>
    </button>
</div>
  )
}

export default Banner2