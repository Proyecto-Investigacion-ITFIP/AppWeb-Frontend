import { Link } from "react-router-dom"
import { Fragment } from "react"
import Sidebar2 from "../components/Sidebar2"


const Banner2 = () => {
  return (
    <Fragment>
      <div className="text-center">
        <Link className='p-5' to="/">VOLVER</Link>
        <Link to="/banner">PAGTWO</Link>
      </div>
      <Sidebar2></Sidebar2>
    </Fragment>
  );
}

export default Banner2