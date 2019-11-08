import React from "react";
import PerfilVentana from "../component/perfil_ventaja";
import Preguntale from "../component/preguntale_ah";
import Necesita from "../component/necesita_ayuda";
import ModeloClases from "../component/modelo_clases";
import BarraSuperior from '../component/barra_superior';
import { Link } from "react-router-dom"; 
import { Image, Button } from 'semantic-ui-react';

const Clases = (props) => {
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
                                <Link to="/lista-clases/10" style={{color: "#000"}}>
                                    <ModeloClases />
                                </Link>
                                <Link to="/lista-clases/10" style={{color: "#000"}}>
                                    <ModeloClases />
                                </Link>
                            </div>
                        </div>

                    </div>
                    <div className="col-12 col-md-3 scroll_medio mt-4 mt-md-0">
                        <Necesita />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Clases;