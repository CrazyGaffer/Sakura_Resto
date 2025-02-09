import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import './Contact.css';

function Contact() {
    return (
        <section id="contact" className="contact">
            <motion.div
                className="contact-content"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
            >
                <h2>Contact Us</h2>
                <p>Email: info@sakuraresto.com</p>
                <p>Phone: +1 234 567 890</p>
                <p>Address: 123 Sakura Street, Tokyo, Japan</p>

                {/* Social Icons */}
                <div className="social-icons">
                    <a
                        href="https://www.facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook"
                    >
                        <FaFacebook />
                    </a>
                    <a
                        href="https://www.instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                    >
                        <FaInstagram />
                    </a>
                    <a
                        href="https://www.twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Twitter"
                    >
                        <FaTwitter />
                    </a>
                </div>
            </motion.div>
        </section>
    );
}

export default Contact;
