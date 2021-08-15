import "./scss/style.scss";
import React from "react";
import Routes from "./routes";
import { Route, Switch } from "react-router";
import HeaderBar from "./Components/HeaderBar";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";

function App() {
    return (
        <HeaderBar>
            <Switch>
                <Routes />
                <Route path="*" component={Home} />
            </Switch>
        </HeaderBar>
    );
}

export default App;
