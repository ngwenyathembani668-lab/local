import { Link } from 'react-router';
import '../index.css';
import './Header.css';


function Header () {
    return (
        <>

        <nav>

            <div className="logo">
                <label>Local Lift <span>Digital</span></label>
            </div>

            <div className="nav-links">
                <ul>
                    <li>
                        <Link to={"/"}>
                            Home
                        </Link>
                        {/* <a href="#">Home</a> */}
                    </li>
                    <li>
                        <Link to={"/services"}>
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link to={"/about"}>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to={"/testimonials"}>
                            Testimonials
                        </Link>
                    </li>
                    <li>
                        <Link to={"/contact"}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="header-cta">
                <Link to={"/contact"}>
                    Free Audit
                </Link>
            </div>

        </nav>
        
        </>
    );
};


export default Header;