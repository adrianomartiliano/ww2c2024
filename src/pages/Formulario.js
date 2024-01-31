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
            const response = await fetch('http://localhost/backend/adicionar_dados.php', {
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
        <form onSubmit={handleSubmit}>
            <label>
                ID:
                <input
                    type="text"
                    name="id"
                    value={dadosFormulario.id}
                    onChange={handleChange}
                />
            </label>
            <label>
                Nickname:
                <input
                    type="text"
                    name="nickname"
                    value={dadosFormulario.nickname}
                    onChange={handleChange}
                />
            </label>
            <label>
                Clan:
                <input
                    type="text"
                    name="clan"
                    value={dadosFormulario.clan}
                    onChange={handleChange}
                />
            </label>
            <button type="submit">Enviar</button>
        </form>
    );
}

export default Formulario;
