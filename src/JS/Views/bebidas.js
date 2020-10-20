import React from "react";
import {useEffect, useState} from 'react'

//Import Componentes
import Navbar from "../Component/navbar"
import Product from "../Component/product"
import Footer from "../Component/footer"

//Import Estilos Css
import "../../Styles/product.css"
import "../../Styles/general.css"

function Bebidas(){

    const[state, setstate] = useState({
        bebida:[]
    })

    useEffect(() => {
        fetch("./bd.json")
        .then((resp)=> resp.json())
        .then(data=>{
            console.log(data)
            setstate({...state, bebida:data.data_bebidas})
        })
    }, [])

    return(
        <>
        <Navbar name="BEBIDAS Y JUGOS"/>
        <div className="cuerpo">
        <Product store={state.bebida}/>
        </div>
        <Footer />
        </>
    )
}

export default Bebidas;