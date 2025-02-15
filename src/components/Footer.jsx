import './Footer.css';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="footer-hours">
                    <h3>Working Hours</h3>
                    <p>Mon-Fri: 11 AM – 10 PM</p>
                    <p>Sat-Sun: 12 PM – 11 PM</p>
                </div>
                <div className="footer-contact">
                    <h3>Contact</h3>
                    <p>info@sakuraresto.ee</p>
                    <p>+1 234 567 890</p>
                    <p>Pärnu mnt 32, Tallinn</p>
                </div>
                <div className="footer-links">
                    <h3>Quick Links</h3>
                    <p>
                        <a href="#home">Home</a> |{' '}
                        <a href="#menu">Menu</a> |{' '}
                        <a href="#events">Events</a>
                    </p>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="footer-info">
                    <span>&copy; {new Date().getFullYear()} All rights reserved</span>
                    <span>Developed by Jakeovski</span>
                </div>
                <div className="footer-socials">
                    <a href="https://facebook.com" aria-label="Facebook">
                        <FaFacebookF />
                    </a>
                    <a href="https://instagram.com" aria-label="Instagram">
                        <FaInstagram />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;