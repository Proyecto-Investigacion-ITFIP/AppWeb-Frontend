import Sidebar from "../components/Sidebar"
import { Outlet } from "react-router-dom"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SidebarLayout = () => {
  return (
    <div className="flex flex-col md:flex-row flex-no-wrap">
      <Sidebar />
      <div className="flex- w-full h-full">
        <div className="w-full h-full overflow-y-scroll">
          <Outlet />
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default SidebarLayout
