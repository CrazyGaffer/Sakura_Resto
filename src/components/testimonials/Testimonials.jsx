import { testimonialsData } from "../../data/testimonialsData.js";
import AutoCarousel from './AutoCarousel.jsx';
import './AutoCarousel.css';
import './Testimonials.css';
import { useTranslation } from "react-i18next";

const OPTIONS = { loop: true };
const SLIDES = Array.from(testimonialsData);

const Testimonials = () => {
    const { t } = useTranslation();
    return (
        <div className="private-events-testimonials">
            <div className="divider-testimonials"></div>
            <div className="features-header">
                <div className="small-rectangle-testimonials"></div>
                <h4 className="testimonials-subtitle">{t("testimonials.subtitle")}</h4>
                <h2>{t("testimonials.heading")}</h2>
            </div>
            <AutoCarousel slides={SLIDES} options={OPTIONS} />
        </div>
    );
};

export default Testimonials;