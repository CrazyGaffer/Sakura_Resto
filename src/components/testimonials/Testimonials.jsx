import { testimonialsData } from "../../data/testimonialsData.js";
import AutoCarousel from './AutoCarousel.jsx';
import './AutoCarousel.css';
import './Testimonials.css';

const OPTIONS = { loop: true };
const SLIDES = Array.from(testimonialsData)

const Testimonials = () => {
    return (
        <div className="private-events-testimonials">
            <h2>What Our Clients Say</h2>
            <AutoCarousel slides={SLIDES} options={OPTIONS} />
        </div>
    );
};

export default Testimonials;