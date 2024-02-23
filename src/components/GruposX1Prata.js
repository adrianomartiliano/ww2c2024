import React, { useEffect, useState } from "react";

import Rodada1 from "./Rodada1";
import Rodada2 from "./Rodada2";
import Rodada3 from "./Rodada3";

import "./GruposX1Prata.css";

const GrupoX1Prata = () => {
    const urlexterna = "https://www.ww2cup.app.br/backend/organiza_grupos.php";
    const [grupos, setGrupos] = useState([]);
    const [grupo, setGrupo] = useState(null);
    const [rodadaAtual, setRodadaAtual] = useState(1);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const resposta = await fetch(urlexterna);
                if (!resposta.ok) {
                    throw new Error('Erro ao fazer a requisição: ' + resposta.statusText);
                }
                const jogadores = await resposta.json();
                const grupos = [];

                // Organiza os jogadores em grupos de 4
                for (let i = 0; i < jogadores.length; i += 4) {
                    grupos.push({ jogadores: jogadores.slice(i, i + 4), rodadaAtual: 1 });
                }

                setGrupos(grupos);
            } catch (error) {
                console.error('Erro ao buscar dados: ', error);
            }
        };
        fetchData();

        const urlexternaRodada1 = "https://www.ww2cup.app.br/backend/organiza_jogadores_rodada.php";
        
        const ordem = async () => {
            try {
                const resposta = await fetch(urlexternaRodada1);
                if (!resposta.ok) {
                    throw new Error('Erro ao fazer a requisição: ' + resposta.statusText);
                }
                const jogadores = await resposta.json();
                // Se os dados forem um array de jogadores, ajuste como necessário
                const novoGrupo = { jogadores: jogadores, rodadaAtual: 1 };
                setGrupo(novoGrupo);
            } catch (error) {
                console.error('Erro ao buscar dados: ', error);
            }
        };

        ordem();
    }, []);

    

    // Função para mudar a rodada atual
    const mudarRodada = (novaRodada) => {
        setRodadaAtual(novaRodada);
    };

    return (
        <div className="conteudoGruposX1Prata">
            <div className="grupos">
                {grupos.map((grupo, index) => (
                    <div className="grupo" key={index}>
                        <h1>Grupo {index + 1}</h1>
                        <table>
                            <thead>
                                <tr>
                                    <th className="thNick">Nickname</th>
                                    <th className="thP">Pontos</th>
                                    <th className="thK">Kills</th>
                                    <th className="thPC">PC</th>
                                </tr>
                            </thead>
                            <tbody>
                                {grupo.jogadores.map((jogador, jogadorIndex) => (
                                    <tr key={jogadorIndex}>
                                        <td>{jogador.nickname}</td>
                                        <td>{jogador.pontos}</td>
                                        <td>{jogador.kills}</td>
                                        <td>{jogador.pc}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        {/* Renderizar o componente da rodada */}
                        
                        {rodadaAtual === 2 && <Rodada2 />}
                        {rodadaAtual === 3 && <Rodada3 />}
                        {/* Botões numerados para mudar de rodada */}
                        <div className="divBtnRodada">
                            {[1, 2, 3].map((numero) => (
                                <button
                                    key={numero}
                                    onClick={() => mudarRodada(numero)}
                                    className={numero === rodadaAtual ? "ativo btnRodada" : "btnRodada"}
                                >
                                    {numero}
                                </button>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GrupoX1Prata;
