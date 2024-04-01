import { Link } from "react-router-dom";
import "./CardX3.css";

import React from "react";

const CardX3 = () => {
    return(
        <div className="containerCardX3">
            <h3>X3 - NÍVEL ELITE</h3>
            <div className="containerMenu">
                <div className="">
                    <Link to="inscricao-x3">
                        <img className="iconTorneios" src="./inscricao.png" alt="Icone Inscrição"></img>
                    </Link>
                    <h4>PARTICIPAR</h4>
                </div>

                <div className="">
                    <Link to="equipes-confirmadas-x3">
                        <img className="iconTorneios" src="./confirmados_.png" alt="Icone Inscrição"></img>
                    </Link>
                    <h4>EQUIPES</h4>
                </div>

                <div className="">
                    <Link to="regras-x3">
                        <img className="iconTorneios" src="./regras.png" alt="Icone Inscrição"></img>
                    </Link>
                    <h4>REGRAS GERAIS</h4>
                </div>

                <div className="">
                    <Link to="tabela-x3">
                        <img className="iconTorneios" src="./tabelas-icon.png" alt="Icone Inscrição"></img>
                    </Link>
                    <h4>TABELA</h4>
                </div>
            </div>

        </div>
    )
}

export default CardX3;