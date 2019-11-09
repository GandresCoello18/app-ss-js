import React from "react";
import { Icon } from "semantic-ui-react"; 
import "../assets/styles/container/login.scss";


const Ventana_Crear = () => {
    var ventana_session = document.querySelector('.fila_acceder_cuenta');
    var ventana_crear = document.querySelector('.fila_crear_cuenta');

    ventana_session.style.opacity = "0";
    ventana_crear.style.opacity = "1";
    ventana_crear.style.top = "-70px";
    console.log("primera");
}

const Ventana_Session = () => {
var ventana_session = document.querySelector('.fila_acceder_cuenta');
var ventana_crear = document.querySelector('.fila_crear_cuenta');

    ventana_session.style.opacity = "1";
    ventana_crear.style.opacity = "0";
    ventana_crear.style.top = "270px";

    console.log("segunda");
}

const Login = () => {
    return(
        <>


            <section className="area_login">
                <div className="row justify-content-center mt-5 fila_acceder_cuenta">
            
                
                    <div className="col-12 col-md-4 izquierda">
                        <h5 className="text-center">Bienvenido a Social-Students</h5>
                        <p className="p-2 text-center">
                            Aprende Desarrollo Web totalmente gratis. S-S decea que tenga un conocimiento exacto.
                        </p>
                        <sapn className="btn_crea_una_cuenta" onClick={Ventana_Crear}>
                            Crea una cuenta
                        </sapn>

                        <svg height="100" width="100" id="circle_abajo_iniciar">
                            <circle cx="50" cy="50" r="40" stroke-width="3" fill="#0F755A" />
                        </svg>

                    </div>
                    <div className="col-12 col-md-4 derecha">

                    <svg height="100" width="100" id="circle_arriba_iniciar">
                        <circle cx="50" cy="50" r="40" stroke-width="3" fill="#0F755A" />
                    </svg>

                        <h3 className="text-center">Iniciar Session</h3>
                        <p className="p-2">Tu conocimiento espera..!</p>
                        <form>
                            <input type="email" className="form-control" placeholder="Usuario:" required /><Icon name="user" className="icon_user"/>
                            <input type="password" className="form-control mt-3" placeholder="Contraseña:" required /><Icon name="eye" className="icon_eye" />
                            <span className="btn_acceder_cuenta">
                                Acceder
                            </span>
                        </form>
                    </div>
                </div>

                <div className="row justify-content-center mt-5 fila_crear_cuenta">
                    <div className="col-12 col-md-4 izquierda">
                        <h5 className="text-center">Bienvenido a Social-Students</h5>
                        <p className="p-2 text-center">
                            Aprende Desarrollo Web totalmente gratis. S-S decea que tenga un conocimiento exacto.
                        </p>
                        <sapn className="btn_crea_una_cuenta" onClick={Ventana_Session}>
                            Iniciar Session
                        </sapn>

                        <svg height="100" width="100" id="circle_abajo_iniciar">
                            <circle cx="50" cy="50" r="40" stroke-width="3" fill="#0F755A" />
                        </svg>

                    </div>
                    <div className="col-12 col-md-4 derecha">

                        <svg height="100" width="100" id="circle_arriba_iniciar">
                            <circle cx="50" cy="50" r="40" stroke-width="3" fill="#0F755A" />
                        </svg>

                        <h3 className="text-center">Crea una cuenta</h3>
                        <p className="p-2">Solo tomara 1 minuto</p>
                        <form>
                            <input type="text" className="form-control" placeholder="Usuario:" />
                            <input type="email" className="form-control mt-3" placeholder="Correo:" required />
                            <input type="password" className="form-control mt-3" placeholder="Contraseña:" required />
                            <input type="password" className="form-control mt-3" placeholder="Confirmar Contraseña:" required />
                            <span className="btn_acceder_cuenta">
                                Registrarme
                            </span>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Login;