import { Link } from "react-router-dom"
import Buttons from "../components/Buttons"
import MyFirstComponent from "../components/MyFirstComponent"


const Banner = () => {
  return (
    <div>
      <div className="text-center">
        <Link to="/">VOLVER</Link>
      </div>
      <MyFirstComponent texto="envio pro" num={3} />
      <Buttons />
    </div>
  );
}

export default Banner