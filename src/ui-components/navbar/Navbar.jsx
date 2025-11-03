import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar(){
    return(
        <nav className="navbar">
            <ul id="navbar-list">
                <li>
                    <div>
                        <a href="#">Contacts</a>
                    </div>
                </li>
                <li>
                    <div>
                        <a href="#">Certification</a>
                    </div>
                </li>
                <li>
                    <div>
                        <a href="#">Experiences</a>
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