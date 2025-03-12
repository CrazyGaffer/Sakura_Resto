import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import './Home.scss';
import dish1 from '/src/assets/home/dish1.jpg';
import dish2 from '/src/assets/home/dish2.jpg';
import dish3 from '/src/assets/home/dish3.jpg';

function Home() {
    const controls = useAnimation();
    const images = [dish1, dish2, dish3];

    useEffect(() => {
        const sequence = async () => {
            await controls.start({ opacity: 1, y: 0 });
        };
        sequence();
    }, [controls]);

    return (
        <section id="home" className="hero">
            <div className="hero-container">
                <motion.div
                    className="image-slider"
                    initial={{ opacity: 0 }}
                    animate={controls}
                    transition={{ duration: 1 }}
                >
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className="slide"
                            style={{ backgroundImage: `url(${image})` }}
                        />
                    ))}
                </motion.div>

                <div className="content-column">
                    <motion.div
                        className="hero-content"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h4 className="subtitle">Experience Fusion Flavors</h4>
                        <h1 className="title">
                            Sakura Pan-Asian Culinary Adventure
                        </h1>
                        <p className="description">
                            A vibrant fusion of Asian traditions meets local ingredients, where bold Thai spices mingle with Japanese precision, Vietnamese freshness, and regional produce.
                        </p>
                    </motion.div>

                    <motion.div
                        className="buttons-container"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        <motion.a
                            href="https://v2.tableonline.fi/instabook/bookings/AwHHJD2/selection?locale=ee"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="reserve-button"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Book Table Now
                        </motion.a>
                        <motion.button
                            className="secondary-button"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            View Menu
                        </motion.button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default Home;