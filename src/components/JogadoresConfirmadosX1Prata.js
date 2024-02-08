import React, { useState, useEffect } from "react";

import "./JogadoresConfirmadosX1Prata.css";

import IconWhats from "../assets/icons/icon-whatsapp.png";

const JogadoresConfirmadosX1Prata = () => {

    const [jogadores, setJogadores] = useState([]);
    const urlexterna = "https://www.ww2cup.app.br/backend/Jogadores_confirmados_x1_prata.php"

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

    const [linhaJogador, setLinhaJogador] = useState([]);

    const toggleJogador = (index) => {
        setLinhaJogador(prevState => {
            const newState = [...prevState];
            newState[index] = !newState[index];
            return newState;
        });
    };
        

    return(
        <div className="conteudoJogadoresConfirmadosX1Prata">
            <div className="linhaJogadorConfirmado">
                <div className="linhaTituloJogador">
                    <h3>COMPETIDORES CONFIRMADOS NO TORNEIO!</h3>
                </div>
                <div className="linhaJogadorConfirmado">
                    {jogadores.map((jogador, i) => (
                        <li 
                            onClick={()=> toggleJogador(i)}
                            className={`${linhaJogador[i] ? 'Teste' : ''}`}
                            key={i}>{jogador.nickname}
                            <a href={`https://wa.me/${jogador.contato}`} 
                            target="_blanl">
                            <img className="iconWhats" 
                                src={IconWhats} 
                                alt="Icone Inscrição"></img></a></li>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default JogadoresConfirmadosX1Prata;