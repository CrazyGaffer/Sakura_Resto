import { motion } from 'framer-motion';
import { GiChopsticks, GiKnifeFork, GiBonsaiTree } from 'react-icons/gi';
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
                <h2>Our story</h2>
                <p>
                    Experience the fusion of traditional Japanese cuisine with modern flair. Our menu balances time-honored techniques with a contemporary twist—highlighting classic umami flavors through creative, refined presentations.
                </p>
            </motion.div>
            <div className="features">
                <div className="feature">
                    <GiChopsticks className="feature-icon" />
                    <h3>Fresh Flavors</h3>
                    <p>
                        We carefully select seasonal ingredients to create dishes bursting with vibrant taste and authentic flavor. From crisp salads to savory soups, our menu celebrates nature&apos;s bounty.
                    </p>
                </div>
                <div className="feature">
                    <GiKnifeFork className="feature-icon" />
                    <h3>Artisan Craft</h3>
                    <p>
                        Each dish is meticulously handcrafted, blending traditional techniques with innovative presentation. Our chefs&apos; expertise ensures every creation is a masterpiece.
                    </p>
                </div>
                <div className="feature">
                    <GiBonsaiTree className="feature-icon" />
                    <h3>Cultural Vibe</h3>
                    <p>
                        Immerse yourself in a dining experience that transports you to Japan through both traditional ambiance and modern style. Every detail echoes the rich heritage of Japanese culture.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About;