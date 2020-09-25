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
        title: "Coca Cola",
        descripcion: "Tomate, Lechuga, Zanahoria, Pepino",
        precio:"$ 400",
        img: "/img/ensalada.png"
    },
    {
        id: 2,
        title: "Jugo de Naranja",
        descripcion: "Tomate, Lechuga, Zanahoria, Pepino",
        precio:"$ 300",
        img: "/img/ensalada.png"
    },
    {
        id: 3,
        title: "Jugo de Mango",
        descripcion: "Tomate, Lechuga, Zanahoria, Pepino",
        precio:"$ 600",
        img: "/img/ensalada.png"
    }
]

function Bebidas(){
    return(
        <>
        <Navbar name="BEBIDAS Y JUGOS"/>
        <div className="cuerpo">
        <Product store={store}/>
        </div>
        <Footer />
        </>
    )
}

export default Bebidas;