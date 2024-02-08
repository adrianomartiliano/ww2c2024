import { Link } from "react-router-dom"
import "./Navbar.css"
import { useState } from "react"

const Navbar = () => {

    const [menuAberto, setMenuAberto] = useState(false);

    

    const toggleMenu = () => {
        setMenuAberto(!menuAberto);
    };

    return(
        <div className="containerNavBar">
            <div className="logoNavbar">
                <Link to="/" onClick={menuAberto ? toggleMenu : undefined }><img src="../wwc2.png"></img></Link>
                
            </div>
            <div>

            <nav className={`navMenu${menuAberto ? ' aberto' : ''}`}>
                <Link to="/torneios" className="linkmenu" onClick={toggleMenu}>Torneios</Link>
                <Link to="/mural" className="linkmenu" onClick={toggleMenu}>Mural</Link>
            </nav>
            <div className="hamburger" onClick={toggleMenu}>
                <div className={`line ${menuAberto ? 'aberto' : ''}`}></div>
                <div className={`line ${menuAberto ? 'aberto' : ''}`}></div>
                <div className={`line ${menuAberto ? 'aberto' : ''}`}></div>
            </div>
            </div>
        </div>
        
    )
}

export default Navbar;