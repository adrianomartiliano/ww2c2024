import React, { useEffect, useState } from "react";
import "./RegrasX1Prata.css";

const RegrasX1Prata = () => {
    const urlexterna = "https://ww2cup.app.br/backend/regras-x1-prata.php";
    const [regras, setRegras] = useState([]);
    const [showPartidas, setShowPartidas] = useState(false);
    const [showEquipamentos, setShowEquipamentos] = useState(false);
    const [showRodadas, setShowRodadas] = useState(false);
    const [showPontuacoes, setShowPontuacoes] = useState(false);
    const [showValidacao, setShowValidacao] = useState(false);
    const [showPunicao, setShowPunicao] = useState(false);
    const [showFormato, setShowFormato] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(urlexterna);
                if (!response.ok) {
                    throw new Error('Erro ao fazer a requisição: ' + response.statusText);
                }
                
                const dados = await response.json();
                setRegras(dados);
            } catch (error) {
                console.error('Erro ao recuperar os dados:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="conteudoRegras">
            
            <div className="menus-regras">
                <h1 className="titleRegras">REGULAMENTO</h1>
                <div className="secaoRegras">
                    <h3 onClick={() => setShowPartidas(!showPartidas)}>1 - Partidas</h3>
                    {showPartidas && regras
                        .filter(item => item.cod_grupo === "1")
                        .map((item, i) => (
                            <p key={i}>{item.cod} - {item.desc_regra}</p>
                        ))}
                </div>
                <div className="secaoRegras">
                    <h3 onClick={() => setShowEquipamentos(!showEquipamentos)}>2 - Equipamentos</h3>
                    {showEquipamentos && regras
                        .filter(item => item.cod_grupo === "2")
                        .map((item, i) => (
                            <p key={i}>{item.cod} - {item.desc_regra}</p>
                        ))}
                </div>
                <div className="secaoRegras">
                    <h3 onClick={() => setShowRodadas(!showRodadas)}>3 - Rodadas / Datas</h3>
                    {showRodadas && regras
                        .filter(item => item.cod_grupo === "3")
                        .map((item, i) => (
                            <p key={i}>{item.cod} - {item.desc_regra}</p>
                        ))}
                </div>
                <div className="secaoRegras">
                    <h3 onClick={() => setShowPontuacoes(!showPontuacoes)}>4 - Pontuações</h3>
                    {showPontuacoes && regras
                        .filter(item => item.cod_grupo === "4")
                        .map((item, i) => (
                            <p key={i}>{item.cod} - {item.desc_regra}</p>
                        ))}
                </div>
                <div className="secaoRegras">
                    <h3 onClick={() => setShowValidacao(!showValidacao)}>5 - Validação das Partidas</h3>
                    {showValidacao && regras
                        .filter(item => item.cod_grupo === "5")
                        .map((item, i) => (
                            <p key={i}>{item.cod} - {item.desc_regra}</p>
                        ))}
                </div>
                <div className="secaoRegras">
                    <h3 onClick={() => setShowPunicao(!showPunicao)}>6 - Punição</h3>
                    {showPunicao && regras
                        .filter(item => item.cod_grupo === "6")
                        .map((item, i) => (
                            <p key={i}>{item.cod} - {item.desc_regra}</p>
                        ))}
                </div>
                <div className="secaoRegras">
                    <h3 onClick={() => setShowFormato(!showFormato)}>7 - Formato do Torneio</h3>
                    {showFormato && regras
                        .filter(item => item.cod_grupo === "7")
                        .map((item, i) => (
                            <p key={i}>{item.cod} - {item.desc_regra}</p>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default RegrasX1Prata;
