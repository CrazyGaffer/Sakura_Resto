import { FaHeart, FaStar, FaGem } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import '/src/pages/events/subitems/Packages.css';

const Packages = () => {
    const { t } = useTranslation();

    const eventPackages = [
        {
            icon: <FaHeart className="package-icon " />,
            title: "Basic",
            description: "Our basic package offers a simple yet delightful experience, perfect for casual gatherings.",
        },
        {
            icon: <FaStar className="package-icon " />,
            title: "Premium",
            description: "The premium package includes additional features and enhanced services for a truly memorable event.",
        },
        {
            icon: <FaGem className="package-icon " />,
            title: "Luxury",
            description: "Experience the ultimate in sophistication with bespoke culinary creations and exclusive amenities.",
        },
    ];

    return (
        <div className="packages">
            <div className="packages-header">
                <div className="small-rectangle-features"></div>
                <h4 className="packages-subtitle">Events</h4>
                <h2 className="packages-title">Party Packages</h2>
                <p className="packages-description">We’ll Handle the Details, You Bring the Fun – Relax, Unwind, and Let Us Create an Unforgettable Celebration</p>
            </div>
            <div className="packages-list">
                {eventPackages.map((eventPackage, idx) => (
                    <div className="package" key={idx}>
                        {eventPackage.icon}
                        <h3>{eventPackage.title}</h3>
                        <p>{eventPackage.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Packages;