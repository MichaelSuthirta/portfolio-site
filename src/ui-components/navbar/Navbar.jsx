import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar(){
    return(
        <nav className="absolute bg-[#2f2f2f] z-[100] height-[60px] w-screen top-0 left-0">
            <ul className="list-none pl-[20px] pr-[30px] float-right">
                <li className="list-none pl-[20px] pr-[30px] float-right">
                    <div>
                        <NavLink to={"/contacts"}
                            className={
                                ({isActive}) =>
                                    isActive ? 'text-[#c9c9c9]' : ''
                            }
                        >
                            <p className="m-auto">Contacts</p>
                        </NavLink>
                    </div>
                </li>
                <li className="list-none pl-[20px] pr-[30px] float-right">
                    <div>
                        <NavLink to={"/certifications"}
                            className={
                                ({isActive}) =>
                                    isActive ? 'text-[#c9c9c9]' : ''
                            }
                        >
                            <p className="m-auto">Certifications</p>
                        </NavLink>
                    </div>
                </li>
                <li className="list-none pl-[20px] pr-[30px] float-right">
                    <div>
                        <NavLink to={"/experiences"}
                            className={
                                ({isActive}) =>
                                    isActive ? 'text-[#c9c9c9]' : ''
                            }
                        >
                            <p className="m-auto">Experiences</p>
                        </NavLink>
                    </div>
                </li>
                <li className="list-none pl-[20px] pr-[30px] float-right">
                    <div>
                        <NavLink to={"/education"}
                            className={
                                ({isActive}) =>
                                    isActive ? 'text-[#c9c9c9]' : ''
                            }
                        >
                            <p className="m-auto">Education</p>
                        </NavLink>
                    </div>
                </li>
                <li className="list-none pl-[20px] pr-[30px] float-right">
                    <div>
                        <NavLink to={"/"}
                            className={
                                ({isActive}) =>
                                    isActive ? 'text-[#c9c9c9]' : ''
                            }
                        >
                            <p className="m-auto">Home</p>
                        </NavLink>
                    </div>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;