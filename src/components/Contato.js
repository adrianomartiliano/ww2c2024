import React from "react";
import "./contato.css";

const Contato = () => {
    return (
        <>
            <form action="#" method="POST" className="form_contato">
                <label className="label_form_contat">
                    <span for="nome" className="description_span_form">Nome: </span>
                    <input name="nome" className="input_form_contat"/>
                </label>
                <label className="label_form_contat">
                    <span for="email" className="description_span_form"> E-mail: </span>
                    <input name="email" className="input_form_contat"/>
                </label>
                <label className="label_form_contat">
                    <span for="recado" className="description_span_form">Recado: </span>
                    <textarea name="recado" className="input_form_contat"></textarea>
                </label>
            </form>
        </>
    )
}

export default Contato;