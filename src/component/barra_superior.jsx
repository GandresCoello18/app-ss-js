import React from "react";
import { Image, Button } from 'semantic-ui-react';

const BarraSuperior = (props) => {
    return(
        <>
            <div class="row barra_superior ml-1 border">
                <div className="col-4 col-lg-7">
                    <Image src="https://static.platzi.com/media/avatars/avatars/programandres_415dc47e-e96a-4a50-9f8d-00a815095ffd.jpg" size="mini" /> 
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
        </>
    );
}

export default BarraSuperior;