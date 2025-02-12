import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import './Navbar.css';

const navItems = ['Home', 'About', 'Menu', 'Events', 'Contact'];

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    // Toggle the hamburger menu state
    const toggleMenu = () => {
        setMenuOpen(prevState => !prevState);
    };

    // Close the mobile menu when a link is clicked
    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <header className="navbar">
            <div className="navbar-container">
                <div className="navbar-title">Sakura Resto</div>

                {/* Navigation Links */}
                <nav className={`nav-menu ${menuOpen ? 'active' : ''}`}>
                    <ul>
                        {navItems.map(item => (
                            <li key={item}>
                                <ScrollLink
                                    to={item.toLowerCase()}
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

                {/* Hamburger / Cross Icon */}
                <div
                    className={`hamburger ${menuOpen ? 'active' : ''}`}
                    onClick={toggleMenu}
                >
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </div>
        </header>
    );
};

export default Navbar;