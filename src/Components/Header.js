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
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="">Services</a>
                    </li>
                    <li>
                        <a href="">About</a>
                    </li>
                    <li>
                        <a href="">Testimonials</a>
                    </li>
                    <li>
                        <a href="">Contact</a>
                    </li>
                </ul>
            </div>

            <div className="header-cta">
                <button>Free Audit</button>
            </div>

        </nav>
        
        </>
    );
};


export default Header;