import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link as ScrollLink } from 'react-scroll';
import './Navbar.css';

const Navbar = () => {
    const { t } = useTranslation();
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Retrieve translated nav items
    const navItems = [
        { id: 'home', label: t('navbar.home') },
        { id: 'about', label: t('navbar.about') },
        { id: 'menu', label: t('navbar.menu') },
        { id: 'gallery', label: t('navbar.gallery') },
        { id: 'events', label: t('navbar.events') },
        { id: 'footer', label: t('navbar.contact') }, // Assuming 'Contact' scrolls to the footer
    ];
    const toggleMenu = () => setMenuOpen(prev => !prev);
    const closeMenu = () => setMenuOpen(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
        return () => { document.body.style.overflow = 'auto'; };
    }, [menuOpen]);

    return (
        <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container">
                <div className="navbar-title">Sakura Resto</div>
                <nav className={`nav-menu ${menuOpen ? 'active' : ''}`}>
                    <ul>
                        {navItems.map((item) => (
                            <li key={item.id}>
                                <ScrollLink
                                    to={item.id}  // use the fixed id here
                                    smooth={true}
                                    duration={150}
                                    onClick={closeMenu}
                                >
                                    {item.label}
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