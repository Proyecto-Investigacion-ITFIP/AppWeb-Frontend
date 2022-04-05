import { useMutation } from "@apollo/client";
import { Fragment, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LOGIN } from "../../graphql/auth/mutation";
import { useFormData } from "../../hooks/useFormData"
import { ButtonLoadingLg } from "../../components/ButtonLoading";
import { userAuth } from "../../context/authContext";

const IniciarSesion = () => {
  const navigate = useNavigate();
  const { setToken } = userAuth();
  const { form, formData, updateFormData } = useFormData();
  const [login, {data: mutationData, loading: mutationLoading, error: mutationError}] = useMutation(LOGIN)

  const submitForm = (e) => {
    e.preventDefault();
    login({
      variables: formData ,
    });
  };

  //recibir token del back(mutationData) y coloca a inicio pages
  useEffect(() => {
    // console.log('datos mutacion', mutationData);
    if(mutationData){
      if(mutationData.login.token){
        setToken(mutationData.login.token);
        navigate('/');
      }
    }
  }, [mutationData, setToken, navigate]);

  return (
    <Fragment>
      <div className="split left bg-sky-900">
        <div className="centered">
          <h2 className="text-white">Jane Flex</h2>
        </div>
      </div>

      <div className="split right">
        <Link to="/auth/index">
          <i className="fas fa-arrow-left cursor-pointer font-bold text-sky-900 text-xl hover:text-sky-800 mt-8 ml-28">
            {" "}
            Regresar
          </i>
        </Link>
        <form
            className="flex flex-col justify-center items-center mt-20 mr-28"
            onSubmit={submitForm}
            onChange={updateFormData}
            ref={form}
          >
          <h2 className="capitalize font-bold text-xl mb-10 mr-36">
            Ingresa a tu Cuenta
          </h2>
            <div className="lg:w-1/2 md:w-1/2 flex flex-col mb-6">
              <label
                htmlFor="LastName"
                className="pb-2 text-sm font-bold text-gray-800 "
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                required={true}
                className="border border-gray-500 w-96 h-10 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-600  "
              />
            </div>
            <div className="lg:w-1/2 md:w-1/2 flex flex-col mb-6">
              <label
                htmlFor="LastName"
                className="pb-2 text-sm font-bold text-gray-800 "
              >
                Contreseña
              </label>
              <input
                type="password"
                name="contrasena"
                required={true}
                className="border border-gray-500 w-96 h-10 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-600"
              />
            </div>
            <div className="flex flex-row ml-28">
              <input type="checkbox" name="guardar" required={false}/>
              <label htmlFor="LastName" className="pb-2 text-xs ml-1 ">
                Recordarme
              </label>
              <Link
                to="/Registrar"
                className="text-xs font-bold ml-36 text-indigo-700"
              >
                ¿Has olvidado la contreseña?
              </Link>
            </div>
            <div className="lg:w-1/2 md:w-1/2 flex flex-col mb-6">
            <ButtonLoadingLg 
              disabled={Object.keys(formData).length === 0}
              loading={mutationLoading}
              text='Iniciar Sesion'
            />
              <div className="flex flex-col mb-6 w-80">
                <div className="flex flex-row mt-6 ">
                  <span className="text-sm">¿No tienes una cuenta?</span>
                  <Link
                    to="/auth/registro"
                    className="text-sm ml-1  text-sky-900 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline"
                  >
                    ¡Registrate!
                  </Link>
                </div>
              </div>
            </div>
          </form>
      </div>
    </Fragment>
  );
};

export default IniciarSesion;
