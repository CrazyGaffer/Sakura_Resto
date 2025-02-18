import React from 'react';
import './Footer.css';
import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">

                {/* ---------- TOP ROW ---------- */}
                <div className="footer-top">
                    {/* Column 1: Working Hours */}
                    <div className="footer-column">
                        <h3>Working Hours</h3>
                        <p>Mon-Thu: 11 AM – 11 PM</p>
                        <p>Fri: 11 AM – 12 AM</p>
                        <p>Sat: 12 PM – 12 AM</p>
                        <p>Sun: 12 PM – 10 PM</p>
                    </div>

                    {/* Column 2: Contact */}
                    <div className="footer-column">
                        <h3>Contact</h3>
                        <p>info@sakuraresto.ee</p>
                        <p>+372 5486 0852</p>
                        <p>Pärnu mnt 32, Tallinn</p>
                    </div>

                    {/* Column 3: Social Icons */}
                    <div className="footer-column">
                        <h3>Follow Us</h3>
                        <div className="footer-socials">
                            <a
                                href="https://www.facebook.com/sakuraresto.ee/?locale=et_EE"
                                aria-label="Facebook"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaFacebookF />
                            </a>
                            <a
                                href="https://www.instagram.com/sakuraresto.ee/?hl=en"
                                aria-label="Instagram"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaInstagram />
                            </a>
                            <a
                                href="https://www.tiktok.com/@sakuraresto.ee"
                                aria-label="TikTok"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaTiktok />
                            </a>
                        </div>
                    </div>

                    {/* Column 4: Quick Links */}
                    <div className="footer-column">
                        <h3>Quick Links</h3>
                        <div className="footer-links-row">
                            <a href="#home">Home</a>
                            <a href="#menu">Menu</a>
                            <a href="#gallery">Gallery</a>
                            <a href="#events">Events</a>
                        </div>
                    </div>
                </div>

                {/* ---------- BOTTOM ROW ---------- */}
                <div className="footer-bottom">
                    <span>
                        &copy; {new Date().getFullYear()} All rights reserved. Developed by Jakeovski
                    </span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;