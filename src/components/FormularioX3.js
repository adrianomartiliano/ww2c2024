import React, { useState, useEffect } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import "./FormularioX3.css"

const FormularioX3 = () => {
    const [dadosFormularioX3, setDadosFormularioX3] = useState({
        equipe: '',
        jogador1_nome: '',
        jogador1_id: '',
        jogador2_nome: '',
        jogador2_id: '',
        jogador3_nome: '',
        jogador3_id: '',
        clan: '',
        contato: ''
    });

    const urlexterna = "https://www.ww2cup.app.br/backend/armazena_equipe_x3.php";
    const urlQtdVagas = "https://www.ww2cup.app.br/backend/Jogadores_confirmados_x3.php"

    const [envioConfirmado, setEnvioConfirmado] = useState(false);
    const [qtdVagas, setQtdVagas] = useState(0);
    const [msgVagasCheias, setMsgVagasCheias] = useState(false);

    useEffect(() => {
        const fetchQtdVagas = async () => {
            try {  
                const response = await fetch(urlQtdVagas);
                if (!response.ok) {
                  throw new Error('Erro ao fazer a requisição: ' + response.statusText);
                }
                
                const data = await response.json();
                const qtdVagas = data.length;

                if (qtdVagas === 20){
                    setMsgVagasCheias(true)
                }
            } catch (error) {
                console.error('Erro ao recuperar os dados:', error);
            }
        };
        fetchQtdVagas();
    }, []);

    const lidarContato = (value) => {
        setDadosFormularioX3({ ...dadosFormularioX3, contato: value });
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setDadosFormularioX3({ ...dadosFormularioX3, [name]: value });
    };
    
    const handleSubmit = async (event) => {

        console.log('Dados a serem enviados:', dadosFormularioX3); 
        event.preventDefault();
        
        try {
            const response = await fetch(urlexterna, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dadosFormularioX3)
            });
            if (response.ok) {
                setEnvioConfirmado(true);
                setDadosFormularioX3({
                    equipe: '',
                    jogador1_nome: '',
                    jogador1_id: '',
                    jogador2_nome: '',
                    jogador2_id: '',
                    jogador3_nome: '',
                    jogador3_id: '',
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

    const clans = ["1973", "BOSS", "CAN", "CÂES", "FURA", "GTLA", "HARD", "HDL", "LBR", "MOW", "MUND",  "OTTO", "PRO", "SOLO", "TEAM", "TRIB", "TS", "UZ", "VKN", "VZMX", "VZLA", "WIN", "WORG", "WU"];

    return (
        <div className='conteudoInscricaoX1Prata'>
            <form onSubmit={handleSubmit} className='form_contato'>
                <h2 className='title_form'>INSCRIÇÃO - X3</h2>
                {envioConfirmado && <p ><span className='confirm_envio'>Confirmado.</span></p>}
                {msgVagasCheias && <p ><span className='msgSemVagas'>SEM VAGAS!</span></p>}
                <label className='label_form_contat'>
                    <span className="description_span_form">Equipe</span>
                    <input
                        type="text"
                        name="equipe"
                        className="input_form_contat" 
                        value={dadosFormularioX3.equipe}
                        onChange={handleChange}
                        required
                    />
                </label>
                <div className='jogador_input'>
                    <label className='label_form_contat'>
                        <span className="description_span_form">Jogador 1</span>
                        <input
                            type="text"
                            name="jogador1_nome"
                            className="input_form_contat" 
                            value={dadosFormularioX3.jogador1_nome}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label className='label_form_contat label_id'>
                        <span className="description_span_form">ID</span>
                        <input
                            type="text"
                            name="jogador1_id"
                            className="input_form_contat" 
                            value={dadosFormularioX3.jogador1_id}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
                
                <div className='jogador_input'>
                    <label className='label_form_contat'>
                        <span className="description_span_form">Jogador 2</span>
                        <input
                            type="text"
                            name="jogador2_nome"
                            className="input_form_contat" 
                            value={dadosFormularioX3.jogador2_nome}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label className='label_form_contat label_id'>
                        <span className="description_span_form">ID</span>
                        <input
                            type="text"
                            name="jogador2_id"
                            className="input_form_contat" 
                            value={dadosFormularioX3.jogador2_id}
                            onChange={handleChange}
                            required
                        />
                    </label>

                </div>

                <div className='jogador_input'>
                    <label className='label_form_contat'>
                        <span className="description_span_form">Jogador 3</span>
                        <input
                            type="text"
                            name="jogador3_nome"
                            className="input_form_contat" 
                            value={dadosFormularioX3.jogador3_nome}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label className='label_form_contat label_id'>
                        <span className="description_span_form">ID</span>
                        <input
                            type="text"
                            name="jogador3_id"
                            className="input_form_contat" 
                            value={dadosFormularioX3.jogador3_id}
                            onChange={handleChange}
                            required
                        />
                    </label>

                </div>

                

                <label className='label_form_contat'>
                    <span className="description_span_form">Clã</span>
                    <select
                        name="clan"
                        className="input_form_contat" 
                        value={dadosFormularioX3.clan}
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
                        value={dadosFormularioX3.contato}
                        onChange={lidarContato}
                        className='input_form_contat'
                        required
                    />
                </label>
                
                <label className="label_form_contat">
                    <button className="btn_form_submit" type="submit" disabled={envioConfirmado || msgVagasCheias}>
                        {envioConfirmado ? 'Enviado' : 'Cadastrar'}
                    </button>
                </label>
            </form>
            
        </div>
    );
}

export default FormularioX3;

