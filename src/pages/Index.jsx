import { Fragment } from 'react'
import SidebarLayout from '../layouts/sidebarLayout'
import { Link } from "react-router-dom"


const Index = () => {
  return (
    <Fragment>
      <div className="text-center p-1">
        <Link className='p-5' to="/banner2">VOLVER</Link>
        <Link to="/banner">PAGTWO</Link>
      </div>
      <SidebarLayout></SidebarLayout>
    </Fragment>
  );
}   

export default Index