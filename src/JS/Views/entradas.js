import React from "react";

//Import Componentes
import Navbar from "../Component/navbar"
import Product from "../Component/product"
import Footer from "../Component/footer"

//Import Estilos Css
import "../../Styles/product.css"
import "../../Styles/general.css"

const store = [
    {
        id: 1,
        title: "Ensalada de estación",
        descripcion: "Tomate, Lechuga, Zanahoria, Pepino",
        precio:"$ 700",
        img: "/img/ensalada.png"
    },
    {
        id: 2,
        title: "Consomé de pollo",
        descripcion: "Nada como un rico consomé de pollo",
        precio:"$ 400",
        img: "/img/consome.png"
    },
    {
        id: 3,
        title: "Ensalada Cesar",
        descripcion: "Lechuga, salsa Cesar, crutones de pan, queso parmesano.",
        precio:"$ 1.000",
        img: "/img/cesar.png"
    },
]

function Entrada(){
    return(
        <>
            <Navbar name="ENTRADA"/>
            <div className="cuerpo">
                <Product store={store}/> 
            </div>
            <Footer />
        </>
    )
}


export default Entrada;