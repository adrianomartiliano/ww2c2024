import GrupoWhats from "../components/btnHome/GrupoWhats";
import Torneios from "../components/btnHome/Torneios";
import "./Home.css"

const Home = () => {
    return(
        <div className="conteudoHome">
            <Torneios />
            <GrupoWhats/>
        </div>
    )
}

export default Home;