import React from "react";

import "./JogadoresConfirmadosX1Prata.css";

import IconWhats from "../assets/icons/icon-whatsapp.png";

const JogadoresConfirmadosX1Prata = () => {

    return(
        <div className="conteudoJogadoresConfirmadosX1Prata">
            <div className="linhaJogadorConfirmado">
                <div className="linhaTituloJogador">
                    <h3>JOGADOR</h3>
                </div>
                <div className="linhaJogadorConfirmado">
                    <p>Jogador 1</p><img className="iconWhats" src={IconWhats} alt="Icone Inscrição"></img>
                </div>
                <div className="linhaJogadorConfirmado">
                    <p>Jogador 1</p><img className="iconWhats" src={IconWhats} alt="Icone Inscrição"></img>
                </div>
                <div className="linhaJogadorConfirmado">
                    <p>Jogador 1</p><img className="iconWhats" src={IconWhats} alt="Icone Inscrição"></img>
                </div>
                <div className="linhaJogadorConfirmado">
                    <p>Jogador 1</p><img className="iconWhats" src={IconWhats} alt="Icone Inscrição"></img>
                </div>
            </div>
        </div>
    )
}

export default JogadoresConfirmadosX1Prata;