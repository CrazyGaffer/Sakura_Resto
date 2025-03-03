import { useTranslation } from 'react-i18next';
import { GiKnifeFork, GiBonsaiTree } from 'react-icons/gi';
import { TbBowlChopsticksFilled } from 'react-icons/tb';
import './About.css';

function About() {
    // This syntax is valid in TypeScript when ESLint is properly configured
    const { t } = useTranslation();

    return (
        <section id="about" className="about">
            <div className="about-content">
                <h2>{t('about.heading')}</h2>
                <p>{t('about.content')}</p>
            </div>
            <div className="features">
                <div className="feature">
                    <div className="icon-wrapper">
                        <TbBowlChopsticksFilled className="feature-icon" />
                    </div>
                    <h3>{t('about.features.freshFlavors.title')}</h3>
                    <p>{t('about.features.freshFlavors.description')}</p>
                </div>
                <div className="feature">
                    <div className="icon-wrapper">
                        <GiKnifeFork className="feature-icon" />
                    </div>
                    <h3>{t('about.features.artisanCraft.title')}</h3>
                    <p>{t('about.features.artisanCraft.description')}</p>
                </div>
                <div className="feature">
                    <div className="icon-wrapper">
                        <GiBonsaiTree className="feature-icon" />
                    </div>
                    <h3>{t('about.features.culturalHarmony.title')}</h3>
                    <p>{t('about.features.culturalHarmony.description')}</p>
                </div>
            </div>
        </section>
    );
}

export default About;