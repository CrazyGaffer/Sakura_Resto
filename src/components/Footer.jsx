import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-item">
                    <span>Mon-Fri 11 AM–10 PM, Sat-Sun 12 PM–11 PM</span>
                </div>
                <div className="footer-item">
                    <span>info@sakuraresto.ee | +1 234 567 890 | Pärnu mnt 32, Tallinn</span>
                </div>
                <div className="footer-item">
                    <span>
            <a href="#home">Home</a> |{' '}
                        <a href="#menu">Menu</a> |{' '}
                        <a href="#reservations">Reservations</a> |{' '}
                        <a href="#contact">Contact</a>
          </span>
                </div>
            </div>
            <div className="footer-bottom">
                <span>&copy; {new Date().getFullYear()} All rights reserved</span>
                <span>Developed by Jakeovski</span>
            </div>
        </footer>
    );
}

export default Footer;
