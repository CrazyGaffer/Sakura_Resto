import UpcomingEventsCarousel from '../../../components/Carousel/UpcomingEventsCarousel.jsx'
import '../../../components/Carousel/UpcomingEventsCarousel.css'
import './UpcomingEvents.css';
import events from "../../../data/eventsData.js";
import {useTranslation} from "react-i18next";

const OPTIONS = { align: 'start' }
const SLIDES = Array.from(events)

const UpcomingEvents = () => {
    const { t } = useTranslation();

    return (
        <div className="upcoming-events-carousel">
            <div className="features-header">
                <div className="small-rectangle-features"></div>
                <h4 className="features-subtitle">Events</h4>
                <h2 className="features-title">Upcoming Events</h2>
                <p className="features-title">
                    What’s Happening This Month? Explore exciting events and exclusive opportunities curated just for you.
                </p>
            </div>
            <UpcomingEventsCarousel slides={SLIDES} options={OPTIONS} />
        </div>
    );
};

export default UpcomingEvents;