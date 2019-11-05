import React from "react";
import { Popup, Image } from "semantic-ui-react";
import "../assets/styles/components/preguntale.scss";

const Preguntale = (props) => {
    return(
        <>
            <article id="area_preguntale">
                <h5 className="text-center">Tienes dudas? Preguntale</h5>
                    <hr/>
                <Popup content='Andres coello' trigger={<Image src="https://react.semantic-ui.com/logo.png" size="mini" />} /> <span>Andres Coello</span>
                <Popup content='Andres coello' trigger={<Image src="https://react.semantic-ui.com/logo.png" size="mini" />} /> <span>Andres Coello</span>
                <Popup content='Andres coello' trigger={<Image src="https://react.semantic-ui.com/logo.png" size="mini" />} /> <span>Andres Coello</span>
                <Popup content='Andres coello' trigger={<Image src="https://react.semantic-ui.com/logo.png" size="mini" />} /> <span>Andres Coello</span>
            </article>
        </>
    );
}

export default Preguntale;