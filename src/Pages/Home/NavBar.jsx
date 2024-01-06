import {useState, useEffect } from "react";
import {Link} from "react-scroll";

function Navbar() {
    const [navActive, setNavActive] = useState(false);


    const closeMenu = () => {
        setNavActive( false) 
    }

    useEffect(() => {
        const handleResize = () =>{
            if (window.innerWidth <= 500) {
                closeMenu
            }
        };
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        if (window.innerWidth <= 1200) {
            closeMenu;
        }
    }, []);

    return (
        <nav className="navbar">
            <div>
                <img src="./img/logo.svg" alt="Logo" />
            </div>
            
            <div className="navbar--items">
                <ul>
                    <li>
                        <Link  activeClass="navbar--active-content"
                        spy= {true}
                        smooth= {true}
                        offset={-70}
                        duration={500}
                        to="heroSection"
                        className="navbar--content">
                            Home
                        </Link>
                    </li>
                    
                    <li>
                        <Link  activeClass="navbar--active-content"
                        spy= {true}
                        smooth= {true}
                        offset={-70}
                        duration={500}
                        to="AboutMe"
                        className="navbar--content">
                            About Me
                        </Link>
                    </li>
                    <li>
                        <Link  activeClass="navbar--active-content"
                        spy= {true}
                        smooth= {true}
                        offset={-70}
                        duration={500}
                        to="MyPortfilio"
                        className="navbar--content">
                            Portfolio
                        </Link>
                    </li>
                    <li>
                        <Link  
                        activeClass="navbar--active-content"
                        spy= {true}
                        smooth= {true}
                        offset={-70}
                        duration={500}
                        to="Testimonials"
                        className="navbar--content">
                            Testimonials
                        </Link>
                    </li>
                </ul>
            </div>
            <Link  
            activeClass="navbar--active-content"
            spy= {true}
            smooth= {true}
            offset={20}
            duration={500}
            to="Contact"
            className="btn btn-outline-primary ">
                Contect Me
            </Link>
                  
        </nav>
    )
}

export default Navbar