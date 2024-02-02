import React, { useState } from 'react';
import "./contato.css"

const Formulario = () => {
    const [dadosFormulario, setDadosFormulario] = useState({
        nome: '',
        recado: ''
    });

    const urllocal = "http://localhost/backend/armazena_recado.php";
    const urlexterna = "https://www.ww2cup.app.br/backend/armazena_recado.php";

    const [envioConfirmado, setEnvioConfirmado] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setDadosFormulario({ ...dadosFormulario, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch(urllocal, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dadosFormulario)
            });
            if (response.ok) {
                setEnvioConfirmado(true);
                setDadosFormulario({
                    nome: '',
                    recado: ''
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

                <h2 className='title_form'>Escreva sua mensagem</h2>
                {envioConfirmado && <p ><span className='confirm_envio'>Recado gravado! Obrigado.</span>{dadosFormulario.nome}</p>}
                <label className='label_form_contat'>
                    <span className="description_span_form">Nome</span>
                    <input
                        type="text"
                        name="nome"
                        className="input_form_contat" 
                        value={dadosFormulario.nome}
                        onChange={handleChange}
                    />
                </label>
                <label className="label_form_contat">
                    <span className="description_span_form">Recado</span>
                    <textarea
                        name="recado"
                        className="input_form_contat" 
                        value={dadosFormulario.recado}
                        rows={5}
                        onChange={handleChange}>
                    </textarea>
                </label>
                
                <label className="label_form_contat">
                    <button className="btn_form_submit" type="submit">Cadastrar</button>
                </label>
            </form>
        </div>
    );
}

export default Formulario;
