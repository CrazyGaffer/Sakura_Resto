import { useTranslation } from 'react-i18next';
import WorkingHours from '../about/subitems/WorkingHours.jsx';
import Statistics from '../about/subitems/Statistics.jsx';
import FeaturesSection from '../about/subitems/FeaturesSection.jsx';
import SocialLinks from '../about/subitems/SocialLinks.jsx';
import './About.css';
import interiorImage from '../../assets/aboutPage/interiorImage.jpeg';


function About() {
    const { t } = useTranslation();

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
                        <SocialLinks />
                    </div>
                </div>

                <div className="divider"></div>

                <div className="features-header">
                    <div className="small-rectangle-features"></div>
                    <h4 className="features-subtitle">{t('about.subheading')}</h4>
                    <h2 className="features-title">{t('about.features.heading')}</h2>
                    <p className="features-title">{t('about.features.subheading')}</p>

                </div>
                <FeaturesSection />

                <div className="divider divider-second"></div>

                <WorkingHours />

                <div className="divider divider-third"></div>

                <Statistics />
            </div>
        </section>
    );
}

export default About;