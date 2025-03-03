import './PrivateEvents.css';
import UpcomingEvents from "./UpcomingEvents.jsx";
import Testimonials from "./testimonials/Testimonials.jsx";
import Packages from "./Packages.jsx";

function PrivateEvents() {
    return (
        <section id="events" className="private-events">
            {/* Home Section */}
            <div className="private-events-hero">
                <h1 className="hero-title">Make Your Event Unforgettable</h1>
                <p className="hero-description">
                    Host your private event with us and let our experienced team create an atmosphere that exceeds your
                    expectations. Whether it’s an intimate gathering or a grand celebration, we have the perfect setting for you.
                </p>
                {/* Packages Section */}
                <Packages />
            </div>
            {/* Upcoming Events Section */}
            <UpcomingEvents />
            {/* Testimonials Section */}
            <Testimonials />
        </section>
    );
}

export default PrivateEvents;