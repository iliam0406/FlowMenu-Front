import React from "react"
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Navbar from "./JS/Component/navbar";
import Home from "./JS/Views/home";

function Layout(){
    return(
        <>
            <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={Navbar}/>

                    </Switch>
            </BrowserRouter> 
        </>
    )
}

export default Layout;