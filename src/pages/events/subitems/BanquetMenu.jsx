import "./BanquetMenu.scss";
import { useTranslation } from "react-i18next";

const BanquetMenu = () => {
    const { t } = useTranslation();

    return (
        <div className="banquet-menu-container">
            <div className="packages-header">
                <div className="small-rectangle-features"></div>
                <h4 className="packages-subtitle">{t('events.heading')}</h4>
                <h2 className="packages-menu-title">{t('events.banquet_menu.heading')}</h2>
                <p className="packages-menu-title">{t('events.banquet_menu.subheading')}</p>
            </div>

            {/* Menu for 8+ persons */}
            <div className="banquet-menu-card">
                <h2>
                    MENU 8+ PERSONS <span className="price">€45 / per person</span>
                </h2>

                <div className="menu-section">
                    <h3>APPETIZERS</h3>
                    <ul>
                        <li>
                            Pho Soup (Vietnamese beef bone broth, spices, vegetables, sprouts,
                            basil, coriander, lime, chili sauce)
                        </li>
                        <li>Spring rolls, chicken satay, fish cakes, fresh salads</li>
                    </ul>
                </div>

                <div className="menu-section">
                    <h3>MAIN COURSES</h3>
                    <ul>
                        <li>
                            Pad Thai noodles (shrimps, tofu, egg, peanuts, tamarind sauce, bean
                            sprouts)
                        </li>
                        <li>
                            Green curry with chicken, eggplant, bamboo shoots, bell peppers
                        </li>
                        <li>Steamed jasmine rice / Garlic fried rice</li>
                        <li>Stir-fried vegetables with oyster sauce</li>
                        <li>Duck in tamarind sauce</li>
                        <li>Beef with black pepper sauce</li>
                        <li>Crispy fish with chili sauce</li>
                    </ul>
                </div>

                <div className="menu-section">
                    <h3>DESSERT</h3>
                    <ul>
                        <li>Mochi (sweet red bean, green tea, or sesame)</li>
                        <li>Fresh fruits</li>
                        <li>Homemade coconut ice cream</li>
                        <li>Waffles with fruit toppings</li>
                    </ul>
                </div>

                <div className="menu-section">
                    <h3>DRINKS</h3>
                    <ul>
                        <li>Water (free, includes lemon &amp; lime)</li>
                    </ul>
                </div>
            </div>

            {/* Menu for 20+ persons */}
            <div className="banquet-menu-card">
                <h2>
                    MENU 20+ PERSONS <span className="price">€47 / per person</span>
                </h2>

                <div className="menu-section">
                    <h3>APPETIZERS</h3>
                    <ul>
                        <li>Fresh spring rolls (pork, shrimp, rice paper)</li>
                        <li>Goi cuon (Vietnamese summer rolls)</li>
                        <li>Papaya salad</li>
                        <li>
                            Tom yum soup (prawns, lemongrass, galangal, kaffir lime leaves, chili,
                            fish sauce)
                        </li>
                    </ul>
                </div>

                <div className="menu-section">
                    <h3>MAIN COURSES</h3>
                    <ul>
                        <li>Grilled salmon (miso marinated)</li>
                        <li>Chicken satay</li>
                        <li>Beef curry</li>
                        <li>
                            Pad Thai noodles (shrimps, tofu, egg, peanuts, tamarind sauce, bean
                            sprouts)
                        </li>
                        <li>Stir-fried vegetables with tofu</li>
                        <li>Fried rice (shrimp, chicken, peas, carrots, onion)</li>
                    </ul>
                </div>

                <div className="menu-section">
                    <h3>SALADS</h3>
                    <ul>
                        <li>Green salad</li>
                        <li>Thai salad</li>
                        <li>Vietnamese salad</li>
                    </ul>
                </div>

                <div className="menu-section">
                    <h3>DESSERT</h3>
                    <ul>
                        <li>Cakes from Thai tradition</li>
                        <li>Pistachio, raspberry sorbet</li>
                        <li>Mochi</li>
                    </ul>
                </div>
            </div>

            {/* Menu for 30+ persons */}
            <div className="banquet-menu-card">
                <h2>
                    MENU 30+ PERSONS <span className="price">€50 / per person</span>
                </h2>

                <div className="menu-section">
                    <h3>APPETIZERS</h3>
                    <ul>
                        <li>Vietnamese fresh spring rolls with peanut sauce</li>
                        <li>Thai fish cakes with sweet chili sauce</li>
                        <li>Tom kha gai soup (coconut chicken soup)</li>
                        <li>Crispy wontons with minced pork and shrimp</li>
                    </ul>
                </div>

                <div className="menu-section">
                    <h3>MAIN COURSES</h3>
                    <ul>
                        <li>Massaman curry with beef and potatoes</li>
                        <li>Pineapple fried rice with shrimp and cashews</li>
                        <li>Pad see ew noodles with chicken and Chinese broccoli</li>
                        <li>Stir-fried mixed vegetables in oyster sauce</li>
                        <li>Crispy pork belly with holy basil</li>
                        <li>Steamed sea bass with lime and garlic</li>
                    </ul>
                </div>

                <div className="menu-section">
                    <h3>SIDES</h3>
                    <ul>
                        <li>Jasmine rice</li>
                        <li>Sticky rice</li>
                        <li>Pickled vegetables</li>
                    </ul>
                </div>

                <div className="menu-section">
                    <h3>DESSERT</h3>
                    <ul>
                        <li>Mango sticky rice</li>
                        <li>Thai tea crème brûlée</li>
                        <li>Assorted tropical fruit platter</li>
                        <li>Coconut tapioca pudding</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default BanquetMenu;