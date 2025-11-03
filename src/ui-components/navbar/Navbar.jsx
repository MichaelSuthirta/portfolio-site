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
                        <a href="#">Home</a>
                    </div>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;