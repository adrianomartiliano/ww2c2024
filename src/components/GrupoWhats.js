import React from "react";
import "./GrupoWhats.css";

const GrupoWhats = () => {
    return (
        <div className="GrupoWhats">
            <h1>Grupo de Avisos<img src="./aviso-grupowhats.png"></img></h1>
            <p>Grupo destinado apenas para receber avisos sobre datas e informações relacionadas aos torneios criados aqui por esse website.
                Não será aberto para mensagens.
            </p>
            <a href="https://chat.whatsapp.com/FWn8OESwX9j9e8rFa8NFkX" target="_blank">Entrar no Grupo</a>
            {/* https://chat.whatsapp.com/FWn8OESwX9j9e8rFa8NFkX */}
        </div>
    )
}

export default GrupoWhats;