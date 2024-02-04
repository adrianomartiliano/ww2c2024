import { Link } from "react-router-dom"
import "./Navbar.css"
import { useState } from "react"

const Navbar = () => {

    const [menuAberto, setMenuAberto] = useState(false);

    

    const toggleMenu = () => {
        setMenuAberto(!menuAberto);
        console.log(menuAberto)
    };

    return(
        <div className="containerNavBar">
            <div className="logoNavbar">
                <Link to="/" onClick={toggleMenu}><img src="../wwc2.png"></img></Link>
                
            </div>
            <div>

            <nav className={`navMenu${menuAberto ? ' aberto' : ''}`}>
                <Link to="/mural" className="linkmenu" onClick={toggleMenu}>Torneios</Link>
                <Link to="/" className="linkmenu" onClick={toggleMenu}>Mural</Link>
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