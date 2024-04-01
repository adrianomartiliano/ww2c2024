import React, { useState, useEffect } from "react";

import "./JogadoresConfirmadosX1Prata.css";

import IconWhats from "../assets/icons/icon-whatsapp.png";

const ConfirmadosX3 = () => {

    const [equipes, setEquipe] = useState([]);
    const [modalAberto, setModalAberto] = useState(false);
    const [jogadorSelecionado, setJogadorSelecionado] = useState(null);
    const [vagasRestantes, setVagasRestantes] = useState(32);
    const urlexterna = "https://www.ww2cup.app.br/backend/Jogadores_confirmados_x3.php"

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
            setEquipe(data);

            const vagasOcupadas = data.length;
            const vagasDisponiveis = 30 - vagasOcupadas;
            setVagasRestantes(vagasDisponiveis);
    
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
                    <h3>EQUIPES</h3>
                    <p className="vagasRestantes">Vagas: {vagasRestantes}</p>
                </div>
                <div className="linhaJogadorConfirmado">
                    {equipes.map((jogador, i) => (
                        <li 
                            
                            key={i}>
                              <span onClick={() => toggleModal(jogador)}>{jogador.nome_equipe}
                            </span><a href={`https://wa.me/${jogador.contato_equipe}`} 
                            target="_blanl">
                            <img className="iconWhats" 
                                src={IconWhats} 
                                alt="Icone Inscrição"></img></a></li>
                    ))}
                    {modalAberto && jogadorSelecionado && (
                      <div className="modal">
                        <div className="modal-conteudo">
                            <h2>{jogadorSelecionado.nome_equipe}</h2>
                            <p>{jogadorSelecionado.jogador_1} - ID: {jogadorSelecionado.id_jogador_1}</p>
                            <p>{jogadorSelecionado.jogador_2} - ID: {jogadorSelecionado.id_jogador_2}</p>
                            <p>{jogadorSelecionado.jogador_3} - ID: {jogadorSelecionado.id_jogador_3}</p>
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

export default ConfirmadosX3;