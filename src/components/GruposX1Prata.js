import React, { useEffect, useState } from "react";
import "./GruposX1Prata.css";

const GrupoX1Prata = () => {
    
    const [dados1, setDados1] = useState([]);

    const rodada1 = [
        { jogador1: "-ф-РЭXЭBЯ-ф-", jogador2: "Corisco", placar1: 2, placar2: 0, grupo: 1 },
        { jogador1: "ANGEL MEXICANO", jogador2: "Ж-ѴЭИЭГЦЭСД-Ж", placar1: 1, placar2: 2, grupo: 1 },
        { jogador1: "Leleco", jogador2: "HIPKRAKEN", placar1: 2, placar2: 1, grupo: 2 },
        { jogador1: "PANTERA NEGRA BR", jogador2: "Solamento Paco", placar1: 0, placar2: 3, grupo: 2 },
        { jogador1: "Carla", jogador2: "Pedro", placar1: 1, placar2: 1, grupo: 3 },
        { jogador1: "Lucas", jogador2: "Fernanda", placar1: 2, placar2: 2, grupo: 3 },
        { jogador1: "Mariana", jogador2: "Luiz", placar1: 3, placar2: 0, grupo: 4 },
        { jogador1: "Gabriel", jogador2: "Eva", placar1: 1, placar2: 2, grupo: 4 },
        { jogador1: "Rafael", jogador2: "Bianca", placar1: 0, placar2: 0, grupo: 5 },
        { jogador1: "Luan", jogador2: "Raquel", placar1: 2, placar2: 3, grupo: 5 },
        { jogador1: "Diego", jogador2: "Juliana", placar1: 1, placar2: 1, grupo: 6 },
        { jogador1: "Felipe", jogador2: "Sandra", placar1: 3, placar2: 2, grupo: 6 },
        { jogador1: "Henrique", jogador2: "Viviane", placar1: 2, placar2: 1, grupo: 7 },
        { jogador1: "Renata", jogador2: "Alexandre", placar1: 1, placar2: 0, grupo: 7 },
        { jogador1: "Thiago", jogador2: "Camila", placar1: 2, placar2: 2, grupo: 8 },
        { jogador1: "Bruno", jogador2: "Caroline", placar1: 0, placar2: 3, grupo: 8 }
    ];
    const rodada2 = [
        { jogador1: "Corisco", jogador2: "Ж-ѴЭИЭГЦЭСД-Ж", placar1: 3, placar2: 0, grupo: 1 },
        { jogador1: "ANGEL MEXICANO", jogador2: "-ф-РЭXЭBЯ-ф-", placar1: 1, placar2: 2, grupo: 1 },
        { jogador1: "Leleco", jogador2: "HIPKRAKEN", placar1: 2, placar2: 1, grupo: 2 },
        { jogador1: "PANTERA NEGRA BR", jogador2: "Solamento Paco", placar1: 0, placar2: 3, grupo: 2 },
        { jogador1: "Carla", jogador2: "Pedro", placar1: 1, placar2: 1, grupo: 3 },
        { jogador1: "Lucas", jogador2: "Fernanda", placar1: 2, placar2: 2, grupo: 3 },
        { jogador1: "Mariana", jogador2: "Luiz", placar1: 3, placar2: 0, grupo: 4 },
        { jogador1: "Gabriel", jogador2: "Eva", placar1: 1, placar2: 2, grupo: 4 },
        { jogador1: "Rafael", jogador2: "Bianca", placar1: 0, placar2: 0, grupo: 5 },
        { jogador1: "Luan", jogador2: "Raquel", placar1: 2, placar2: 3, grupo: 5 },
        { jogador1: "Diego", jogador2: "Juliana", placar1: 1, placar2: 1, grupo: 6 },
        { jogador1: "Felipe", jogador2: "Sandra", placar1: 3, placar2: 2, grupo: 6 },
        { jogador1: "Henrique", jogador2: "Viviane", placar1: 2, placar2: 1, grupo: 7 },
        { jogador1: "Renata", jogador2: "Alexandre", placar1: 1, placar2: 0, grupo: 7 },
        { jogador1: "Thiago", jogador2: "Camila", placar1: 2, placar2: 2, grupo: 8 },
        { jogador1: "Bruno", jogador2: "Caroline", placar1: 0, placar2: 3, grupo: 8 }
    ];
    const rodada3 = [
        { jogador1: "Ж-ѴЭИЭГЦЭСД-Ж", jogador2: "-ф-РЭXЭBЯ-ф-", placar1: 3, placar2: 0, grupo: 1 },
        { jogador1: "Corisco", jogador2: "ANGEL MEXICANO", placar1: 1, placar2: 2, grupo: 1 },
        { jogador1: "Leleco", jogador2: "HIPKRAKEN", placar1: 2, placar2: 1, grupo: 2 },
        { jogador1: "PANTERA NEGRA BR", jogador2: "Solamento Paco", placar1: 0, placar2: 3, grupo: 2 },
        { jogador1: "Carla", jogador2: "Pedro", placar1: 1, placar2: 1, grupo: 3 },
        { jogador1: "Lucas", jogador2: "Fernanda", placar1: 2, placar2: 2, grupo: 3 },
        { jogador1: "Mariana", jogador2: "Luiz", placar1: 3, placar2: 0, grupo: 4 },
        { jogador1: "Gabriel", jogador2: "Eva", placar1: 1, placar2: 2, grupo: 4 },
        { jogador1: "Rafael", jogador2: "Bianca", placar1: 0, placar2: 0, grupo: 5 },
        { jogador1: "Luan", jogador2: "Raquel", placar1: 2, placar2: 3, grupo: 5 },
        { jogador1: "Diego", jogador2: "Juliana", placar1: 1, placar2: 1, grupo: 6 },
        { jogador1: "Felipe", jogador2: "Sandra", placar1: 3, placar2: 2, grupo: 6 },
        { jogador1: "Henrique", jogador2: "Viviane", placar1: 2, placar2: 1, grupo: 7 },
        { jogador1: "Renata", jogador2: "Alexandre", placar1: 1, placar2: 0, grupo: 7 },
        { jogador1: "Thiago", jogador2: "Camila", placar1: 2, placar2: 2, grupo: 8 },
        { jogador1: "Bruno", jogador2: "Caroline", placar1: 0, placar2: 3, grupo: 8 }
    ];
    
    
    useEffect(() => {
        const fetchData1 = async () => {
            try {
                const response1 = await fetch('https://www.ww2cup.app.br/backend/organiza_grupos.php');
                const data1 = await response1.json();
                setDados1(data1);
            } catch (error) {
                console.error('Erro ao buscar dados da primeira URL:', error);
            }
        };

        fetchData1();
    }, []);

    // Função para dividir os jogadores em grupos de 4
    const dividirJogadoresEmGrupos = (jogadores) => {
        const grupos = [];
        for (let i = 0; i < jogadores.length; i += 4) {
            grupos.push(jogadores.slice(i, i + 4));
        }
        return grupos;
    };

    return (
        <div className="conteudoGruposX1Prata">
            <h1>Fase de Grupos</h1>
            {/* Mapeando cada grupo de 4 jogadores da primeira URL */}
            {dividirJogadoresEmGrupos(dados1).map((grupo1, index) => (
                <div key={index} className="grupo">
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
                            {/* Mapeando os jogadores dentro de cada grupo da primeira URL */}
                            {grupo1.map((jogador, jogadorIndex) => (
                                <tr key={jogadorIndex}>
                                    <td>{jogador.nickname}</td>
                                    <td>{jogador.pontos}</td>
                                    <td>{jogador.kills}</td>
                                    <td>{jogador.pc}</td>
                                </tr>
                            ))}
                            
                            <tr>
                                <td colSpan="4">
                                <h3>Rodada 1</h3>
                                {rodada1.map((partida, i) => {
            if (partida.grupo === index + 1) {
                return (
                    <div className="rodada1" key={i}>
                        <span>{partida.jogador1}</span><span>{partida.placar1}</span>x
                        <span>{partida.placar2}</span><span>{partida.jogador2}</span><br />
                    </div>
                );
            }
            return null;
        })}
                                    
                                </td>
                            </tr>

                            <tr>
                                <td colSpan="4">
                                <h3>Rodada 2</h3>
        {rodada2.map((partida, i) => {
            if (partida.grupo === index + 1) {
                return (
                    <div className="rodada1" key={i}>
                        <span>{partida.jogador1}</span><span>{partida.placar1}</span>x
                        <span>{partida.placar2}</span><span>{partida.jogador2}</span><br />
                    </div>
                );
            }
            return null;
        })}
                                </td>
                            </tr>

                            <tr>
                                <td colSpan="4">
                                <h3>Rodada 1</h3>
        {rodada3.map((partida, i) => {
            if (partida.grupo === index + 1) {
                return (
                    <div className="rodada2" key={i}>
                        <span>{partida.jogador1}</span><span>{partida.placar1}</span>x
                        <span>{partida.placar2}</span><span>{partida.jogador2}</span><br />
                    </div>
                );
            }
            return null;
        })}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            ))}
            
        </div>
    );
}

export default GrupoX1Prata;
