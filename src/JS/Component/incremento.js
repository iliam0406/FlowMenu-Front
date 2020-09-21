import React from "react";

//Import Estilos Css
import "../../Styles/general.css"
import "../../Styles/incremento.css"

function Incremento(){
    return(
        <>
                <div class="box">
            <div class="i1">
                <p class="i1-1">Arroz Blanco</p>
                <p class="i1-2">Incluido</p>
            </div>
            <div class="i2">
                <button class="btn-cont">-</button>
                <div class="num-color">
                    <p>1</p>
                </div>
                <button class="btn-cont">+</button>
            </div>
            <div class="i3">
                <button class="boton-add">AÑADIR</button>
            </div>
        </div>

        <div class="box">
            <div class="i1">
                <p class="i1-1">Arroz Blanco</p>
                <p class="i1-2">Incluido</p>
            </div>
            <div class="i2">
                <button class="btn-cont">-</button>
                <div class="num-color">
                    <p>1</p>
                </div>
                <button class="btn-cont">+</button>
            </div>
            <div class="i3">
                <button class="boton-add">AÑADIR</button>
            </div>
        </div>

        <div class="box">
            <div class="i1">
                <p class="i1-1">Arroz Blanco</p>
                <p class="i1-2">Incluido</p>
            </div>
            <div class="i2">
                <button class="btn-cont">-</button>
                <div class="num-color">
                    <p>1</p>
                </div>
                <button class="btn-cont">+</button>
            </div>
            <div class="i3">
                <button class="boton-add">AÑADIR</button>
            </div>
        </div>
        </>
    )
}

export default Incremento;