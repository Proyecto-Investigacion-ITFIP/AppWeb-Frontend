import { Fragment } from 'react'
import SidebarLayout from '../layouts/sidebarLayout'
import { Link } from "react-router-dom"


const Index = () => {
  return (
    <Fragment>
      <div className="text-center">
        <Link to="/banner2">VOLVER</Link>
      </div>
      <SidebarLayout>
      </SidebarLayout>
    </Fragment>
  );
}   

export default Index