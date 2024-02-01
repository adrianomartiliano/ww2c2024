import React, { useState } from 'react';

const Formulario = () => {
    const [dadosFormulario, setDadosFormulario] = useState({
        id: '',
        nickname: '',
        clan: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setDadosFormulario({ ...dadosFormulario, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('https://www.ww2cup.app.br/backend/armazena_recado.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dadosFormulario)
            });
            if (response.ok) {
                console.log('Dados adicionados com sucesso!');
                // Limpar o formulário ou realizar outra ação após a inserção dos dados
            } else {
                console.error('Erro ao adicionar dados.');
            }
        } catch (error) {
            console.error('Erro ao adicionar dados:', error);
        }
        console.log(dadosFormulario)
    };

    return (
        <div className='conteudo'>
        <form onSubmit={handleSubmit} className='form_contato'>
            <label className='label_form_contat'>
            <span className="description_span_form">ID</span>
                <input
                    type="text"
                    name="id"
                    className="input_form_contat" 
                    value={dadosFormulario.id}
                    onChange={handleChange}
                />
            </label>
            <label className="label_form_contat">
            <span className="description_span_form">Nickname</span>
                <input
                    type="text"
                    name="nickname"
                    className="input_form_contat" 
                    value={dadosFormulario.nickname}
                    onChange={handleChange}
                />
            </label>
            <label className="label_form_contat">
                <span className="description_span_form">Clan</span>
                <input
                    type="text"
                    className="input_form_contat" 
                    name="clan"
                    value={dadosFormulario.clan}
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

export default Formulario;
