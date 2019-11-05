import React from "react";
import { Icon } from "semantic-ui-react";
import "../assets/styles/components/ventana_perfil.scss";

const VentanaPerfil = (props) => {
    return(
        <>
            <article id="area_perfil">
                <div id="fondo_perfil">
                    
                </div>
                <div id="descripcion_perfil">
                    <figure>
                        <img src="https://react.semantic-ui.com/logo.png" alt="" />
                    </figure>
                    
                    <h4 className="text-center">Andres Coello</h4>
                    <p className="text-center border_perfil">Sigue escribiendo code..!</p>
                    
                    <div className="text-center">Reconocimiento</div>
                    <p className="text-center border_perfil"><span>11</span> &nbsp; <Icon name="star" /></p>

                    <div className="text-center">Comentarios</div>
                    <p className="text-center border_perfil"><span>7</span> &nbsp; <Icon name="comments" /></p>

                    <div className="text-center">Aportes</div>
                    <p className="text-center border_perfil"><span>3</span> &nbsp; <Icon name="file text" /> </p>

                    <h5 className="text-center cambiar_foto_perfil">Cambiar Foto de Perfil</h5>
                </div>
            </article>
        </>
    );
}

export default VentanaPerfil;