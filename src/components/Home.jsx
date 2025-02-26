import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './Home.css';
import heroBackground from '../assets/backround.avif';

function Home() {
    const { t } = useTranslation();

    return (
        <section id="home" className="hero">
            <div
                className="hero-bg"
                style={{ backgroundImage: `url(${heroBackground})` }}
            ></div>

            <motion.div
                className="hero-content"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <h1>{t('home.heading')}</h1>
                <p>{t('home.subheading')}</p>
            </motion.div>

            <motion.div
                className="hero-buttons"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    type: 'spring',
                    stiffness: 80,
                    damping: 10,
                    delay: 0.5
                }}
            >
                <motion.button
                    className="hero-btn hero-btn--primary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() =>
                        window.open(
                            'https://v2.tableonline.fi/instabook/bookings/AwHHJD2/selection?locale=ee'
                        )
                    }
                >
                    {t('home.bookATable')}
                </motion.button>

                <motion.button
                    className="hero-btn hero-btn--secondary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() =>
                        window.open('https://sakura-restoran.choiceqr.com/online-menu')
                    }
                >
                    {t('home.orderNow')}
                </motion.button>
            </motion.div>
        </section>
    );
}

export default Home;