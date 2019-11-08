import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "../component/layout";
import Home from "../containers/app";
import Clases from "../containers/clases";
import Proyectos from "../containers/proyectos";
import ProyectoFinal from "../containers/proyecto_final";
import Video from "../containers/video";
import MensajeChat from "../containers/mensaje-directo";
import ItemClass from "../containers/item_class";

const App = () => (
    <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/clases" component={Clases} />
                <Route exact path="/proyectos" component={Proyectos} />
                <Route exact path="/proyecto-final" component={ProyectoFinal} />
                <Route exact path="/video/:id" component={Video} />
                <Route exact path="/mensaje-directo" component={MensajeChat} />
                <Route exact path="/lista-clases/:item" component={ItemClass} />
            </Switch>
        </Layout>
    </BrowserRouter>
);

export default App;