import './Menu.css';
import menuItem1 from "../../assets/menu/menuItem1.jpeg";
import menuItem2 from "../../assets/menu/menuItem2.jpeg";
import { useTranslation } from "react-i18next";
import MenuButton from "../menu/subitems/MenuButton.jsx";

function Menu() {
    const { t } = useTranslation();

    return (
        <section id="menu" className="menu">
            <div className="menu-wrapper">
                <div className="menu-content">
                    <div className="menu-text">
                        <div className="menu-header">
                            <div className="small-rectangle-about"></div>
                            <h4 className="about-subtitle">{t('menu.subtitle')}</h4>
                        </div>
                        <h2>{t('menu.heading_2')}</h2>
                        <p>{t('menu.content_2')}</p>
                        <MenuButton link="https://www.sakuraresto.ee/_files/ugd/87015a_53fe56f6fbc34d07bf076e4ed04f215a.pdf" />
                    </div>
                    <div className="menu-image">
                        <img src={menuItem2} alt="Menu" />
                    </div>
                </div>

                <div className="divider"></div>

                <div className="about-content">
                    <div className="about-image">
                        <div className="image-container">
                            <img
                                src={menuItem1}
                                alt="About us"
                            />
                        </div>
                    </div>
                    <div className="about-text">
                        <div className="about-header">
                            <div className="small-rectangle-about"></div>
                            <h4 className="about-subtitle">{t('menu.subtitle')}</h4>
                        </div>
                        <h2>{t('menu.heading')}</h2>
                        <p>{t('menu.content')}</p>
                        <MenuButton link="https://www.sakuraresto.ee/_files/ugd/87015a_515e89e16ba04c3f9e58ca65b262e80c.pdf" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Menu;