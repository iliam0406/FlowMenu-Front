import React from "react"
import {BrowserRouter, Route, Switch} from "react-router-dom";

//import Componentes
import Navbar from "./JS/Component/navbar";
import Home from "./JS/Views/home";
import Entrada from "./JS/Views/entradas";
import Bebidas from "./JS/Views/bebidas";
import Agregados from "./JS/Views/agregados";
import Pedidos from "./JS/Views/pedidos";
import Postres from "./JS/Views/postres";
//import MasterRoute from "./Layout/master_layout";

function Layout(){
    return(
        <>
            <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/entrada" component={Entrada}/>
                        <Route exact path="/bebidas" component={Bebidas}/>
                        <Route exact path="/postres" component={Postres}/>
                        <Route exact path="/agregados" component={Agregados}/>
                        <Route exact path="/pedidos" component={Pedidos}/>
                    </Switch>
            </BrowserRouter> 
        </>
    )
}

export default Layout;