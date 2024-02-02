import { Link } from "react-router-dom"
import "./Navbar.css"

const Navbar = () => {
    return(
        <div className="containerNavBar">
            <div className="logoNavbar">
                <Link to="/"><img src="../wwc2.png"></img></Link>
                
            </div>
            <nav>
                <Link to="/contato" className="linkmenu">Mural</Link>
            </nav>
        </div>
        
    )
}

export default Navbar;