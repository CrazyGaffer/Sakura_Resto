import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
    const [selectedLang, setSelectedLang] = useState('EN');
    // 'EN' as the default language

    const handleScroll = (e, targetId) => {
        e.preventDefault();
        const element = document.getElementById(targetId);
        if (element) {
            const yOffset = -80;
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    const handleLanguageChange = (lang) => {
        setSelectedLang(lang);
        // If you are using a translation library, you can also trigger the language change here
        // i18n.changeLanguage(lang);
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">Sakura Resto</div>
            <ul className="navbar-links">
                <li>
                    <a href="#hero" onClick={(e) => handleScroll(e, 'hero')}>
                        Home
                    </a>
                </li>
                <li>
                    <a href="#about" onClick={(e) => handleScroll(e, 'about')}>
                        About us
                    </a>
                </li>
                <li>
                    <a href="#menu" onClick={(e) => handleScroll(e, 'menu')}>
                        Menu
                    </a>
                </li>
                <li>
                    <a href="#private-events" onClick={(e) => handleScroll(e, 'private-events')}>
                        Private events
                    </a>
                </li>
                <li>
                    <a href="#contact" onClick={(e) => handleScroll(e, 'contact')}>
                        Contacts
                    </a>
                </li>
            </ul>
            <div className="navbar-languages">
                <button
                    className={`lang-btn ${selectedLang === 'EN' ? 'active' : ''}`}
                    onClick={() => handleLanguageChange('EN')}
                >
                    EN
                </button>
                <button
                    className={`lang-btn ${selectedLang === 'EST' ? 'active' : ''}`}
                    onClick={() => handleLanguageChange('EST')}
                >
                    EST
                </button>
                <button
                    className={`lang-btn ${selectedLang === 'RU' ? 'active' : ''}`}
                    onClick={() => handleLanguageChange('RU')}
                >
                    RU
                </button>
            </div>
        </nav>
    );
}

export default Navbar;