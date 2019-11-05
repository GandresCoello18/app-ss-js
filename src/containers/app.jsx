import React from "react";
import VentanPerfil from "../component/ventana_perfil";
import Preguntale from "../component/preguntale_ha";
import Necesita from "../component/necesita_ayuda";
import {  } from 'semantic-ui-react';

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
                        <div className="col-12 col-sm-8 col-md-6 col-lg-7 bg-danger">
                            fkkejfr
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