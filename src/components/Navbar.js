import { Link } from "react-router-dom"
import "./Navbar.css"

const Navbar = () => {
    return(
        <div className="containerNavBar">
            <div className="logoNavbar">
                <p>Logo</p>
            </div>
            <nav>
                <Link to="/" className="linkmenu">Home</Link>
                <Link to="/contato" className="linkmenu">Contato</Link>
            </nav>
        </div>
        
    )
}

export default Navbar;