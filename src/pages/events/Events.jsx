import './Events.css';
import {useTranslation} from "react-i18next";
import Packages from "./subitems/Packages.jsx";
import UpcomingEvents from "./subitems/UpcomingEvents.jsx";
import ContactButton from "../../components/ContactButton.jsx";

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

                <div className="divider"></div>

                <div className="events-header">
                    <div className="small-rectangle-features"></div>
                    <h4 className="events-subtitle">Events</h4>
                    <h2 className="events-title">Party Packages</h2>
                    <p className="events-title">We’ll Handle the Details, You Bring the Fun – Relax, Unwind, and Let Us Create an Unforgettable Celebration.</p>
                </div>
                <Packages />
                <div className="packages-footer">
                    <p className="packages-contact">
                        To reserve an event package or for further inquiries, please contact our dedicated team.
                    </p>
                    <ContactButton link="https://www.sakuraresto.ee/_files/ugd/87015a_53fe56f6fbc34d07bf076e4ed04f215a.pdf" />
                </div>

                <div className="divider"></div>

                <UpcomingEvents />

            </div>
        </section>
    );
}

export default Events;