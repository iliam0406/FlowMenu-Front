import React  from "react";
import { Link, useHistory } from "react-router-dom";
import "../../Styles/footer.css"

const Listpasos = [ "/entrada", "/bebidas", "/agregados"]



function Footer(){
    const history = useHistory()

    const Cambioetapa = () =>{
       //Aqui etapa activa desde el store
       const etapactiva = 0; //
        const nuevaetapa = etapactiva + 1;
        if(Listpasos[nuevaetapa] == undefined){
           //etapa termino el pedido
        }
        else{
            history.push(Listpasos[nuevaetapa])
        }
    }

    return(
        <footer>
            <button onClick={Cambioetapa}>NO DESEO</button> 
        </footer>
    )
}

export default Footer;