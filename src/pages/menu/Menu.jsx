import './Menu.css';
import item_2 from '/src/assets/menu/item_2.jpg';
import menuItem2 from '/src/assets/menu/menuItem1.jpeg';
import { useTranslation } from 'react-i18next';
import MenuButton from '../menu/subitems/MenuButton.jsx';

function Menu() {
    const { t } = useTranslation();

    return (
        <section id="menu" className="menu">
            <div className="menu-wrapper">
                {/* À la carte section */}
                <div className="menu-content">
                    <div className="menu-text">
                        <div className="menu-header">
                            <div className="small-rectangle-about" />
                            <h4 className="about-subtitle">{t('menu.subtitle')}</h4>
                        </div>
                        <h2>{t('menu.heading_2')}</h2>
                        <p>{t('menu.content_2')}</p>

                        <div className="menu-buttons">
                            <MenuButton link="https://www.sakuraresto.ee/_files/ugd/87015a_53fe56f6fbc34d07bf076e4ed04f215a.pdf">
                                {t('menu.button')}
                            </MenuButton>
                            <MenuButton link="https://www.sakuraresto.ee/_files/ugd/drinks.pdf">
                                {t('menu.drinksButton')}
                            </MenuButton>
                        </div>
                    </div>
                    <div className="menu-image">
                        <img src={menuItem2} alt="À la carte menu" />
                    </div>
                </div>

                <div className="divider" />

                <div className="menu-content">
                    <div className="menu-image">
                        <div className="image-container">
                            <img src={item_2} alt="Lunch menu" />
                        </div>
                    </div>
                    <div className="about-text">
                        <div className="about-header">
                            <div className="small-rectangle-about" />
                            <h4 className="about-subtitle">{t('menu.subtitle')}</h4>
                        </div>
                        <h2>{t('menu.heading')}</h2>
                        <p>{t('menu.content')}</p>

                        <div className="menu-buttons">
                            <MenuButton link="https://www.sakuraresto.ee/_files/ugd/87015a_515e89e16ba04c3f9e58ca65b262e80c.pdf">
                                {t('menu.button')}
                            </MenuButton>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Menu;
