import React, { useEffect, useState } from "react";
import "./rodada.css";

const Rodada2 = () => {
    const [grupo, setGrupo] = useState(null);

    useEffect(() => {
        const urlexternaRodada1 = "https://www.ww2cup.app.br/backend/organiza_jogadores_rodada.php";
        
        const fetchData = async () => {
            try {
                const resposta = await fetch(urlexternaRodada1);
                if (!resposta.ok) {
                    throw new Error('Erro ao fazer a requisição: ' + resposta.statusText);
                }
                const jogadores = await resposta.json();
                // Se os dados forem um array de jogadores, ajuste como necessário
                const novoGrupo = { jogadores: jogadores, rodadaAtual: 2 };
                setGrupo(novoGrupo);
            } catch (error) {
                console.error('Erro ao buscar dados: ', error);
            }
        };

        fetchData();
    }, []);

    const gerarPartidas = (grupo) => {
        if (!grupo) return null;
        const partidas = [];
        const jogadores = grupo.jogadores;

        // Gerar partidas para cada jogador com os adversários do mesmo grupo
        for (let i = 0; i < 1; i++) {
            partidas.push(
                <div>
                    <p>{jogadores[2].nickname} x {jogadores[3].nickname}</p>
                    <p>{jogadores[1].nickname} x {jogadores[0].nickname}</p>
                </div>
            );
        }
        return partidas;
    };

    return (
        <div className="rodada">
            <h3>RODADA 2</h3>
            {/* Renderizar as partidas da rodada 2 */}
            {gerarPartidas(grupo)}
        </div>
    );
};

export default Rodada2;
