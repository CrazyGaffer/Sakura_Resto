import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import CountUp from 'react-countup';
import { GiKnifeFork, GiBonsaiTree } from 'react-icons/gi';
import { TbBowlChopsticksFilled } from 'react-icons/tb';
import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa';
import './About.css';
import interiorImage from '../../assets/aboutPage/interiorImage.jpeg';
import workingHours from '../../assets/aboutPage/workingHours.jpeg';

function About() {
    const { t } = useTranslation();
    // Two groups: 'monday-friday' and 'saturday-sunday'
    const [activeGroup, setActiveGroup] = useState('monday-friday');

    return (
        <section id="about" className="about">
            <div className="about-wrapper">
                <div className="about-content">
                    <div className="about-image">
                        <img src={interiorImage} alt="About us" />
                    </div>
                    <div className="about-text">
                        <div className="about-header">
                            <div className="small-rectangle-about"></div>
                            <h4 className="about-subtitle">{t('about.subtitle')}</h4>
                        </div>
                        <h2>{t('about.heading')}</h2>
                        <p>{t('about.content')}</p>
                        <div className="about-socials">
                            <a
                                href="https://www.facebook.com/sakuraresto.ee"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Facebook"
                            >
                                <FaFacebookF />
                            </a>
                            <a
                                href="https://www.instagram.com/sakuraresto.ee"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                            >
                                <FaInstagram />
                            </a>
                            <a
                                href="https://www.tiktok.com/@sakuraresto.ee"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="TikTok"
                            >
                                <FaTiktok />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="divider"></div>

                <div className="features-header">
                    <div className="small-rectangle"></div>
                    <h4 className="features-subtitle">{t('about.subheading')}</h4>
                    <h2 className="features-title">Why people choose us?</h2>
                </div>
                <div className="features">
                    <div className="feature">
                        <TbBowlChopsticksFilled className="feature-icon" />
                        <h3>{t('about.features.freshFlavors.title')}</h3>
                        <p>{t('about.features.freshFlavors.description')}</p>
                    </div>
                    <div className="feature">
                        <GiKnifeFork className="feature-icon" />
                        <h3>{t('about.features.artisanCraft.title')}</h3>
                        <p>{t('about.features.artisanCraft.description')}</p>
                    </div>
                    <div className="feature">
                        <GiBonsaiTree className="feature-icon" />
                        <h3>{t('about.features.culturalHarmony.title')}</h3>
                        <p>{t('about.features.culturalHarmony.description')}</p>
                    </div>
                </div>

                <div className="divider divider-second"></div>

                <div className="working-hours-container">
                    <div className="working-hours-image">
                        <img src={workingHours} alt="Working Hours" />
                        <div className="image-overlay"></div>
                        <div className="overlay-content">
                            <div className="about-header">
                                <div className="small-rectangle-about"></div>
                                <h4 className="working-hours-subtitle">{t('about.subtitle')}</h4>
                            </div>
                            <h2>Working Hours</h2>
                            <p className="reservation-text">
                                Reserve your table now for an exquisite dining experience!
                            </p>
                            <div className="overlay-buttons">
                                <motion.button
                                    className="reservation-btn reservation-btn--primary"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() =>
                                        window.open(
                                            'https://v2.tableonline.fi/instabook/bookings/AwHHJD2/selection?locale=ee'
                                        )
                                    }
                                >
                                    Reservation
                                </motion.button>
                                <ScrollLink to="footer" smooth={true} duration={150} className="scroll-link">
                                    <button className="contact-button">Contact Us</button>
                                </ScrollLink>
                            </div>
                        </div>
                    </div>
                    <div className="working-hours-info">
                        <div className="working-hours-selector">
                            <button
                                className={activeGroup === 'monday-friday' ? 'active' : ''}
                                onClick={() => setActiveGroup('monday-friday')}
                            >
                                Mon - Fri
                            </button>
                            <button
                                className={activeGroup === 'saturday-sunday' ? 'active' : ''}
                                onClick={() => setActiveGroup('saturday-sunday')}
                            >
                                Sat - Sun
                            </button>
                        </div>
                        {activeGroup === 'monday-friday' && (
                            <ul>
                                <li className="working-day">{t('Monday to Thursday')}</li>
                                <li className="working-time">
                                    {t('11')}
                                    <span className="time-colon">:</span>
                                    {t('00')}
                                    <br />
                                    {t('23')}
                                    <span className="time-colon">:</span>
                                    {t('00')}
                                </li>
                                <li className="working-day">{t('Friday')}</li>
                                <li className="working-time">
                                    {t('11')}
                                    <span className="time-colon">:</span>
                                    {t('00')}
                                    <br />
                                    {t('00')}
                                    <span className="time-colon">:</span>
                                    {t('00')}
                                </li>
                            </ul>
                        )}
                        {activeGroup === 'saturday-sunday' && (
                            <ul>
                                <li className="working-day">{t('Saturday')}</li>
                                <li className="working-time">
                                    {t('12')}
                                    <span className="time-colon">:</span>
                                    {t('00')}
                                    <br />
                                    {t('00')}
                                    <span className="time-colon">:</span>
                                    {t('00')}
                                </li>
                                <li className="working-day">{t('Sunday')}</li>
                                <li className="working-time">
                                    {t('12')}
                                    <span className="time-colon">:</span>
                                    {t('00')}
                                    <br />
                                    {t('22')}
                                    <span className="time-colon">:</span>
                                    {t('00')}
                                </li>
                            </ul>
                        )}
                    </div>
                </div>

                <div className="divider divider-third"></div>

                {/* Statistics Section */}
                <div className="statistics">
                    <div className="statistic">
            <span className="count">
              <CountUp
                  end={200}
                  duration={2}
                  enableScrollSpy={true}
                  scrollSpyOnce={true}
              />
            </span>
                        <span className="symbol">+</span>
                        <p>Visitors Daily</p>
                    </div>
                    <div className="statistic">
            <span className="count">
              <CountUp
                  end={400}
                  duration={2}
                  enableScrollSpy={true}
                  scrollSpyOnce={true}
              />
            </span>
                        <span className="symbol">+</span>
                        <p>Deliveries Monthly</p>
                    </div>
                    <div className="statistic">
            <span className="count">
              <CountUp
                  end={100}
                  duration={2}
                  enableScrollSpy={true}
                  scrollSpyOnce={true}
              />
            </span>
                        <span className="symbol">%</span>
                        <p>Positive Feedback</p>
                    </div>
                    <div className="statistic">
            <span className="count">
              <CountUp
                  end={40}
                  duration={2}
                  enableScrollSpy={true}
                  scrollSpyOnce={true}
              />
            </span>
                        <span className="symbol">+</span>
                        <p>Awards & Honors</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;