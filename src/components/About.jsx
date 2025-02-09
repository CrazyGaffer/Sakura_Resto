import { motion } from 'framer-motion';
import './About.css';

function About() {
    return (
        <section id="about" className="about">
            <motion.div
                className="about-content"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
            >
                <h2>About Us</h2>
                <p>
                    At Sakura Resto, we merge the art of traditional Japanese cuisine with
                    modern culinary trends to bring you a truly unique dining experience.
                    Our passionate team is dedicated to crafting each dish with the freshest
                    ingredients, ensuring that every bite is a delightful fusion of flavor,
                    culture, and innovation.
                </p>
                <p>
                    Whether you’re enjoying our beautifully arranged sushi or savoring
                    a steaming bowl of ramen, we strive to create an immersive atmosphere
                    that transports you to the heart of Japan. Join us on a journey
                    that will excite your taste buds and leave you with unforgettable memories.
                </p>
            </motion.div>
        </section>
    );
}

export default About;
