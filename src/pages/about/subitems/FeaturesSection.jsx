import React from 'react';
import PropTypes from 'prop-types';
import { TbBowlChopsticksFilled } from 'react-icons/tb';
import { GiKnifeFork, GiBonsaiTree } from 'react-icons/gi';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';

const FeatureItem = ({ icon, title, description, delay }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
        rootMargin: '-50px 0px',
    });

    return (
        <div
            className={`feature ${inView ? 'in-view' : ''}`}
            ref={ref}
            style={{ transitionDelay: `${delay * 300}ms` }}
        >
            {React.cloneElement(icon, {
                className: 'feature-icon',
                style: { animationDelay: `${delay * 300}ms` }
            })}
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
};

FeatureItem.propTypes = {
    icon: PropTypes.element.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    delay: PropTypes.number,
};

const FeaturesSection = () => {
    const { t } = useTranslation();

    const features = [
        {
            icon: <TbBowlChopsticksFilled />,
            title: t('about.features.freshFlavors.title'),
            description: t('about.features.freshFlavors.description'),
        },
        {
            icon: <GiKnifeFork />,
            title: t('about.features.artisanCraft.title'),
            description: t('about.features.artisanCraft.description'),
        },
        {
            icon: <GiBonsaiTree />,
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
                    <FeatureItem key={idx} delay={idx} {...feature} />
                ))}
            </div>
        </div>
    );
};

export default FeaturesSection;