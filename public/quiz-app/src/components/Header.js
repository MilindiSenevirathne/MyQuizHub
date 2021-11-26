import { Link } from "react-router-dom";
import "./Header.css";



const Header = () => {
    return(
        <div className="header">
            <Link to="/" className="title">My Quiz Hub</Link>
        </div>
    )
}

export default Header;