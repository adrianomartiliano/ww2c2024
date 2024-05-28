import React, { useState, useEffect } from "react";
import "./TabelaX3.css";

const RodadasX3 = () => {

  const atualizarodada = 4;

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [rodadaAtual, setRodadaAtual] = useState(atualizarodada); // Inicializa na primeira rodada
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar se o modal está aberto
  const [modalData, setModalData] = useState([]); // Estado para armazenar os dados do modal
  const url = "https://ww2cup.app.br/backend/rodadas-x3.php";
  const modalUrl = "https://ww2cup.app.br/backend/classificacao_x3.php"; // Defina a URL da segunda API aqui

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

  // Função para buscar dados da segunda URL quando o modal for aberto
  useEffect(() => {
    const fetchModalData = async () => {
      try {
        const response = await fetch(modalUrl);
        if (!response.ok) {
          throw new Error("Erro ao buscar os dados do modal");
        }
        const data = await response.json();
        setModalData(data);
      } catch (error) {
        setError(error.message);
      }
    };

    if (isModalOpen) {
      fetchModalData();
    }
  }, [isModalOpen, modalUrl]);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen); // Inverte o estado do modal
  };

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
    if (rodadaAtual < atualizarodada) {
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
      <div className="classificacao">
        <button className="Btnclassificacao" onClick={toggleModal}>Classificação</button>
      </div>
      <div className="BtnRodadas">
        <button onClick={voltarRodada} disabled={rodadaAtual === 1}>&lang;</button>
        <h2>Rodada {rodadaAtual}</h2>
        <button onClick={avancarRodada} disabled={rodadaAtual === atualizarodada}>&rang;</button>
      </div>
      
      <div className="containerCard">
        {dadosRodadaAtual.map((partida, index) => (
          <div className="cardPartida" key={index}>
            <div className="equipe"><span>{partida.equipe1}</span><span className="placar">{partida.placar1}</span></div>
            <div className="equipe"><span>{partida.equipe2}</span><span className="placar">{partida.placar2}</span></div>
          </div>
        ))}
      </div>
      
      {isModalOpen && (
  <div className="modal">
    <div className="modal-tabela-content">
      <span className="close" onClick={toggleModal}>&times; Fechar</span>
      <table className="modal-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Equipes</th>
            <th>Pontos</th>
            <th>Kills</th>
            <th>PC</th>
          </tr>
        </thead>
        <tbody>
          {/* Renderizando os dados */}
          {modalData.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.nome_equipe}</td>
              <td>{item.pontos}</td>
              <td>{item.kills}</td>
              <td>{item.pontos_combate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
)}

    </div>
  );
};

export default RodadasX3;
