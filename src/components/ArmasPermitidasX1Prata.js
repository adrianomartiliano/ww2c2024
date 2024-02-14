import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './ArmasPermitidasX1Prata.css';

import ArmasPrata from "../data/ArmasPrata";

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
        <h1>Colete e Especialidades</h1>

    </div>
    
  );
}

export default Slideshow;
