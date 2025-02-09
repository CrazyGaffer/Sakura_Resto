import { motion } from 'framer-motion';
import './Home.css';
import heroBackground from '../assets/backround.avif'; // Убедитесь в правильности пути

function Home() {
    return (
        <section id="hero" className="hero">
            {/* Фоновый слой с блюром */}
            <div
                className="hero-bg"
                style={{ backgroundImage: `url(${heroBackground})` }}
            ></div>

            {/* Контент */}
            <motion.div
                className="hero-content"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <h1>Welcome to Sakura Resto</h1>
                <p>
                    Inspired by Asian culture, we elevate traditional Japanese dishes by fusing
                    Asian and European flavors into an unforgettable culinary journey.
                </p>

            </motion.div>

            {/* Кнопки (если нужно, можно оставить или убрать) */}
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
                >
                    Reservations
                </motion.button>

                <motion.button
                    className="hero-btn hero-btn--secondary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Order Online
                </motion.button>
            </motion.div>
        </section>
    );
}

export default Home;
