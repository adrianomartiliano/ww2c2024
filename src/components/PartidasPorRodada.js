import React, { useState } from "react";

const PartidasPorRodada = ({ rodadas }) => {
  const [rodadaAtual, setRodadaAtual] = useState(0);

  const avancarRodada = () => {
    if (rodadaAtual < rodadas.length - 1) {
      setRodadaAtual(rodadaAtual + 1);
    }
  };

  const voltarRodada = () => {
    if (rodadaAtual > 0) {
      setRodadaAtual(rodadaAtual - 1);
    }
  };

  return (
    <div>
      <h2>Rodada {rodadaAtual + 1}</h2>
      <ul>
        {rodadas[rodadaAtual].map((partida, index) => (
          <li key={index}>
            {partida.equipe1} x {partida.equipe2}
          </li>
        ))}
      </ul>
      <div>
        <button onClick={voltarRodada} disabled={rodadaAtual === 0}>
          Voltar
        </button>
        <button onClick={avancarRodada} disabled={rodadaAtual === rodadas.length - 1}>
          Avançar
        </button>
      </div>
    </div>
  );
};

export default PartidasPorRodada;
