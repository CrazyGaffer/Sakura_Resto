import { testimonialsData } from "../../data/testimonialsData.js";
import AutoCarousel from './AutoCarousel.jsx';
import './AutoCarousel.css';
import './Testimonials.css';

const OPTIONS = { loop: true };
const SLIDES = Array.from(testimonialsData)

const Testimonials = () => {
    return (
        <div className="private-events-testimonials">
            <div className="features-header">
                <div className="small-rectangle"></div>
                <h4 className="testimonials-subtitle">Testimonials</h4>
                <h2>What Our Clients Say</h2>
            </div>
            <AutoCarousel slides={SLIDES} options={OPTIONS} />
        </div>
    );
};

export default Testimonials;