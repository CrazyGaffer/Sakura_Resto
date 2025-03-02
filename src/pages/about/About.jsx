import { GiKnifeFork, GiBonsaiTree } from 'react-icons/gi';
import { TbBowlChopsticksFilled } from "react-icons/tb";
import './About.css';

function About() {
    return (
        <section id="about" className="about">
            <div className="about-content">
                <h2>Our story</h2>
                <p>
                    Experience the fusion of traditional Japanese cuisine with modern flair, where every dish tells a story of heritage and innovation. Our culinary philosophy embraces time-honored techniques passed down through generations, reimagined with a contemporary twist to awaken your senses. Each creation is a masterpiece that artfully balances classic umami flavors with inventive presentations, inviting you to savor the depth of flavor and the beauty of modern design. We meticulously select seasonal ingredients and refine every detail—from the subtle aroma to the vibrant colors on your plate—to ensure that each bite is as memorable as it is exquisite. Join us on a culinary journey that transcends the ordinary, merging time-tested traditions with dynamic innovation to create an experience that delights both the palate and the eye.
                </p>
            </div>
            <div className="features">
                <div className="feature">
                    <div className="icon-wrapper">
                        <TbBowlChopsticksFilled className="feature-icon" />
                    </div>
                    <h3>Fresh Flavors</h3>
                    <p>
                        We carefully select seasonal ingredients to create dishes bursting with vibrant taste and authentic flavor. From crisp salads to savory soups, our menu celebrates nature&apos;s bounty.
                    </p>
                </div>
                <div className="feature">
                    <div className="icon-wrapper">
                        <GiKnifeFork className="feature-icon" />
                    </div>
                    <h3>Artisan Craft</h3>
                    <p>
                        Each dish is meticulously handcrafted, blending traditional techniques with innovative presentation. Our chefs&apos; expertise ensures every creation is a masterpiece.
                    </p>
                </div>
                <div className="feature">
                    <div className="icon-wrapper">
                        <GiBonsaiTree className="feature-icon" />
                    </div>
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