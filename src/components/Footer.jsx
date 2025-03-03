import './Footer.css';
import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

function Footer() {
    const { t } = useTranslation();

    return (
        <footer className="footer">
            <div className="footer-container">
                {/* ---------- TOP ROW ---------- */}
                <div className="footer-top">
                    {/* Column 1: Working Hours */}
                    <div className="footer-column">
                        <h3>{t('footer.workingHours')}</h3>
                        <p>{t('footer.monThu')}</p>
                        <p>{t('footer.fri')}</p>
                        <p>{t('footer.sat')}</p>
                        <p>{t('footer.sun')}</p>
                    </div>

                    {/* Column 2: Contact */}
                    <div className="footer-column">
                        <h3>{t('footer.contact')}</h3>
                        <p>{t('footer.email')}</p>
                        <p>{t('footer.phone')}</p>
                        <p>{t('footer.address')}</p>
                    </div>

                    {/* Column 3: Social Icons */}
                    <div className="footer-column">
                        <h3>{t('footer.followUs')}</h3>
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
                        <h3>{t('footer.quickLinks')}</h3>
                        <div className="footer-links-row">
                            <a href="#home">{t('footer.home')}</a>
                            <a href="#about">{t('footer.about')}</a>
                            <a href="#menu">{t('footer.menu')}</a>
                            <a href="#events">{t('footer.events')}</a>
                        </div>
                    </div>
                </div>

                {/* ---------- BOTTOM ROW ---------- */}
                <div className="footer-bottom">
          <span>
            &copy; {new Date().getFullYear()} {t('footer.rightsReserved')}
          </span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;