import React from "react";
import Navbarpedidos from "../Component/navbarpedidos" 
import Pedidosproductos from "../Component/pedidosproductos" 

import "../../Styles/pedidos.css"


function Pedidos(){
    return(
        <>
        <Navbarpedidos />
        <div className="cuerpo-pedidos">
        <Pedidosproductos />
        </div>
        </>
    )
}

export default Pedidos

