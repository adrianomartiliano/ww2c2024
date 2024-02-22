import React, { useEffect, useState } from "react";
import "./GruposX1Prata.css";

const GrupoX1Prata = () => {
    const urlexterna = "https://www.ww2cup.app.br/backend/organiza_grupos.php";
    const [grupos, setGrupos] = useState([]);

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
    }, []);

    // Função para renderizar as partidas de uma rodada entre os jogadores do mesmo grupo
    const renderizarPartidas = (grupo, index) => {
        const partidas = [];
        for (let i = 0; i < grupo.jogadores.length; i += 2) {
            partidas.push(
                <div key={i}>
                    <p>{grupo.jogadores[i].nickname} x {grupo.jogadores[i + 1].nickname}</p>
                </div>
            );
        }
        return (
            <div>
                <h3>Rodada {grupo.rodadaAtual}</h3>
                {partidas}
                <div>
                    <button disabled={grupo.rodadaAtual === 1} onClick={() => irParaRodada(index, -1)}>&lt; Anterior</button>
                    <button disabled={grupo.rodadaAtual === 3} onClick={() => irParaRodada(index, 1)}>Próxima &gt;</button>
                </div>
            </div>
        );
    };

    const irParaRodada = (index, incremento) => {
        console.log(incremento);
        setGrupos(prevGrupos => {
            const novosGrupos = [...prevGrupos];
            const novaRodada = novosGrupos[index].rodadaAtual + incremento;

            if (novaRodada >= 0 && novaRodada <= 3) {
                novosGrupos[index].rodadaAtual = novaRodada;
            }

            return novosGrupos;
        });
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
                        {/* Renderizar as partidas abaixo de cada grupo */}
                        {/* {renderizarPartidas(grupo, index)} */}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GrupoX1Prata;
