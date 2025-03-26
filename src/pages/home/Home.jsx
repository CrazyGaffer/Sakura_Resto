import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';
import './Home.scss';
import { useTranslation } from 'react-i18next';
import dishes from '/src/data/dishes_home_data.js';

function Home() {
    const controls = useAnimation();
    const [activeIndex, setActiveIndex] = useState(0);
    const { t } = useTranslation();

    useEffect(() => {
        const sequence = async () => {
            try {
                await controls.start({ opacity: 1, y: 0 });
            } catch (error) {
                console.error('Animation error:', error);
            }
        };
        void sequence();
    }, [controls]);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % dishes.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="home" className="hero">
            <div className="hero-container">
                <motion.div
                    className="image-slider"
                    initial={{ opacity: 0 }}
                    animate={controls}
                    transition={{ duration: 1 }}
                >
                    {dishes.map((image, index) => (
                        <div
                            key={index}
                            className="slide"
                            style={{
                                backgroundImage: `url(${image})`,
                                opacity: index === activeIndex ? 1 : 0,
                                zIndex: index === activeIndex ? 1 : 0
                            }}
                        />
                    ))}
                    <div className="slider-progress">
                        {dishes.map((_, index) => (
                            <motion.span
                                key={index}
                                className="progress-dot"
                                animate={{
                                    width: activeIndex === index ? '24px' : '8px',
                                    backgroundColor: activeIndex === index
                                        ? 'rgba(255, 255, 255, 0.9)'
                                        : 'rgba(255, 255, 255, 0.4)'
                                }}
                                transition={{ duration: 0.3 }}
                            />
                        ))}
                    </div>
                </motion.div>

                <div className="content-column">
                    <motion.div
                        className="hero-content"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h4 className="subtitle">{t('home.subtitle')}</h4>
                        <h1 className="title">
                            {t('home.heading')}
                        </h1>
                        <p className="description">
                            {t('home.content')}
                        </p>
                    </motion.div>

                    <motion.div
                        className="buttons-container"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <motion.a
                            href="https://v2.tableonline.fi/instabook/bookings/AwHHJD2/selection?locale=ee"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="reserve-button"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {t('home.bookATable')}
                        </motion.a>
                        <motion.a
                            href="https://sakura-restoran.choiceqr.com/online-menu"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="order-button"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {t('home.orderNow')}
                        </motion.a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default Home;