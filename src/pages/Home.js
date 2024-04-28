import GrupoWhats from "../components/btnHome/GrupoWhats";
import Torneios from "../components/btnHome/Torneios";
import "./Home.css"

const Home = () => {
    return(
        <div className="conteudoHome">
            <Torneios />
            <img className="bannerProvisorio" src="https://ww2cup.app.br/images/banners/Campe%C3%A3o-torneio-x1-n%C3%ADvel-prata.png" ></img>
            <GrupoWhats/>
        </div>
    )
}

export default Home;