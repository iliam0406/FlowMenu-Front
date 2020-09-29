import React from "react";

import "../../Styles/product.css"

function Product({store}){
    return(
        <>
            {
                store.map((product, i)=>{
                    return(
                            <div className="product" key={i}>
                                <div className="flex-element">
                                    <img  src={product.img} alt="" />
                                </div>
                                <div className="abc">
                                    <div className="acompanamientos">
                                        <p className="title-product">{product.title}</p>
                                        <p className="description1">{product.descripcion}</p>
                                    </div>
                                    <div className="price-add">
                                        <p className="price">{product.precio}</p>
                                        <button className="boton-add" type="submit">AÑADIR</button>
                                    </div>
                                </div>
                            </div>
                    )
                })
            }

        </>
                );
}

export default Product;