import { motion } from 'framer-motion';
import {scroller} from 'react-scroll';
import { useTranslation } from 'react-i18next';
import workingHoursImg from '/src/assets/about/workingHours.jpeg';
import '/src/pages/about/subitems/WorkingHours/WorkingHours.css';

const WorkingHoursImage = () => {
    const { t } = useTranslation();

    return (
        <div className="working-hours-image">
            <img src={workingHoursImg} alt="Working Hours" />
            <div className="image-overlay"></div>
            <div className="overlay-content">
                <div className="working-hours-header">
                    <div className="small-rectangle-working-hours"></div>
                    <h4 className="working-hours-subtitle">{t('about.subtitle')}</h4>
                </div>
                <h2>{t('about.workingHours.heading')}</h2>
                <p className="reservation-text">{t('about.workingHours.subheading')}</p>
                <div className="overlay-buttons">
                    <motion.button
                        className="reservation-btn reservation-btn--primary"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() =>
                            window.open(
                                'https://v2.tableonline.fi/instabook/bookings/AwHHJD2/selection?locale=ee'
                            )
                        }
                    >
                        {t('about.workingHours.button_reservation')}
                    </motion.button>
                    <motion.button
                        className="contact-button"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                            scroller.scrollTo('contact', { smooth: true, duration: 150 });
                        }}
                    >
                        {t('about.workingHours.button_contact')}
                    </motion.button>
                </div>
            </div>
        </div>
    );
};

export default WorkingHoursImage;