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
        title: "Smoothies Blue and Red",
        descripcion: "Fresa, Arándanos, Leche condensada",
        precio:"$ 500",
        img: "/img/smoothies-fresa.png"
    },
    {
        id: 2,
        title: "Smoothies Green Free",
        descripcion: "Manzana Verde, Kiwi, Miel de Abeja ",
        precio:"$ 500",
        img: "/img/smoothies-manzana.png"
    },
    {
        id: 3,
        title: "Smoothies Banana Lux",
        descripcion: "Platano Fruta, Leche Condensada, ",
        precio:"$ 500",
        img: "/img/smoothies-platano.png"
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