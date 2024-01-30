import React, { useState } from "react";
import "./contato.css";

const Contato = () => {

    const clans = ["CAN", "CÃES", "LBR", "VKN", "WIN", "HDL", "VZLA", "1973"]

    const [nome, setNome] = useState("");
    const [clan, setClan] = useState("");
    const [recado, setRecado] = useState("");

    const handleNome = (e) => {
        setNome(e.target.value);
    }
    const handleRecado = (e) => {
        setRecado(e.target.value);
    }
    const handleClan = (e) => {
        setClan(e.target.value);
    }
    const urlsugestao = "https://www.ww2cup.app.br/data/sugestao.json";

    const handleSubmit = async (e) => {
        e.preventDefault();

        const objetoRecado = {
            nome, 
            clan,
            recado
        }

        const response = await fetch(urlsugestao, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(objetoRecado)
            
        })

        if(!response.ok){
            console.log('Erro ao enviar dados')
        } else{
            alert("Sugestão enviada com sucesso! Obrigado!")
        }
}

    return (
        <div className="conteudo">
            <form onSubmit={handleSubmit} className="form_contato">
                <label className="label_form_contat">
                    <h2 className="title_form">Envie sua sugestão</h2>
                </label>
                <label htmlFor="nome" className="label_form_contat">
                    <span className="description_span_form">Nome</span>
                    <input name="nome" className="input_form_contat" onChange={handleNome}/>
                </label>
                <label className="label_form_contat">
                    <span className="description_span_form">Clan</span>
                    <select className="input_form_contat" onChange={handleClan}>
                        <option></option>
                        {clans.map((item, index) => (
                            <option key={index}>{item}</option>
                        ))}
                    </select>
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