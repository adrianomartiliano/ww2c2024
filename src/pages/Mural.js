import React from "react";
import { Link } from "react-router-dom";
import "./Mural.css";
import DadosMural from "../components/DadosMural";

const Mural = () => {
    return(
        <div className="conteudoMural">
            <Link to="/contato"><button className="btn_form_submit">Escreva no Mural</button></Link>
            
            <DadosMural/>
            
        </div>
    )
}

export default Mural;