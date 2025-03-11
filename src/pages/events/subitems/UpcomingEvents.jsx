import UpcomingEventsCarousel from '../../../components/carousel/UpcomingEventsCarousel.jsx'
import '../../../components/carousel/UpcomingEventsCarousel.css'
import './UpcomingEvents.css';
import events from "../../../data/eventsData.js";

const OPTIONS = { align: 'start' }
const SLIDES = Array.from(events)

const UpcomingEvents = () => {

    return (
        <div className="upcoming-events-carousel">
            <h2>Upcoming Events</h2>
            <UpcomingEventsCarousel slides={SLIDES} options={OPTIONS} />
        </div>
    );
};

export default UpcomingEvents;