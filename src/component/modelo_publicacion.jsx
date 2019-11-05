import React from "react";
import { Image, Icon, Button, Label } from "semantic-ui-react";
import "../assets/styles/components/modelo_publicacion.scss";

const Modelo = ({children}) => {
    return(
        <>
            <article className="modelo-area_publicacion mb-3">
                <div className="row heaer_modelo">
                    <div className="col-8 col-lg-7">
                        <Image src="https://react.semantic-ui.com/logo.png" size="mini" /><b className="user_name">Andres Coello</b>
                    </div>
                    <div className="col-4 col-lg-5">
                        <span className="mt-2 ml-lg-5">20/10/2020 <Icon name="ellipsis vertical" size="large" className=" opciones_modelo"/></span>                        
                    </div>
                </div>

                <hr/>

                <div className="row mt-2 p-3">
                    <div className="col-12">
                        {children}
                    </div>
                </div>

                <hr/>

                <div className="row">
                    <div className="col-12">
                        <div className="row">
                            <div className="col-7 col-md-7">
                                <Button as='div' labelPosition='right'>
                                    <Button color='red'>
                                        <Icon name='heart' />
                                        Like
                                    </Button>
                                    <Label as='a' basic color='red' pointing='left'>
                                        2,048
                                    </Label>
                                    </Button>
                                    <Button as='div' labelPosition='right'>
                                    <Button basic color='blue'>
                                        <Icon name='fork' />
                                        Fork
                                    </Button>
                                    <Label as='a' basic color='blue' pointing='left'>
                                        2,048
                                    </Label>
                                    </Button>
                            </div>
                            <div className="col-5 col-md-5">
                                <span className="mt-0 btn"><Icon name="comment" />Comentarios: <b>9</b></span>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </>
    );
}

export default Modelo;