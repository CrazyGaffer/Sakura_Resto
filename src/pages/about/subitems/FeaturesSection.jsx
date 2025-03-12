import { TbBowlChopsticksFilled } from 'react-icons/tb';
import { GiKnifeFork, GiBonsaiTree } from 'react-icons/gi';
import { useTranslation } from 'react-i18next';

const FeaturesSection = () => {
    const { t } = useTranslation();

    const features = [
        {
            icon: <TbBowlChopsticksFilled className="feature-icon" />,
            title: t('about.features.freshFlavors.title'),
            description: t('about.features.freshFlavors.description'),
        },
        {
            icon: <GiKnifeFork className="feature-icon" />,
            title: t('about.features.artisanCraft.title'),
            description: t('about.features.artisanCraft.description'),
        },
        {
            icon: <GiBonsaiTree className="feature-icon" />,
            title: t('about.features.culturalHarmony.title'),
            description: t('about.features.culturalHarmony.description'),
        },
    ];

    return (
        <div className="features">
            <div className="features-header">
                <div className="small-rectangle-features"></div>
                <h4 className="features-subtitle">{t('about.subheading')}</h4>
                <h2 className="features-title">{t('about.features.heading')}</h2>
                <p className="features-title">{t('about.features.subheading')}</p>
            </div>
            <div className="features-list">
                {features.map((feature, idx) => (
                    <div className="feature" key={idx}>
                        {feature.icon}
                        <h3>{feature.title}</h3>
                        <p>{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeaturesSection;