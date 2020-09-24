import React from "react";

//Import Componentes
import Navbar from "../Component/navbar"
import Product from "../Component/incremento"
import Mensaje from "../Component/mensaje"
import Footer from "../Component/footer"

//Import Estilos Css
import "../../Styles/general.css"
import "../../Styles/incremento.css"
import Incremento from "../Component/incremento";

function Agregados(){
    return(
        <>
            <Navbar name="AGREGADOS"/>
            <div className="cuerpo">
            <Mensaje />
            <Incremento/>
            </div>
            <Footer />
        </>
    )
}

export default Agregados