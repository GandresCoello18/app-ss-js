import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "../component/layout";
import Home from "../containers/app";

const App = () => (
    <BrowserRouter>
        <Layout>
            <Switch>
                <Route path="/" component={Home} />
            </Switch>
        </Layout>
    </BrowserRouter>
);

export default App;