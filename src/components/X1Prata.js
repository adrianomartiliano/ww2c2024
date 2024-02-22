import { Link } from "react-router-dom";
import "./X1Prata.css";

import React from "react";

const X1Prata = () => {
    return(
        <div className="conteudoX1Prata">
            <h3>X1 - NÍVEL PRATA</h3>
            <div className="conteudoMenuX1prata">
                <div className="linhaMenux1"><Link to="inscricao-x1"><img className="iconTorneios" src="./inscricao.png" alt="Icone Inscrição"></img></Link><h4>PARTICIPAR</h4></div>
                <div className="linhaMenux1"><Link to="jogadores-confirmados"><img className="iconTorneios" src="./confirmados_.png" alt="Icone Inscrição"></img></Link><h4>CONFIRMADOS</h4></div>
                <div className="linhaMenux1"><Link to="regras-x1-prata"><img className="iconTorneios" src="./regras.png" alt="Icone Inscrição"></img></Link><h4>REGRAS GERAIS</h4></div>
                <div className="linhaMenux1"><Link to="equipamentos-permitidos"><img className="iconTorneios" src="./armas.png" alt="Icone Inscrição"></img></Link><h4>ARMAS PERMITIDAS</h4></div>
                <div className="linhaMenux1"><Link to="tabela-x1-prata"><img className="iconTorneios" src="./tabelas-icon.png" alt="Icone Inscrição"></img></Link><h4>TABELAS</h4></div>
            </div>

        </div>
    )
}

export default X1Prata;