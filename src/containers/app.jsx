import React from "react";
import VentanPerfil from "../component/ventana_perfil";
import Preguntale from "../component/preguntale_ha";
import Necesita from "../component/necesita_ayuda";
import ContenidoPublicacion from "../component/contenido_publicaciones";
import ContenidoPublicacionFile from "../component/contenido_publicaciones_file";
import ModeloPublicacion from "../component/modelo_publicacion";
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
                                    <VentanPerfil />
                               </div>
                               <div className="col-12 mt-4">
                                    <Preguntale />
                                </div> 
                            </div>
                        </div>
                        <div className="col-12 col-sm-8 col-md-6 col-lg-7 scroll_medio mt-3 mt-md-0">
                            <div class="row barra_superior ml-1 border">
                                <div className="col-4 col-lg-7">
                                    <Image src="https://react.semantic-ui.com/logo.png" size="mini" /> 
                                </div>
                                <div className="col-8 col-lg-5">
                                    <Button floated="right" basic color='red'>
                                        Preguntar        
                                    </Button>
                                    <Button floated="right" basic color='green'>
                                        Publicar
                                    </Button>
                                </div>
                            </div>

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
                        <div className="col-12 col-md-3">
                            <Necesita />
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default App;