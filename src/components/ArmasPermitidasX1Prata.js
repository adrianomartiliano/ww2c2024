import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './ArmasPermitidasX1Prata.css';

import ArmasPrata from "../data/ArmasPrata";
import EquipamentosPrata from '../data/EquipamentosPrata';

const Slideshow = () => {
  return (
    <div className='conteudoArmasPermitidas'>
        <h1>Armas</h1>
        <div className="slide-container">
            <Slide>
                {ArmasPrata.map((ArmasPrata, index) => (
                <div key={index} className="each-slide" style={{'backgroundImage': `url(${ArmasPrata.src})`}}>
                    <div >
                    <span>{ArmasPrata.name}</span>
                    </div>
                </div>
                ))}
            </Slide>
        </div>
        <h1>Colete e Acessórios</h1>
        <div className="slide-container">
            <Slide>
                {EquipamentosPrata.map((Equipamento, i) => (
                <div key={i} className="each-slide equipamento2" style={{'backgroundImage': `url(${Equipamento.src})`}}>
                    <div >
                    <span>{Equipamento.name}</span>
                    </div>
                </div>
                ))}
            </Slide>
        </div>

    </div>
    
  );
}

export default Slideshow;
