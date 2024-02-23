import React from "react";
import "./rodada.css";

const Rodada1 = ({ grupo }) => {
    const gerarPartidas = (grupo) => {
        const partidas = [];
        const jogadores = grupo.jogadores;

        // Gerar partidas para cada jogador com os adversários do mesmo grupo
        for (let i = 0; i < 1; i++) {
            partidas.push(
                <div>
                    <p>{jogadores[0].nickname} x {jogadores[2].nickname}</p>
                <p>{jogadores[1].nickname} x {jogadores[3].nickname}</p>
                </div>
                 );
        }
        return partidas;
    };

    return (
        <div className="rodada">
            <h3>RODADA 1</h3>
            {/* Renderizar as partidas da rodada 1 */}
            {gerarPartidas(grupo)}
        </div>
    );
};




export default Rodada1;
