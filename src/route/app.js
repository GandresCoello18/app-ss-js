import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Layout from "../component/layout";
import Home from "../containers/app";
import Clases from "../containers/clases";
import Proyectos from "../containers/proyectos";
import ProyectoFinal from "../containers/proyecto_final";
import Video from "../containers/video";
import MensajeChat from "../containers/mensaje-directo";
import ItemClass from "../containers/item_class";
import Login from "../containers/login";
import NotFound from "../containers/NotFound";

const App = () => (
    <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/clases" component={Clases} />
                <Route exact path="/login" component={Login} />
                <Redirect from="/cursos" to="/clases" />
                <Route exact path="/proyectos" component={Proyectos} />
                <Route exact path="/proyecto-final" component={ProyectoFinal} />
                <Route exact path="/video/:id" component={Video} />
                <Route exact path="/mensaje-directo" component={MensajeChat} />
                <Route exact path="/lista-clases/:item" component={ItemClass} />
                <Route component={NotFound}></Route>
            </Switch>
        </Layout>
    </BrowserRouter>
);

export default App;