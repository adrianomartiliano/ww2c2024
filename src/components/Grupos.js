import React, { useEffect, useState } from "react";

const Grupos = () =>{

    const [dados1, setDados1] = useState([]);

    const rodada1 = [
        { jogador1: "-ф-РЭXЭBЯ-ф-", jogador2: "Corisco", placar1: 2, placar2: 0, grupo: 1 },
        { jogador1: "ANGEL MEXICANO", jogador2: "Ж-ѴЭИЭГЦЭСД-Ж", placar1: 3, placar2: 0, grupo: 1 },
        { jogador1: "Leleco", jogador2: "HIPKRAKEN", placar1: 1, placar2: 1, grupo: 2 },
        { jogador1: "PANTERA NEGRA BR", jogador2: "Solamento Paco", placar1: 3, placar2: 0, grupo: 2 },
        { jogador1: "STEVEN", jogador2: "BABA YAGA", placar1: 1, placar2: 1, grupo: 3 },
        { jogador1: "SUKUNA", jogador2: "-P90-", placar1: 2, placar2: 1, grupo: 3 },
        { jogador1: "G Ф K Ц", jogador2: "SULY CARDNS", placar1: 2, placar2: 1, grupo: 4 },
        { jogador1: "ЯДСHД.СЦСД ВЯ", jogador2: "RM908", placar1: 1, placar2: 2, grupo: 4 },
        { jogador1: "Tu chocolatito", jogador2: "_J_A_V_O_H_I_R_", placar1: 3, placar2: 0, grupo: 5 },
        { jogador1: "-Sдvдge Mфde-", jogador2: "Pito Loco", placar1: 3, placar2: 0, grupo: 5 },
        { jogador1: "HALCON NEGRO", jogador2: "KILLER_MOUSTER", placar1: 0, placar2: 3, grupo: 6 },
        { jogador1: "Joleno matador", jogador2: "XERIFE", placar1: 1, placar2: 0, grupo: 6 },
        { jogador1: "Fábio Ismael", jogador2: "Rei julian", placar1: 3, placar2: 0, grupo: 7 },
        { jogador1: "Venezolano", jogador2: "Raio Diurno", placar1: 1, placar2: 2, grupo: 7 },
        { jogador1: "Hyoga Japan", jogador2: "Lokinho13", placar1: 0, placar2: 3, grupo: 8 },
        { jogador1: "edvan", jogador2: "samurai Hyoga", placar1: 0, placar2: 3, grupo: 8 }
    ];
    const rodada2 = [
        { jogador1: "Corisco", jogador2: "Ж-ѴЭИЭГЦЭСД-Ж", placar1: 0, placar2: 0, grupo: 1 },
        { jogador1: "ANGEL MEXICANO", jogador2: "-ф-РЭXЭBЯ-ф-", placar1: 0, placar2: 3, grupo: 1 },
        { jogador1: "HIPKRAKEN", jogador2: "Solamente Paco", placar1: 0, placar2: 0, grupo: 2 },
        { jogador1: "PANTERA NEGRA BR", jogador2: "Leleco", placar1: 0, placar2: 0, grupo: 2 },
        { jogador1: "BABA YAGA", jogador2: "-P90-", placar1: 0, placar2: 0, grupo: 3 },
        { jogador1: "SUKUNA", jogador2: "STEVEN", placar1: 0, placar2: 3, grupo: 3 },
        { jogador1: "SULY CARDNS", jogador2: "RM908", placar1: 1, placar2: 2, grupo: 4 },
        { jogador1: "ЯДСHД.СЦСД ВЯ", jogador2: "G Ф K Ц", placar1: 0, placar2: 3, grupo: 4 },
        { jogador1: "_J_A_V_O_H_I_R_", jogador2: "Pito Loco", placar1: 3, placar2: 0, grupo: 5 },
        { jogador1: "-Sдvдge Mфde-", jogador2: "Tu chocolatito", placar1: 3, placar2: 0, grupo: 5 },
        { jogador1: "KILLER_MOUSTER", jogador2: "XERIFE", placar1: 2, placar2: 0, grupo: 6 },
        { jogador1: "Joleno matador", jogador2: "HALCON NEGRO", placar1: 3, placar2: 0, grupo: 6 },
        { jogador1: "Rei julian", jogador2: "Raio Diurno", placar1: 3, placar2: 0, grupo: 7 },
        { jogador1: "Venezolano", jogador2: "Fábio Ismael", placar1: 0, placar2: 3, grupo: 7 },
        { jogador1: "Lokinho13", jogador2: "samurai Hyoga", placar1: 1, placar2: 2, grupo: 8 },
        { jogador1: "edvan", jogador2: "Hyoga Japan", placar1: 0, placar2: 3, grupo: 8 }
    ];
    const rodada3 = [
        { jogador1: "Ж-ѴЭИЭГЦЭСД-Ж", jogador2: "-ф-РЭXЭBЯ-ф-", placar1: 0, placar2: 3, grupo: 1 },
        { jogador1: "Corisco", jogador2: "ANGEL MEXICANO", placar1: 0, placar2: 0, grupo: 1 },
        { jogador1: "Solamento Paco", jogador2: "Leleco", placar1: 0, placar2: 0, grupo: 2 },
        { jogador1: "HIPKRAKEN", jogador2: "PANTERA NEGRA BR", placar1: 0, placar2: 0, grupo: 2 },
        { jogador1: "-P90-", jogador2: "STEVEN", placar1: 0, placar2: 0, grupo: 3 },
        { jogador1: "BABA YAGA", jogador2: "SUKUNA", placar1: 0, placar2: 0, grupo: 3 },
        { jogador1: "RM908", jogador2: "G Ф K Ц", placar1: 0, placar2: 0, grupo: 4 },
        { jogador1: "SULY CARDNS", jogador2: "ЯДСHД.СЦСД ВЯ", placar1: 0, placar2: 0, grupo: 4 },
        { jogador1: "Pito Loco", jogador2: "Tu chocolatito", placar1: 0, placar2: 0, grupo: 5 },
        { jogador1: "_J_A_V_O_H_I_R_", jogador2: "-Sдvдge Mфde-", placar1: 0, placar2: 3, grupo: 5 },
        { jogador1: "XERIFE", jogador2: "HALCON NEGRO", placar1: 3, placar2: 0, grupo: 6 },
        { jogador1: "KILLER_MOUSTER", jogador2: "Joleno matador", placar1: 2, placar2: 1, grupo: 6 },
        { jogador1: "Raio Diurno", jogador2: "Fábio Ismael", placar1: 0, placar2: 3, grupo: 7 },
        { jogador1: "Rei julian", jogador2: "Venezolano", placar1: 0, placar2: 0, grupo: 7 },
        { jogador1: "samurai Hyoga", jogador2: "Hyoga Japan", placar1: 3, placar2: 0, grupo: 8 },
        { jogador1: "Lokinho13", jogador2: "edvan", placar1: 3, placar2: 0, grupo: 8 }
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

    return(
        <div>
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
                    <div className="rodada" key={i}>
                        <span className="jogador">{partida.jogador1}</span><span className="placar">{partida.placar1}</span>x
                        <span className="placar">{partida.placar2}</span><span className="jogador">{partida.jogador2}</span><br />
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
                    <div className="rodada" key={i}>
                        <span className="jogador">{partida.jogador1}</span><span className="placar">{partida.placar1}</span>x
                        <span className="placar">{partida.placar2}</span><span className="jogador">{partida.jogador2}</span><br />
                    </div>
                );
            }
            return null;
        })}
                                </td>
                            </tr>

                            <tr>
                                <td colSpan="4">
                                <h3>Rodada 3</h3>
        {rodada3.map((partida, i) => {
            if (partida.grupo === index + 1) {
                return (
                    <div className="rodada" key={i}>
                        <span className="jogador">{partida.jogador1}</span><span  className="placar" >{partida.placar1}</span>x
                        <span className="placar">{partida.placar2}</span><span className="jogador">{partida.jogador2}</span><br />
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
    )
}

export default Grupos;