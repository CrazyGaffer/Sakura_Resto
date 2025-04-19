import { useState } from 'react';
import './BanquetMenu.scss';
import { useTranslation } from 'react-i18next';
import MenuNR1 from './MenuNR1.jsx';
import MenuNR2 from './MenuNR2.jsx';
import ContactButton from '../../../../components/ContactButton.jsx';

const BanquetMenu = () => {
    const { t } = useTranslation();
    const menus = [
        {
            key: 'nr12',
            title: `${t('events.banquet_menu.menu_nr1')} & ${t('events.banquet_menu.menu_nr2_selector')}`,
            content: (
                <div className="banquet-menu-duo">
                    <div className="banquet-menu-card-wrapper">
                        <MenuNR1 />
                    </div>
                    <div className="banquet-menu-card-wrapper">
                        <MenuNR2 />
                    </div>
                </div>
            ),
        },
        {
            key: 'group30',
            title: '30+ Persons (€50pp)',
            content: (
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
            ),
        },
    ];

    const [active, setActive] = useState(menus[0].key);

    return (
        <div className="banquet-menu-container">
            <div className="packages-header">
                <div className="small-rectangle-features" />
                <h4 className="packages-subtitle">{t('events.heading')}</h4>
                <h2 className="packages-menu-title">{t('events.banquet_menu.heading')}</h2>
                <p className="packages-menu-title">{t('events.banquet_menu.subheading')}</p>
            </div>

            <div className="tabs">
                <div className="tab-list">
                    {menus.map((m) => (
                        <button
                            key={m.key}
                            className={m.key === active ? 'tab active' : 'tab'}
                            onClick={() => setActive(m.key)}
                        >
                            {m.title}
                        </button>
                    ))}
                </div>
                <div className="tab-panels">
                    {menus.map(
                        (m) =>
                            m.key === active && (
                                <div key={m.key} className="tab-panel">
                                    {m.content}
                                </div>
                            )
                    )}
                </div>
            </div>

            <div className="packages-footer">
                <p className="packages-contact">{t('events.contact_text')}</p>
                <ContactButton
                    email="info@sakuraresto.ee"
                    subject="Inquiry about event packages"
                    body="Hi, I would like to know more about your party packages. Please send me further information."
                />
            </div>
        </div>
    );
};

export default BanquetMenu;