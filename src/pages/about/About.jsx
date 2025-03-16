import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import WorkingHours from './subitems/WorkingHours/WorkingHours.jsx';
import Statistics from './subitems/Statistics/Statistics.jsx';
import FeaturesSection from '../about/subitems/FeaturesSection.jsx';
import SocialLinks from '../about/subitems/SocialLinks.jsx';
import './About.css';
import './subitems/Statistics/Statistics.css';
import interiorImage from '../../assets/about/interiorImage.jpeg';
import '/src/components/Divider/Divider.css';
import '/src/pages/about/subitems/FeatureSection.scss';
import Divider from "../../components/Divider/Divider.jsx";

function About() {
    const { t } = useTranslation();
    const [showLightbox, setShowLightbox] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    const handleImageClick = () => {
        setShowLightbox(true);
    };

    const closeLightbox = (e) => {
        if (e.target.classList.contains('lightbox-overlay')) {
            setShowLightbox(false);
        }
    };

    return (
        <section id="about" className="about">
            <div className="about-wrapper">
                <div className="about-content">
                    <div className="about-image">
                        <div
                            className={`image-container ${isLoaded ? 'loaded' : ''}`}
                            onClick={handleImageClick}
                            role="button"
                            aria-label="Enlarge interior image"
                        >
                            {!isLoaded && <div className="image-loader"></div>}
                            <img
                                src={interiorImage}
                                alt="About us"
                                onLoad={() => setIsLoaded(true)}
                                className="hover-zoom"
                            />
                        </div>
                    </div>
                    <div className="about-text">
                        <div className="about-header">
                            <div className="small-rectangle-about"></div>
                            <h4 className="about-subtitle">{t('about.subtitle')}</h4>
                        </div>
                        <h2>{t('about.heading')}</h2>
                        <p>{t('about.content')}</p>
                        <SocialLinks />
                    </div>
                </div>

                {showLightbox && (
                    <div
                        className="lightbox-overlay"
                        onClick={closeLightbox}
                        role="dialog"
                        aria-modal="true"
                        aria-label="Enlarged image view"
                    >
                        <div className="lightbox-content">
                            <img
                                src={interiorImage}
                                alt="Enlarged interior view"
                                className="lightbox-image"
                            />
                        </div>
                        <button
                            className="close-button"
                            onClick={() => setShowLightbox(false)}
                            aria-label="Close enlarged view"
                        >
                            &times;
                        </button>
                    </div>
                )}

                <Divider />
                <FeaturesSection />
                <Divider />
                <WorkingHours />
                <Divider />
                <Statistics />
            </div>
        </section>
    );
}

export default About;