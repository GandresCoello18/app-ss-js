import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/container/notfound.scss";

const NoFound = () => {
    return(
        <>
            <div id="notfound">
                <div className="notfound">
                    <div className="notfound-404">
                        <h1>404</h1>
                        <h2>Pagina no encontrada</h2>
                    </div>
                    <Link to="/" className="mt-md-5">Inicio</Link>
                </div>
            </div>
        </>
    );
}

export default NoFound;