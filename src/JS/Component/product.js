import React from "react";

import "../../Styles/product.css"

function Product(){
    return(
        <>
            <div className="product">
                <div className="flex-element">
                    <img  src="/img/ensalada.png" alt="" />
                </div>
                <div className="abc">
                    <div className="acompanamientos">
                        <p className="title-product">Ensalada de Estación</p>
                        <p className="description1">Tomate, Lechuga, Zanahoria, Pepino</p>
                    </div>
                    <div className="price-add">
                        <p className="price">$700</p>
                        <button className="boton-add" type="submit">AÑADIR</button>
                    </div>
                </div>
            </div>

            <div className="product">
            <img src="/img/consome.png" alt="" />
            <div className="abc">
                <div className="acompanamientos">
                    <p className="title-product">Consomé de Pollo</p>
                    <p className="description1">Nada como un rico consomé de pollo!</p>
                </div>
                <div className="price-add">
                    <p className="price">$400</p>
                    <button className="boton-add" type="submit">AÑADIR</button>
                </div>
            </div>
        </div>

        <div className="product">
            <img src="/img/cesar.png" alt="" />
            <div className="abc">
                <div className="acompanamientos">
                    <p className="title-product">Ensalada Cesar</p>
                    <p className="description1">Lechuga, Salsa Cesar, crutones de pan, queso parmesano.</p>
                </div>
                <div className="price-add">
                    <p className="price">$1000</p>
                    <button className="boton-add" type="submit">AÑADIR</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default Product;