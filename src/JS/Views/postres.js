import React from "react";
import {useEffect, useState} from 'react'

//Import Componentes
import Navbar from "../Component/navbar"
import Product from "../Component/product"
import Footer from "../Component/footer"

//Import Estilos Css
import "../../Styles/product.css"
import "../../Styles/general.css"



function Postres(){

    const[state, setState]= useState({
        postre:[]
    });

    useEffect(() => {
        fetch("./bd.json")
        .then((resp)=>resp.json())
        .then((data)=>{
            setState({...state, postre: data.data_postres})
        })
    }, [])

    return(
        <>
            <Navbar name="POSTRES"/>
            <div className="cuerpo">
                <Product store={state.postre}/> 
            </div>
            <Footer />
        </>
    )
}


export default Postres;