import React from "react";

//COMPONENTS


//CSS
import "./Torneios.css"
import X1Prata from "../components/X1Prata";
import CardX3 from "../components/CardX3";

const Torneios = () => {

    return (
        <div className="conteudoTorneios">
            <div className="containerModalidade">
                <CardX3 />
            </div>

        </div>
    )

}

export default Torneios;