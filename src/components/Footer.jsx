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
                        <p>Mon-Fri: 11 AM – 10 PM</p>
                        <p>Sat-Sun: 12 PM – 11 PM</p>
                    </div>

                    {/* Column 2: Contact */}
                    <div className="footer-column">
                        <h3>Contact</h3>
                        <p>info@sakuraresto.ee</p>
                        <p>+1 234 567 890</p>
                        <p>Pärnu mnt 32, Tallinn</p>
                    </div>

                    {/* Column 3: Social Icons */}
                    <div className="footer-column">
                        <h3>Follow Us</h3>
                        <div className="footer-socials">
                            <a href="https://facebook.com" aria-label="Facebook"><FaFacebookF /></a>
                            <a href="https://instagram.com" aria-label="Instagram"><FaInstagram /></a>
                            <a href="https://www.tiktok.com/" aria-label="TikTok"><FaTiktok/></a>
                        </div>
                    </div>

                    {/* Column 4: Quick Links */}
                    <div className="footer-column">
                        <h3>Quick Links</h3>
                        <div className="footer-links-row">
                            <a href="#home">Home</a>
                            <a href="#menu">Menu</a>
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