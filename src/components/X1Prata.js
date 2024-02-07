import { Link } from "react-router-dom";
import "./X1Prata.css"

import React from "react";

const X1Prata = () => {
    return(
        <div className="conteudoX1Prata">
            <h3>X1 - NÍVEL PRATA</h3>
            <div className="conteudoMenuX1prata">
                <div className="linhaMenux1"><h4>PARTICIPAR</h4><Link to="inscricao-x1"><img className="iconTorneios" src="./inscricao.png" alt="Icone Inscrição"></img></Link></div>
                <div className="linhaMenux1"><h4>CONFIRMADOS</h4><img className="iconTorneios" src="./confirmados_.png" alt="Icone Inscrição"></img></div>
                <div className="linhaMenux1"><h4>REGRAS GERAIS</h4><img className="iconTorneios" src="./regras.png" alt="Icone Inscrição"></img></div>
                <div className="linhaMenux1"><h4>ARMAS PERMITIDAS</h4><img className="iconTorneios" src="./armas.png" alt="Icone Inscrição"></img></div>

            </div>

        </div>
    )
}

export default X1Prata;