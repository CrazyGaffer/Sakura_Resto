import { useState } from 'react';
import './BanquetMenu.scss';
import { useTranslation } from 'react-i18next';
import MenuNR1 from './MenuNR1.jsx';
import MenuNR2 from './MenuNR2.jsx';
import MenuNR3 from './MenuNR3.jsx';
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
            key: 'nr3',
            title: `${t('events.banquet_menu.menu_nr3')}`,
            content: <MenuNR3 />,
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
                    {menus.map(m => (
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
                        m =>
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
                <ContactButton />
            </div>
        </div>
    );
};

export default BanquetMenu;