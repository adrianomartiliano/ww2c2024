import GrupoWhats from "../components/btnHome/GrupoWhats";
import Torneios from "../components/btnHome/Torneios";
import "./Home.css"

const Home = () => {
    return(
        <div className="conteudoHome">
            <Torneios />
            <div className="Card">
                <h1 className="h1Hall"><a href="#">Hall da Fama</a><img className="iconTorneios" src="../hall.png"></img></h1>
            </div>
            <GrupoWhats/>
        </div>
    )
}

export default Home;