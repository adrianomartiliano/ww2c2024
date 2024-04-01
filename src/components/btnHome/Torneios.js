import React from "react";
import { Link } from 'react-router-dom'
import "./Torneios.css";

const Torneios = () => {
    return (
        <div className="containerBtnTorneios">
            <Link to="torneios">
                <h1 className="TitleTorneios">Torneios
                    <img src="./trofeu.png"></img>
                </h1>
            </Link>
            {/* https://chat.whatsapp.com/FWn8OESwX9j9e8rFa8NFkX */}
        </div>
    )
}

export default Torneios;