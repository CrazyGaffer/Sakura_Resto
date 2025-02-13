import { useState } from 'react';
import { motion } from 'framer-motion';
import { menuItems } from '/src/data/menuItems.js';
import './Menu.css';

function Menu() {
    // State to track active category
    const [activeCategory, setActiveCategory] = useState('All');

    // Define the available categories
    const categories = ['All', 'Sushi', 'Ramen', 'Tempura', 'Drinks'];

    // Filter items based on the active category
    const filteredItems =
        activeCategory === 'All'
            ? menuItems
            : menuItems.filter((item) => item.category === activeCategory);

    return (
        <section id="menu" className="menu">
            <motion.div
                className="menu-content"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
            >
                <h2>Our menu</h2>

                {/* Category Switcher */}
                <div className="menu-categories">
                    {categories.map((category, index) => (
                        <button
                            key={index}
                            className={activeCategory === category ? 'active' : ''}
                            onClick={() => setActiveCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="menu-items">
                    {filteredItems.map((item, index) => (
                        <div className="menu-item" key={index}>
                            <div className="menu-info">
                                <h3>{item.name}</h3>
                                <p>{item.description}</p>
                            </div>
                            <div className="menu-price">
                                <span>{item.price}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}

export default Menu;