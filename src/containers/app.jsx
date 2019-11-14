import React from "react";
import PerfilVentana from "../component/perfil_ventaja";
import Preguntale from "../component/preguntale_ah";
import Necesita from "../component/necesita_ayuda";
import ContenidoPublicacion from "../component/contenido_publicaciones";
import ContenidoPublicacionFile from "../component/contenido_publicaciones_file";
import ModeloPublicacion from "../component/modelo_publicacion";
import BarraSuperior from '../component/barra_superior';
import Encuesta from "../component/Encuesta-s-s";
import { Image, Button } from 'semantic-ui-react';
import "../assets/styles/container/index.scss";

class App extends React.Component{

    render(){
        return(
            <>
                <div className="container-fluid mt-4">
                    <div className="row justify-content-between">
                        <div className="col-12 col-sm-4 col-md-3 col-lg-2">
                            <div className="row">
                               <div className="col-12">
                                    <PerfilVentana />
                               </div>
                               <div className="col-12 mt-4">
                                    <Preguntale />
                                </div> 
                            </div>
                        </div>
                        <div className="col-12 col-sm-8 col-md-6 col-lg-7 scroll_medio mt-3 mt-md-0">
                            <BarraSuperior />

                            <div className="row mt-3">
                                <div className="col-12">
                                    <ModeloPublicacion>
                                        <ContenidoPublicacion />
                                        <ContenidoPublicacionFile />
                                    </ModeloPublicacion>

                                    <ModeloPublicacion>
                                        <ContenidoPublicacionFile />
                                    </ModeloPublicacion>
                                </div>
                            </div>

                        </div>
                        <div className="col-12 col-md-3 scroll_medio mt-4 mt-md-0">
                            <Necesita />
                        </div>
                    </div>
                </div>
                <Encuesta />
            </>
        );
    }
}

export default App;