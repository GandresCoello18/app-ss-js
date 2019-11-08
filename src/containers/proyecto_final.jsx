import React from "react";
import VentanCurso from "../component/modelo_proyectos";
import Preguntale from "../component/preguntale_ah";
import Necesita from "../component/necesita_ayuda";
import BarraSuperior from '../component/barra_superior';
import { Image, Button } from 'semantic-ui-react';

const ProyectoFinal  = (props) => {
    return(
        <>
            <div className="container-fluid mt-4">
                <div className="row justify-content-between">
                    <div className="col-12 col-sm-4 col-md-3 col-lg-2">
                        <div className="row">
                            <div className="col-12">
                                <VentanCurso />
                            </div>
                            <div className="col-12 mt-4">
                                <Preguntale />
                            </div> 
                        </div>
                    </div>
                    <div className="col-12 col-sm-8 col-md-6 col-lg-7 scroll_medio mt-3 mt-md-0">
                        <BarraSuperior />

                        <div className="row mt-4">
                            <div className="col-12">
                                
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

export default ProyectoFinal;