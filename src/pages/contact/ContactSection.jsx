import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';
import './ContactSection.scss';
import { useTranslation } from "react-i18next";
import {GOOGLE_MAP_EMBED_URL} from "../../config/mapConfig.js";

const ContactSection = () => {
    const location = GOOGLE_MAP_EMBED_URL;
    const { t } = useTranslation();

    const highlightText = (text) => {
        return text
            .replace(/(X6 Pärnu mnt 43A)/g, '<strong>$1</strong>')
            .replace(/(SAKURA15)/g, '<strong>$1</strong>');
    };

    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <div className="contact-header">
                    <div className="small-rectangle-features"></div>
                    <h4 className="features-subtitle">{t('contact.subtitle')}</h4>
                    <h2 className="features-title">{t('contact.heading')}</h2>
                    <p className="features-title">{t('contact.subheading')}</p>
                </div>

                <div className="contact-layout">
                    <div className="left-column">
                        <div className="contact-info">

                            <div className="info-item">
                                <div className="icon-container">
                                    <FaEnvelope className="info-icon" />
                                </div>
                                <div className="info-content">
                                    <h3>{t('contact.email.title')}</h3>
                                    <p>{t('contact.email.address')}</p>
                                </div>
                            </div>

                            <div className="info-item">
                                <div className="icon-container">
                                    <FaPhone className="info-icon" />
                                </div>
                                <div className="info-content">
                                    <h3>{t('contact.phone.title')}</h3>
                                    <p>{t('contact.phone.number')}</p>
                                </div>
                            </div>

                            <div className="info-item location-item">
                                <div className="icon-container">
                                    <FaMapMarkerAlt className="info-icon" />
                                </div>
                                <div className="info-content">
                                    <h3>{t('contact.location.title')}</h3>
                                    <p className="address-text">
                                        {t('contact.location.address')}
                                    </p>
                                    <div className="parking-details">
                                        <p dangerouslySetInnerHTML={{
                                            __html: highlightText(t('parking.description'))
                                        }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="map-integration">
                        <iframe
                            title="Restaurant Location"
                            src={location}
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