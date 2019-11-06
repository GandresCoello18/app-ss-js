import React from "react";
import "../assets/styles/components/necesita_ayuda.scss";
import { Card, Icon, Button, Label, Image } from 'semantic-ui-react';

const description = [
    'Amy is a violinist with 2 years experience in the wedding industry.',
    'She enjoys the outdoors and currently resides in upstate New York.',
];

const data = [0,0,0];

const NecesitaAyuda = (props) => {
    return(
        <>
            <article id="area_necesita_ayuda" className="mt-3 mt-md-0">
                <h5 className="text-center mt-2">Preguntas sin respuesta</h5>
                {data.map( valor => (
                    <Card>
                        <Card.Content header='About Amy'>
                            <strong className="mt-2">Modelo de caja en CSS</strong>
                            <Label floated='right' circular color='red' key='red' className="ml-5">
                                CSS
                            </Label>
                        </Card.Content>
                        <Card.Content description={description} />
                        <Card.Content extra>
                            <Image src='https://react.semantic-ui.com/logo.png' size="mini" /> <span className="ml-1">Andres Coello</span> <span className="float-right">20/12/2020</span>
                        </Card.Content>
                    </Card>
                ))}
            </article>
        </>
    );
}

export default NecesitaAyuda;