import React, { useState } from "react";
import "./contato.css";

const Contato = () => {

    const clans = ["CAN", "CÃES", "LBR", "VKN", "WIN", "HDL", "VZLA", "1973"]

    const [nome, setNome] = useState();
    const [email, setEmail] = useState();
    const [recado, setRecado] = useState();

    const handleNome = (e) => {
        setNome(e.target.value);
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handleRecado = (e) => {
        setRecado(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className="conteudo">
            <form onSubmit={handleSubmit} method="POST" className="form_contato">
                <label className="label_form_contat">
                    <h2 className="title_form">Envie sua sugestão</h2>
                </label>
                <label htmlFor="nome" className="label_form_contat">
                    <span className="description_span_form">Nome</span>
                    <input name="nome" className="input_form_contat" onChange={handleNome}/>
                </label>
                <label className="label_form_contat">
                    <span className="description_span_form">Clan</span>
                    <select className="input_form_contat">
                        <option></option>
                        {clans.map((item, index) => (
                            <option key={index}>{item}</option>
                        ))}
                    </select>
                </label>
                <label htmlFor="email" className="label_form_contat">
                    <span className="description_span_form">E-mail</span>
                    <input name="email" className="input_form_contat" onChange={handleEmail}/>
                </label>
                
                <label htmlFor="recado" className="label_form_contat">
                    <span className="description_span_form">Recado</span>
                    <textarea name="recado" className="input_form_contat" onChange={handleRecado}></textarea>
                </label>
                <label className="label_form_contat">
                    <button className="btn_form_submit">Enviar</button>
                </label>
            </form>
        </div>
    )
}

export default Contato;