import React from "react"
import { Link } from "react-router-dom";
import "../../Styles/pedidos.css"

function Navbarpedidos(){
    return(
        <>
        <div className="fijo-cabecera">
        <header className="img-logo">
            <img className="logo-min" src="/img/logo-min.svg" alt="" />
        </header>
        <nav className="item-menu">
            <p className="pedidos-titulo">PEDIDOS</p>
        </nav>
        <div className="in-title">
            <div className="colum-pedidos">
                <p>Item</p>
                <p>Productos</p>
                <p>Precio</p>
                <p>Cantidad</p>
                <i className="far fa-trash-alt"></i>
            </div>
           
            <hr/>
        </div>
    </div>

        </>
    )
}

export default Navbarpedidos;