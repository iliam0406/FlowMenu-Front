import React from "react"
import { Link } from "react-router-dom";
import "../../Styles/navbar.css"



function Navbar({name}){
    return(
        <>
                        <div className="fijo-cabecera">
                            <header className="img-logo">
                            <Link to="/"><img className="logo-min" src="/img/logo-min.svg" alt=""  /></Link>  
                            </header>
                            <nav className="item-menu">
                                <img className="item-icon" src="/img/icon1.svg" alt="" />
                                <img className="item-icon" src="/img/icon1.svg" alt="" />
                                <img className="item-icon" src="/img/postre.svg" alt="" />
                                <img className="item-icon" src="/img/bebidas.svg" alt="" />
                            </nav>
                            <div className="in-title">
                                <h1>{name}</h1> 
                                <hr className="hr-line"/>
                            </div>
                        </div>
        </>   
    )
}

export default Navbar;