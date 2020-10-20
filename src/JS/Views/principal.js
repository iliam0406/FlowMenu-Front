import React from "react";
import {useEffect, useState} from 'react'

//Import Componentes
import Navbar from "../Component/navbar"
import Product from "../Component/product"
import Footer from "../Component/footer"

//Import Estilos Css
import "../../Styles/product.css"
import "../../Styles/general.css"


function Principal(){

    const[state, setState] = useState({
        principales: []
    });

    useEffect(() => {
        fetch("./bd.json")
        .then((resp)=>{
            console.log(resp)
            return resp.json()
        })
        .then(data=>{
            console.log(data)
            setState({...state, principales: data.data_principal })
        })
    }, [])


    return(
        <>
            <Navbar 
            name="PRINCIPAL" 
            />
            <div className="cuerpo">
                <Product store={state.principales}/> 
            </div>
            <Footer />
        </>
    )
}


export default Principal;