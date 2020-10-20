import React from "react";



import "../../Styles/product.css"

function Product({store}){

    

    return(
        <>
            {
                store.map((item, index)=>{
                    return(
                            <div className="product" key={index}>
                                <div className="flex-element">
                                    <img  src={item.img} alt="" />
                                </div>
                                <div className="abc">
                                    <div className="acompanamientos">
                                        <p className="title-product">{item.title}</p>
                                        <p className="description1">{item.descripcion}</p>
                                    </div>
                                    <div className="price-add">
                                        <p className="price">{item.precio}</p>
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