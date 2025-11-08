import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar(){
    return(
        <nav className="navbar">
            <ul id="navbar-list">
                <li>
                    <div>
                        <NavLink to={"/contacts"}
                            className={
                                ({isActive}) =>
                                    isActive ? 'active' : ''
                            }
                        >
                            <p class="navbar-text">Contacts</p>
                        </NavLink>
                    </div>
                </li>
                <li>
                    <div>
                        <NavLink to={"/certifications"}
                            className={
                                ({isActive}) =>
                                    isActive ? 'active' : ''
                            }
                        >
                            <p class="navbar-text">Certifications</p>
                        </NavLink>
                    </div>
                </li>
                <li>
                    <div>
                        <NavLink to={"/experiences"}
                            className={
                                ({isActive}) =>
                                    isActive ? 'active' : ''
                            }
                        >
                            <p class="navbar-text">Experiences</p>
                        </NavLink>
                    </div>
                </li>
                <li>
                    <div>
                        <NavLink to={"/education"}
                            className={
                                ({isActive}) =>
                                    isActive ? 'active' : ''
                            }
                        >
                            <p class="navbar-text">Education</p>
                        </NavLink>
                    </div>
                </li>
                <li>
                    <div>
                        <NavLink to={"/"}
                            className={
                                ({isActive}) =>
                                    isActive ? 'active' : ''
                            }
                        >
                            <p class="navbar-text">Home</p>
                        </NavLink>
                    </div>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;