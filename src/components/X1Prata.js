import "./X1Prata.css"

import React from "react";

const X1Prata = () => {
    return(
        <div className="conteudoX1Prata">
            <h3>X1 - Nível Prata</h3>
            <div className="conteudoMenuX1prata">
                <div className="linhaMenux1"><h4>Inscreva-se</h4><img className="iconTorneios" src="./inscricao.png" alt="Icone Inscrição"></img></div>
                <div className="linhaMenux1"><h4>Inscritos</h4><img className="iconTorneios" src="./confirmados_.png" alt="Icone Inscrição"></img></div>
                <div className="linhaMenux1"><h4>Regras</h4><img className="iconTorneios" src="./regras.png" alt="Icone Inscrição"></img></div>
                <div className="linhaMenux1"><h4>Armas Permitidas</h4><img className="iconTorneios" src="./armas.png" alt="Icone Inscrição"></img></div>

            </div>

        </div>
    )
}

export default X1Prata;