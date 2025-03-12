import { useTranslation } from 'react-i18next';
import WorkingHours from '../about/subitems/WorkingHours.jsx';
import Statistics from './subitems/Statistics/Statistics.jsx';
import FeaturesSection from '../about/subitems/FeaturesSection.jsx';
import SocialLinks from '../about/subitems/SocialLinks.jsx';
import './About.css';
import './subitems/Statistics/Statistics.css';
import interiorImage from '../../assets/about/interiorImage.jpeg';
import '/src/components/Divider/Divider.css';
import '/src/pages/about/subitems/FeaturesSection.css';
import Divider from "../../components/Divider/Divider.jsx";


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