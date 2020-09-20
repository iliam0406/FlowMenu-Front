import React from "react"
import "../../Styles/navbar.css"

function Navbar(){
    return(
        <>
        <div className="fijo-cabecera">
        <header className="img-logo">
            <img className="logo-min" src="/img/logo-min.svg" alt=""  />
        </header>
        <nav className="item-menu">
            <img className="item-icon" src="/img/icon1.svg" alt="" />
            <img className="item-icon" src="/img/principal.svg" alt="" />
            <img className="item-icon" src="/img/postre.svg" alt="" />
            <img className="item-icon" src="/img/bebidas.svg" alt="" />
        </nav>
        <div className="in-title">
            <h1>ENTRADA</h1>
            <hr className="hr-line"/>
        </div>
    </div>

        </>
    )
}

export default Navbar;