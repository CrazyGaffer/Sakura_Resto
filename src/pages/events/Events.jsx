import './Events.css';
import {useTranslation} from "react-i18next";
import Packages from "./subitems/Packages.jsx";
import UpcomingEvents from "./subitems/UpcomingEvents.jsx";
import ContactButton from "../../components/ContactButton.jsx";
import Divider from "../../components/Divider/Divider.jsx";

function Events() {
    const { t } = useTranslation();

    return (
        <section id="events" className="events">
            <div className="events-wrapper">
                <div className="about-content">
                    <div className="events-text">
                        <div className="features-header">
                            <div className="small-rectangle-features"></div>
                            <h4 className="features-subtitle">Events</h4>
                            <h2 className="events-title">Make Your Event Unforgettable</h2>
                            <p className="events-subheading">Host your private event with us and let our experienced team create an atmosphere that exceeds your
                                expectations. Whether it’s an intimate gathering or a grand celebration, we have the perfect setting for you.</p>
                        </div>
                    </div>
                </div>

                <Divider/>

                <Packages />

                <Divider/>

                <UpcomingEvents />

            </div>
        </section>
    );
}

export default Events;