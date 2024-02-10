import React, { useState, useEffect } from "react";

import "./JogadoresConfirmadosX1Prata.css";

import IconWhats from "../assets/icons/icon-whatsapp.png";

const JogadoresConfirmadosX1Prata = () => {

    const [jogadores, setJogadores] = useState([]);
    const [modalAberto, setModalAberto] = useState(false);
    const [jogadorSelecionado, setJogadorSelecionado] = useState(null);
    const urlexterna = "https://www.ww2cup.app.br/backend/Jogadores_confirmados_x1_prata.php"

    const toggleModal = (jogador) => {
      setModalAberto(!modalAberto);
      setJogadorSelecionado(jogador);
  };

    useEffect(() => {
        const fetchData = async () => {
          
          try {
            
            const response = await fetch(urlexterna);
            if (!response.ok) {
              throw new Error('Erro ao fazer a requisição: ' + response.statusText);
            }
            
            const data = await response.json();
            setJogadores(data);
    
          } catch (error) {
            console.error('Erro ao recuperar os dados:', error);
          }
        };
        fetchData();
      }, []);


        

    return(
        <div className="conteudoJogadoresConfirmadosX1Prata">
            <div className="linhaJogadorConfirmado">
                <div className="linhaTituloJogador">
                    <h3>COMPETIDORES CONFIRMADOS NO TORNEIO!</h3>
                </div>
                <div className="linhaJogadorConfirmado">
                    {jogadores.map((jogador, i) => (
                        <li 
                            
                            key={i}>
                              <span onClick={() => toggleModal(jogador)}>{jogador.nickname}
                            </span><a href={`https://wa.me/${jogador.contato}`} 
                            target="_blanl">
                            <img className="iconWhats" 
                                src={IconWhats} 
                                alt="Icone Inscrição"></img></a></li>
                    ))}
                    {modalAberto && jogadorSelecionado && (
                      <div className="modal">
                        <div className="modal-conteudo">
                            <h2>{jogadorSelecionado.nickname}</h2>
                            <p>ID: {jogadorSelecionado.id}</p>
                            <p>Clan: {jogadorSelecionado.clan}</p>
                            <button onClick={() => setModalAberto(false)}>X</button>
                        </div>
                      </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default JogadoresConfirmadosX1Prata;