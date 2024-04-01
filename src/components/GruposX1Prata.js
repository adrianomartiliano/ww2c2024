import React, { useState } from "react";

import "./GruposX1Prata.css";

import Grupos from "./Grupos";
import Oitavas from "./Oitavas";
import Quartas from "./Quartas";
import Semi from "./Semi";
import Final from "./Final";

const GrupoX1Prata = () => {
    
    
    const [faseAtual, setFaseAtual] = useState('semifinal');

    const avancarFase = () => {
        switch (faseAtual) {
            case 'grupos':
                setFaseAtual('oitavas');
                break;
            case 'oitavas':
                setFaseAtual('quartas');
                break;
            case 'quartas':
                setFaseAtual('semifinal');
                break;
            case 'semifinal':
                setFaseAtual('final');
                break;
            default:
                break;
        }
    };

    const voltarFase = () => {
        switch (faseAtual) {
            case 'oitavas':
                setFaseAtual('grupos');
                break;
            case 'quartas':
                setFaseAtual('oitavas');
                break;
            case 'semifinal':
                setFaseAtual('quartas');
                break;
            case 'final':
                setFaseAtual('semifinal');
                break;
            default:
                break;
        }
    };

    
    
    
    

    

    return (
        <div className="conteudoGruposX1Prata">
            <h1>
                {faseAtual === 'grupos' && 'Fase de Grupos'}
                {faseAtual === 'oitavas' && 'Oitavas de Final'}
                {faseAtual === 'quartas' && 'Quartas de Final'}
                {faseAtual === 'semifinal' && 'Semifinais'}
                {faseAtual === 'final' && 'Final'}
            </h1>
            <div className="divBtnMudardeFase"> 
                <button onClick={voltarFase} className="botaoVoltar" disabled={faseAtual === 'grupos'}>Voltar</button>
                <button onClick={avancarFase} className="botaoAvancar" disabled={faseAtual === 'final'}>Avançar</button>
            </div>
            {faseAtual === 'grupos' && <Grupos />}
            {faseAtual === 'oitavas' && <Oitavas />}
            {faseAtual === 'quartas' && <Quartas />}
            {faseAtual === 'semifinal' && <Semi />}
            {faseAtual === 'final' && <Final />}
            
            
        </div>
    );
}

export default GrupoX1Prata;
