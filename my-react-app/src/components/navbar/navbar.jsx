import { Link } from "react-router-dom"
import "./navbar.css"
const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="nav-list">
                <li>
                    <Link to="/" className="nav-link">
                    Characters
                    </Link>
                </li>
                <li>
                    <Link to="/favourites" className="nav-link">
                    Favourites
                     </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar