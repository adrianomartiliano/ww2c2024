import React from "react";
import "./rodada.css";

const Rodada2 = ({ grupo }) => {
    const gerarPartidas = (grupo) => {
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
