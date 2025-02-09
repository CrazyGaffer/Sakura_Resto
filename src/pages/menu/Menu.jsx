import { motion } from 'framer-motion';
import './Menu.css';

function Menu() {
    const menuItems = [
        { name: 'Суши', description: 'Свежие суши из лучших ингредиентов', price: '$20' },
        { name: 'Рамен', description: 'Насыщенный рамен с богатым бульоном', price: '$15' },
        { name: 'Темпура', description: 'Лёгкая и хрустящая темпура', price: '$18' },
        // Добавьте другие позиции по необходимости
    ];

    return (
        <section id="menu" className="menu">
            <motion.div
                className="menu-content"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
            >
                <h2>Наше меню</h2>
                <div className="menu-items">
                    {menuItems.map((item, index) => (
                        <div className="menu-item" key={index}>
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>
                            <span>{item.price}</span>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}

export default Menu;
