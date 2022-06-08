import React from "react";
import itfip from "../img/ITFIP.png";
import Navbar from "../components/Navbar"


const Nosotros = () => {
  return (
    <div>
      <Navbar />
      <section className="nosotros">
        <h2 className="abaut-title"> SOBRE NOSOTOS</h2>
        <span className="abut-contener">
          Estudiantes de la Institución De Educación Superior ITFIP Facultad De
          Ingeniería y ciencias Agro-Industriales - Ingeniería de Sistemas
        </span>

        <h4 className="abaut-subtitle">
          Aplicativo WEB enfocado al servicio de inventario en el municipio del
          Girardot-Cundinamarca
        </h4>

        <p className="abut-contener">
          proyecta implementar una aplicación WEB de inventario producto que
          permita controlar y gestionar el inventario de productos que realice
          el registro de un nuevo producto, editar, eliminar y además la
          creación factura electrónica ligada al producto vendido hacia un
          cliente.
          <br />
          <br />
          empresa de bicicletería y taller “CLETA SPORTS SPECIALIZED” de
          Girardot-Cundinamarca, dedicada a la comercialización de bicicletas
          SPECIALIZED, equipamiento deportivo y servicio de taller
        </p>
      </section>

      <section className="team">
        <h2 className="abaut-title"> EQUIPO DE TRABAJO</h2>
        <div className="contener-all-team">
          <div className="abaut-team">
            <div className="img-1">
              <img className="m-2 h-32" src={itfip}></img>
            </div>

            <div className="contener-team">
              <div className="descripcion">
                <h6 className="conter-categoria">Estudiante</h6>
                <h4 className="conter-name">ALEX ORTIZ</h4>
                <span className="conter-descripcion">Diseñador Grafico </span>
                <br />
                <span className="conter-descripcion">Gestion Proyecto</span>
              </div>
              <div className="footer1">
                <a
                  href="/https://www.facebook.com/profile.php?id=100024702679997"
                  target="_blank"
                  rel="nofollow noreferrer"
                >
                  <i className="fab fa-facebook text-blue-800 hover:text-blue-400 text-2xl p-1"></i>
                </a>
                <a
                  href="https://www.instagram.com/ortiz_alex26/?hl=es-la"
                  target="_blank"
                  rel="nofollow noreferrer"
                >
                  <i className="fab fa-instagram text-orange-700 hover:text-orange-400 text-2xl p-1"></i>
                </a>
                <a
                  href="https://twitter.com/alexalive80"
                  target="_blank"
                  rel="nofollow noreferrer"
                >
                  <i className="fab fa-twitter text-sky-400  hover:text-sky-600 text-2xl p-1"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="abaut-team">
            <div className="img-1">
              <img className="m-2 h-32" src={itfip}></img>
            </div>

            <div className="contener-team">
              <div className="descripcion">
                <h6 className="conter-categoria">Estudiante</h6>
                <h4 className="conter-name">HERNAN CAICEDO</h4>
                <span className="conter-descripcion">Administrador de BD</span>
                <br />
                <span className="conter-descripcion">Desarrollador Web</span>
              </div>
              <div className="footer1">
                <a
                  href="https://www.facebook.com/profile.php?id=100024702679997"
                  rel="nofollow noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-facebook text-blue-800 hover:text-blue-400 text-2xl p-1"></i>
                </a>
                <a
                  href="https://www.instagram.com/ortiz_alex26/?hl=es-la"
                  target="_blank"
                >
                  <i className="fab fa-instagram text-orange-700 hover:text-orange-400 text-2xl p-1"></i>
                </a>
                <a href="https://twitter.com/alexalive80" target="_blank">
                  <i className="fab fa-twitter text-sky-400 hover:text-sky-600 text-2xl p-1"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="abaut-team">
            <div className="img-1">
              <img className="m-2 h-32" src={itfip}></img>
            </div>

            <div className="contener-team">
              <div className="descripcion">
                <h6 className="conter-categoria">Estudiante</h6>
                <h4 className="conter-name">DAVID VAQUIRO</h4>
                <span className="conter-descripcion">Scrum Master</span>
                <br />
                <span className="conter-descripcion">Desarrollador Web</span>
              </div>
              <div className="footer1">
                <a
                  href="https://www.facebook.com/profile.php?id=100024702679997"
                  target="_blank"
                >
                  <i className="fab fa-facebook text-blue-800 hover:text-blue-400 text-2xl p-1"></i>
                </a>
                <a
                  href="https://www.instagram.com/ortiz_alex26/?hl=es-la"
                  target="_blank"
                >
                  <i className="fab fa-instagram text-orange-700 hover:text-orange-400 text-2xl p-1"></i>
                </a>
                <a href="https://twitter.com/alexalive80" target="_blank">
                  <i className="fab fa-twitter text-sky-400 hover:text-sky-600 text-2xl p-1"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="abaut-team">
            <div className="img-1">
              <img className="m-2 h-32" src={itfip}></img>
            </div>

            <div className="contener-team">
              <div className="descripcion">
                <h6 className="conter-categoria">Estudiante</h6>
                <h4 className="conter-name ">STIVEN ALMANZA</h4>
                <span className="conter-descripcion">Analista de Sistema</span>
                <br />
                <span className="conter-descripcion">Desarrollador Web</span>
              </div>
              <div className="footer1">
                <a
                  href="https://www.facebook.com/profile.php?id=100024702679997"
                  target="_blank"
                >
                  <i className="fab fa-facebook text-blue-800 hover:text-blue-400 text-2xl p-1"></i>
                </a>
                <a
                  href="https://www.instagram.com/ortiz_alex26/?hl=es-la"
                  target="_blank"
                >
                  <i className="fab fa-instagram text-orange-700 hover:text-orange-400 text-2xl p-1"></i>
                </a>
                <a href="https://twitter.com/alexalive80" target="_blank">
                  <i className="fab fa-twitter text-sky-400 hover:text-sky-600 text-2xl p-1"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Nosotros;
