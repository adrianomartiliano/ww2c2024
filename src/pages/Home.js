import GrupoWhats from "../components/GrupoWhats";
import "./Home.css"

const Home = () => {
    return(
        <div className="conteudoHome">
            <p className="avisoHome">
                Confira <a href="https://www.youtube.com/watch?v=WxKL-wtMK9k" target="_black">AQUI</a> como foi o sorteio da fase de grupos do torneio de X1 nível prata.
            </p>
            <GrupoWhats/>
            <h2 className="avisoHome"><a href="https://wa.me/5543999929497">ORGANIZADOR</a></h2>
        </div>
    )
}

export default Home;