import React from "react";
import {useHistory} from 'react-router-dom'
import {useEffect, useState} from 'react'

//Import Componentes
import Navbar from "../Component/navbar"
import Product from "../Component/product"
import Footer from "../Component/footer"

//Import Estilos Css
import "../../Styles/product.css"
import "../../Styles/general.css"


//const URL_API = '../../bd.json'

function Entrada(){

    const[state, setstate] = useState({
        entradas: []
    });

    useEffect(() => {
    fetch("./bd.json")
    .then((resp)=> resp.json()
    )
    .then(data=>{
        console.log(data)
        setstate({...state, entradas: data.data_entrada})
    })
    }, [])
    
    return(
        <>
            <Navbar name="ENTRADA"/>
            <div className="cuerpo">
                <Product store={state.entradas}/>    
            </div>
            <Footer />
        </>
    )
}


export default Entrada;