import React, { useState } from 'react';

import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

import "./FormularioX1Prata.css"

const FormularioX1Prata = () => {
    const [dadosFormularioX1Prata, setDadosFormularioX1Prata] = useState({
        id: '',
        nickname: '',
        clan: '',
        contato: ''
    });

    //const urllocal = "http://localhost/backend/armazena_recado.php";
    const urlexterna = "https://www.ww2cup.app.br/backend/armazena_User_x1Prata.php";

    const [envioConfirmado, setEnvioConfirmado] = useState(false);

    const lidarContato = (value) => {
        setDadosFormularioX1Prata({ ...dadosFormularioX1Prata, contato: value });
    };
    const handleChange = (event) => {
        const {name, value } = event.target;
        let newValue = value

        if(name === 'id'){
            newValue = newValue.replace(/\D/g, '');
        }
        setDadosFormularioX1Prata({ ...dadosFormularioX1Prata, [name]: newValue });
    };
    

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try {
            const response = await fetch(urlexterna, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dadosFormularioX1Prata)
            });
            if (response.ok) {
                setEnvioConfirmado(true);
                setDadosFormularioX1Prata({
                    id: '',
                    nickname: '',
                    clan: '',
                    contato: ''
                });
            } else {
                console.error('Erro ao adicionar dados.');
            }
        } catch (error) {
            console.error('Erro ao adicionar dados:', error);
        }
        
    };

    const clans = ["1973", "BOSS", "CAN", "CÂES", "FURA", "GTLA", "HARD", "HDL", "LBR", "MOW", "OTTO", "PRO", "SOLO", "TEAM", "TRIB", "TS", "UZ", "VKN", "VZLA", "WIN", "WORG", "WU"];

    return (
        <div className='conteudoInscricaoX1Prata'>
            <form onSubmit={handleSubmit} className='form_contato'>

                <h2 className='title_form'>INSCRIÇÃO</h2>
                {envioConfirmado && <p ><span className='confirm_envio'>Confirmado.</span></p>}
                <label className='label_form_contat'>
                    <span className="description_span_form">ID</span>
                    <input
                        type="text"
                        name="id"
                        className="input_form_contat" 
                        value={dadosFormularioX1Prata.id}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label className='label_form_contat'>
                    <span className="description_span_form">NICKNAME</span>
                    <input
                        type="text"
                        name="nickname"
                        className="input_form_contat" 
                        value={dadosFormularioX1Prata.nickname}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label className='label_form_contat'>
                    <span className="description_span_form">CLÃ</span>
                    <select
                        name="clan"
                        className="input_form_contat" 
                        value={dadosFormularioX1Prata.clan}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Selecione o Clã</option>
                        {clans.map((clan, index) => (
                            <option key={index} value={clan}>{clan}</option>
                        ))}
                    </select>
                </label>
                <label className='label_form_contat'>
                    <span className="description_span_form">WHATSAPP</span>
                    <PhoneInput
                        name="contato"
                        value={dadosFormularioX1Prata.contato}
                        onChange={lidarContato}
                        className='input_form_contat'
                        required
                    />
                </label>
                
                
                <label className="label_form_contat">
                    <button className="btn_form_submit" type="submit" disabled={envioConfirmado}>
                        {envioConfirmado ? 'Enviando...' : 'Cadastrar'}
                    </button>
                </label>
            </form>
            
        </div>
    );
}

export default FormularioX1Prata;
