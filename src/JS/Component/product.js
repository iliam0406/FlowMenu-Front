import React, {useContext} from "react";
import {Context} from "../Store/store.js"

import "../../Styles/product.css"

function Product(){
    const { store } = useContext(Context);
    return(
        <>
        {!!store.entradas &&
		    store.entradas.results.map((entrada, i) =>{
                return(
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
                );
            })}
            

        </>
    )
}

export default Product;