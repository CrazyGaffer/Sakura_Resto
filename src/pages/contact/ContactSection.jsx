import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';
import './ContactSection.scss';

const ContactSection = () => {
    return (
        <section className="contact-section">
            <div className="container">
                <h2 className="section-title">Contact</h2>

                <div className="contact-layout">
                    <div className="contact-info">
                        <div className="info-item">
                            <div className="icon-container">
                                <FaMapMarkerAlt className="info-icon" />
                            </div>
                            <div className="info-content">
                                <h3>Our Location</h3>
                                <p>
                                    123 Culinary Avenue<br />
                                    Gourmet District<br />
                                    Food City, FC 98765
                                </p>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="icon-container">
                                <FaEnvelope className="info-icon" />
                            </div>
                            <div className="info-content">
                                <h3>Email Us</h3>
                                <p>
                                    contact@gourmetexperience.com<br />
                                    reservations@gourmetexperience.com
                                </p>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="icon-container">
                                <FaPhone className="info-icon" />
                            </div>
                            <div className="info-content">
                                <h3>Call Us</h3>
                                <p>
                                    Main: +372 5486 0852
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="map-integration">
                        <iframe
                            title="Restaurant Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0582162880693!2d-122.41941548468102!3d37.77492927975919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064c993ac7d%3A0x9a06f278c0e36dc0!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus"
                            frameBorder="0"
                            allowFullScreen=""
                            aria-hidden="false"
                            tabIndex="0"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;