import React from "react";

//Import Componentes
import Navbar from "../Component/navbar"
import Product from "../Component/product"
import Footer from "../Component/footer"

//Import Estilos Css
import "../../Styles/product.css"
import "../../Styles/general.css"


function Entrada(){
    return(
        <>
        <Navbar/>
        <div className="cuerpo">
        <Product/>
        </div>
        <Footer />
        </>
    )
}

export default Entrada;