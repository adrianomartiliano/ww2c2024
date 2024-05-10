import React, { useState, useEffect } from "react";

import "./TabelaX3.css";

const RodadasX3 = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [rodadaAtual, setRodadaAtual] = useState(1); // Inicializa na primeira rodada
  const url = "https://ww2cup.app.br/backend/rodadas-x3.php";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Erro ao buscar os dados");
        }
        const data = await response.json();
        setData(data);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>Erro: {error}</div>;
  }

  // Filtrar os dados com base na rodada atual
  const dadosRodadaAtual = data.filter((item) => item.rodada === rodadaAtual.toString());

  // Função para avançar a rodada
  const avancarRodada = () => {
    if (rodadaAtual < 2) { 
      setRodadaAtual(rodadaAtual + 1);
    }
  };

  // Função para voltar a rodada
  const voltarRodada = () => {
    if (rodadaAtual > 1) {
      setRodadaAtual(rodadaAtual - 1);
    }
  };

  return (
    <div>
      <div className="BtnRodadas">
        <button onClick={voltarRodada} disabled={rodadaAtual === 1}>&lang;</button>
        <h2>Rodada {rodadaAtual}</h2>
        <button onClick={avancarRodada} disabled={rodadaAtual === 2}>&rang;</button>
      </div>
      
      <div className="containerCard">
        {dadosRodadaAtual.map((partida, index) => (
          <div className="cardPartida" key={index}>
            <div className="equipe"><span>{partida.equipe1}</span><span className="placar">{partida.placar1}</span></div>
            <div className="equipe"><span>{partida.equipe2}</span><span className="placar">{partida.placar2}</span></div>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default RodadasX3;
