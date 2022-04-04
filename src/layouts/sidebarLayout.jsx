import Sidebar from "../components/Sidebar"
import { Outlet } from "react-router-dom"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { userAuth } from "../context/authContext";
import { useMutation } from "@apollo/client";
import { VALIDAR_TOKEN } from "../graphql/auth/mutation";
import { useEffect } from "react";

const SidebarLayout = () => {

  const { authToken, setToken, loadingAuth } = userAuth();
  const [ validarToken, {data: mutationData, loading: mutationLoading, error: mutationError}] = useMutation(VALIDAR_TOKEN)

  useEffect(() => {
    validarToken();
  }, []);

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
