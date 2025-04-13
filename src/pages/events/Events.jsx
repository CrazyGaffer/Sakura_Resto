import './Events.css';
import {useTranslation} from "react-i18next";
import Packages from "./subitems/Packages.jsx";
import Divider from "../../components/Divider/Divider.jsx";
import BanquetMenu from "./subitems/banquet/BanquetMenu.jsx";

function Events() {
    const { t } = useTranslation();

    return (
        <section id="events" className="events">
            <div className="events-wrapper">
                <div className="about-content">
                    <div className="events-text">
                        <div className="features-header">
                            <div className="small-rectangle-features"></div>
                            <h4 className="features-subtitle">{t('events.heading')}</h4>
                            <h2 className="events-title">{t('events.title')}</h2>
                            <p className="events-subheading">{t('events.content')}</p>
                        </div>
                    </div>
                </div>

                <Divider/>
                <Packages />
                <Divider />
                <BanquetMenu/>

            </div>
        </section>
    );
}

export default Events;