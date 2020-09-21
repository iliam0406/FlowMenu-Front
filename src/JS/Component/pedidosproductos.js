import React from "react";
import "../../Styles/pedidos.css"

function Pedidosproductos(){
    return(
        <>
            <div className="in-title">
                <div className="list-pedidos">
                    <p>01</p>
                    <p> <span>Pollo a la plancha</span> <br/> Papas fritas <br/> Ensalada de lechuga <br/> Chessecake <br/> Coca Cola</p>
                    <p>$ 3.500</p>
                    <p>1</p>
                    <i className="far fa-trash-alt"></i>
                </div>
            </div>

            <div className="in-title">
                <div className="list-pedidos">
                    <p>02</p>
                    <p> <span>Salmon Ahumado</span> <br/> Pure de Papas <br/> Consomé de pollo <br/> Ensalada de frutas <br/> J/Naranja</p>
                    <p>$ 5.500</p>
                    <p>1</p>
                    <i className="far fa-trash-alt"></i>
                </div>
            </div>

            <hr />

            <div className="total-resumen">

                <div className="info-resumen">
                    <p>SubTotal</p>
                    <p>9.000</p>
                    <p>Propina</p> 
                    <p>900</p>
                    <p className="resalt">Total</p>
                    <p className="resalt">9.900</p>
                </div>

                <div className="cont-btn">
                    <button className="boton-add">PEDIDO</button>
                </div>
            </div>
        </>
    )
}

export default Pedidosproductos;