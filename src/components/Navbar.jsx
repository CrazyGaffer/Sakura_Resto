import { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import './Navbar.css';

const navItems = ['Home', 'About', 'Menu', 'Gallery', 'Events', 'Contact'];

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(prevState => !prevState);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    // Update scroll behavior based on window scroll position
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Disable body scrolling when the menu is active
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        // Cleanup: reset overflow when component unmounts
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [menuOpen]);

    return (
        <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container">
                <div className="navbar-title">Sakura Resto</div>

                <nav className={`nav-menu ${menuOpen ? 'active' : ''}`}>
                    <ul>
                        {navItems.map(item => (
                            <li key={item}>
                                <ScrollLink
                                    to={item === 'Contact' ? 'footer' : item.toLowerCase()}
                                    smooth={true}
                                    duration={150}
                                    onClick={closeMenu}
                                >
                                    {item}
                                </ScrollLink>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </div>
        </header>
    );
};

export default Navbar;