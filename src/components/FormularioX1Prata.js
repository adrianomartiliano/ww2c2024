import React, { useState } from 'react';
import "./FormularioX1Prata.css"

const FormularioX1Prata = () => {
    const [dadosFormularioX1Prata, setDadosFormularioX1Prata] = useState({
        id: '',
        nickname: '',
        clan: '',
        contato: ''
    });

    const urllocal = "http://localhost/backend/armazena_recado.php";
    const urlexterna = "https://www.ww2cup.app.br/backend/armazena_User_x1Prata.php";

    const [envioConfirmado, setEnvioConfirmado] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        
        if (name === 'recado') {
            // Limita o número de caracteres apenas para o campo de "recado"
            if (value.length <= 300) {
                setDadosFormularioX1Prata({ ...dadosFormularioX1Prata, [name]: value });
                setCaracteresRestantes(300 - value.length);
            }
        } else {
            // Se não for do campo "recado", atualize o estado normalmente
            setDadosFormulario({ ...dadosFormulario, [name]: value });
        }
    };

    const handleKeyPress = (event) => {
        // Verifica se a tecla pressionada é "Enter"
        if (event.key === 'Enter') {
            // Evita o comportamento padrão (envio do formulário e quebra de linha)
            event.preventDefault();
        }
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

    return (
        <div className='conteudo'>
            <form onSubmit={handleSubmit} className='form_contato'>

                <h2 className='title_form'>INSCRIÇÃO</h2>
                {envioConfirmado && <p ><span className='confirm_envio'>Inscrição confirmada! Obrigado.</span>{dadosFormulario.nome}</p>}
                <label className='label_form_contat'>
                    <span className="description_span_form">ID</span>
                    <input
                        type="text"
                        name="nome"
                        className="input_form_contat" 
                        value={dadosFormulario.id}
                        onChange={handleChange}
                    />
                </label>
                <label className='label_form_contat'>
                    <span className="description_span_form">NICKNAME</span>
                    <input
                        type="text"
                        name="nickname"
                        className="input_form_contat" 
                        value={dadosFormulario.nickname}
                        onChange={handleChange}
                    />
                </label>
                <label className='label_form_contat'>
                    <span className="description_span_form">CLAN</span>
                    <input
                        type="text"
                        name="clan"
                        className="input_form_contat" 
                        value={dadosFormulario.clan}
                        onChange={handleChange}
                    />
                </label>
                <label className='label_form_contat'>
                    <span className="description_span_form">ID</span>
                    <input
                        type="text"
                        name="nome"
                        className="input_form_contat" 
                        value={dadosFormulario.contato}
                        onChange={handleChange}
                    />
                </label>
                
                <label className="label_form_contat">
                    <button className="btn_form_submit" type="submit">Cadastrar</button>
                </label>
            </form>
        </div>
    );
}

export default FormularioX1Prata;
