import Sidebar from "../components/Sidebar"
import { useNavigate, Outlet } from "react-router-dom"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { userAuth } from "../context/authContext";
import { useMutation } from "@apollo/client";
import { REFRESCAR_TOKEN } from "../graphql/auth/mutation";
import { useEffect, useState } from "react";


const SidebarLayout = () => {
  const navigate = useNavigate();
  const { authToken, setToken  } = userAuth();
  const [loadingAuth, setLoadingAuth] = useState(true);
  const [ refrescarToken, {data: mutationData, loading: mutationLoading, error: mutationError}] = useMutation(REFRESCAR_TOKEN)

  useEffect(() => {
    refrescarToken();
  }, [refrescarToken]);


  useEffect(() => {
    console.log('DM', mutationData)
    if(mutationData){
      if(mutationData.refrescarToken.token){
        setToken(mutationData.refrescarToken.token)
      } else {
        setToken(null); 
      }
      setLoadingAuth(false)
    }
  }, [mutationData, setToken, loadingAuth]);


  useEffect(() => {
    console.log('token acutal', authToken, mutationLoading);
  }, [authToken]);

  // redirigir a login si el token no es valido
  if(mutationLoading || loadingAuth) return <div>loading...</div>
  if(!authToken){
    navigate('/auth/iniciar-sesion');
  }

  return (
    <div className="flex flex-col md:flex-row flex-no-wrap">
      <Sidebar />
      <div className="flex- w-full h-full">
        <div className="w-full h-full">
          <Outlet />
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default SidebarLayout
