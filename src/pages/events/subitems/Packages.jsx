import React from 'react';
import PropTypes from 'prop-types';
import { BsBalloonFill } from "react-icons/bs";
import { BsFillCake2Fill } from "react-icons/bs";
import { BiSolidParty } from "react-icons/bi";
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';
import './packages.scss';
import ContactButton from "../../../components/ContactButton.jsx";

const PackageItem = ({ icon, title, description, delay }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
        rootMargin: '-50px 0px',
    });

    return (
        <div
            className={`package ${inView ? 'in-view' : ''}`}
            ref={ref}
            style={{ transitionDelay: `${delay * 300}ms` }}
        >
            {React.cloneElement(icon, {
                className: 'package-icon',
                style: { animationDelay: `${delay * 300}ms` },
            })}
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
};

PackageItem.propTypes = {
    icon: PropTypes.element.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    delay: PropTypes.number,
};

const PackagesSection = () => {
    const { t } = useTranslation();

    const packages = [
        {
            icon: <BsBalloonFill />,
            title: t('events.packages.title_1'),
            description: t('events.packages.description_1'),
        },
        {
            icon: <BiSolidParty />,
            title: t('events.packages.title_2'),
            description: t('events.packages.description_2'),
        },
        {
            icon: <BsFillCake2Fill />,
            title: t('events.packages.title_3'),
            description: t('events.packages.description_3'),
        },
    ];

    return (
        <div className="packages">
            <div className="packages-header">
                <div className="small-rectangle-features"></div>
                <h4 className="packages-subtitle">Events</h4>
                <h2 className="packages-title">Party Packages</h2>
                <p className="packages-title">
                    We’ll Handle the Details, You Bring the Fun – Relax, Unwind, and Let Us Create an Unforgettable Celebration
                </p>
            </div>
            <div className="packages-list">
                {packages.map((pkg, idx) => (
                    <PackageItem key={idx} delay={idx} {...pkg} />
                ))}
            </div>
            <div className="packages-footer">
                <p className="packages-contact">
                    {t('events.contact_text')}
                </p>
                <ContactButton
                    email="info@sakuraresto.ee"
                    subject="Inquiry about event packages"
                    body="Hi, I would like to know more about your party packages. Please send me further information."
                />
            </div>
        </div>
    );
};

export default PackagesSection;