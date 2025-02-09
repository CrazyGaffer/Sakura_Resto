import './Navbar.css';

function Navbar() {
    const handleScroll = (e, targetId) => {
        e.preventDefault();
        const element = document.getElementById(targetId);
        if (element) {
            // Calculate the offset position, e.g., subtract the navbar height (80px)
            const yOffset = -80; // negative value if navbar is fixed at the top
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
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
                <button className="lang-btn">EN</button>
                <button className="lang-btn">EST</button>
                <button className="lang-btn">RU</button>
            </div>
        </nav>
    );
}

export default Navbar;
