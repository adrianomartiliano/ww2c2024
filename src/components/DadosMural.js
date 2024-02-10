import React, { useState, useEffect } from "react";

import "./DadosMural.css";

const DadosMural = () => {

    const [dados_mural, setDados_mural] = useState([]);
    //const urllocal = "http://localhost/backend/dados_mural.php";
    const urlexterna = "https://www.ww2cup.app.br/backend/dados_mural.php";

    useEffect(() => {
        const fetchData = async () => {
          
          try {
            
            const response = await fetch(urlexterna);
            if (!response.ok) {
              throw new Error('Erro ao fazer a requisição: ' + response.statusText);
            }
            
            const data = await response.json();
            setDados_mural(data);
    
          } catch (error) {
            console.error('Erro ao recuperar os dados:', error);
          }
        };
        fetchData();
      }, []);


    return (
        <div className="conteudoDadosMural">
            {dados_mural.map((item, i) => (
                <div key={i} className="viewRecado">
                    <h3>{item.nome}</h3>
                    <p>{item.recado}</p>
                    <span className="data_hora" >{item.data_hora}</span>
                    
                </div>
            ))}

        </div>
    )
}

export default DadosMural;