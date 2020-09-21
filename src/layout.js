import React from "react"
import {BrowserRouter, Route, Switch} from "react-router-dom";

//import Componentes
import Navbar from "./JS/Component/navbar";
import Home from "./JS/Views/home";
import Entrada from "./JS/Views/entradas";
import Agregados from "./JS/Views/agregados";


function Layout(){
    return(
        <>
            <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/entrada" component={Entrada}/>
                        <Route exact path="/agregados" component={Agregados}/>
                    </Switch>
            </BrowserRouter> 
        </>
    )
}

export default Layout;