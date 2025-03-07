import { motion } from 'framer-motion';
import {scroller} from 'react-scroll';
import { useTranslation } from 'react-i18next';
import workingHoursImg from '/src/assets/aboutPage/workingHours.jpeg';

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
                <h2>Working Hours</h2>
                <p className="reservation-text">
                    Reserve your table now for an exquisite dining experience!
                </p>
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
                        Reservation
                    </motion.button>
                    <motion.button
                        className="contact-button"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                            scroller.scrollTo('footer', { smooth: true, duration: 150 });
                        }}
                    >
                        Contact Us
                    </motion.button>
                </div>
            </div>
        </div>
    );
};

export default WorkingHoursImage;