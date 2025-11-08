import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar(){
    return(
        <nav className="navbar">
            <ul id="navbar-list">
                <li>
                    <div>
                        <Link to={"/contacts"}>
                            <p class="navbar-text">Contacts</p>
                        </Link>
                    </div>
                </li>
                <li>
                    <div>
                        <Link to={"/certifications"}>
                            <p class="navbar-text">Certifications</p>
                        </Link>
                    </div>
                </li>
                <li>
                    <div>
                        <Link to={"/experiences"}>
                            <p class="navbar-text">Experiences</p>
                        </Link>
                    </div>
                </li>
                <li>
                    <div>
                        <Link to={"/"}>
                            <p class="navbar-text">Home</p>
                        </Link>
                    </div>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;