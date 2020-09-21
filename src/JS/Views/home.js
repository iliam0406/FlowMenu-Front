import React from "react"
import "../../Styles/home.css"
import { Link } from "react-router-dom";

function Home(){

    return(
        <>
            <nav className="navbar">
                <img  className="logo" src="/img/logo_Mesa de trabajo 1.png" alt="FlowMenu" />
            </nav>
            <div className="encabezado">
                <p className="titulo">Bienvenidos a Restaurante Manquehue</p>
                <p className="texto">Ingresando sus datos podrá ayudarnos al cuidado del medio ambiente, recibirá su boleta directamente en su correo.</p>
            </div>
            <div className="formulario">
                <form className="order-form">
                    <p className="label">Ingrese su Correo Electrónico</p>
                    <input className="input-text" type="email" name="" id=""/> <br/>
                    <button className="boton-play" type="submit">ENTER</button>
                </form>
            </div>
        </>
    )
}

export default Home;