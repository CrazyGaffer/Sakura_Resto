import "./BanquetMenu.scss";
import { useTranslation } from "react-i18next";

const MenuNR2 = () => {
    const { t } = useTranslation();

    return (
        <div className="banquet-menu-card">
            <h2>
                {t('events.banquet_menu.menu_nr2')} <span className="price">€38 / {t('events.banquet_menu.price')}</span>
            </h2>

            <div className="menu-section">
                <h3>{t('events.banquet_menu.appetizers_title')}</h3>
                <ul>
                    <li>
            <span className="product-name">
              {t('events.banquet_menu.menu_nr2_dishes.dynamiteChicken.name')}
            </span>
                        <span className="product-subtitle">
              {t('events.banquet_menu.menu_nr2_dishes.dynamiteChicken.subtitle')}
            </span>
                    </li>
                    <li>
            <span className="product-name">
              {t('events.banquet_menu.menu_nr2_dishes.prawnCrunch.name')}
            </span>
                        <span className="product-subtitle">
              {t('events.banquet_menu.menu_nr2_dishes.prawnCrunch.subtitle')}
            </span>
                    </li>
                    <li>
            <span className="product-name">
              {t('events.banquet_menu.menu_nr2_dishes.parmigianoSarada.name')}
            </span>
                        <span className="product-subtitle">
              {t('events.banquet_menu.menu_nr2_dishes.parmigianoSarada.subtitle')}
            </span>
                    </li>
                    <li>
            <span className="product-name">
              {t('events.banquet_menu.menu_nr2_dishes.salmonBite.name')}
            </span>
                        <span className="product-subtitle">
              {t('events.banquet_menu.menu_nr2_dishes.salmonBite.subtitle')}
            </span>
                    </li>
                    <li>
            <span className="product-name">
              {t('events.banquet_menu.menu_nr2_dishes.snowcrabCornSalad.name')}
            </span>
                        <span className="product-subtitle">
              {t('events.banquet_menu.menu_nr2_dishes.snowcrabCornSalad.subtitle')}
            </span>
                    </li>
                    <li>
            <span className="product-name">
              {t('events.banquet_menu.menu_nr2_dishes.sushiAppetizer.name')}
            </span>
                        <span className="product-subtitle">
              {t('events.banquet_menu.menu_nr2_dishes.sushiAppetizer.subtitle')}
            </span>
                    </li>
                </ul>
            </div>

            <div className="menu-section">
                <h3>{t('events.banquet_menu.mains_title')}</h3>
                <ul>
                    <li>
            <span className="product-name">
              {t('events.banquet_menu.menu_nr2_dishes.ribs.name')}
            </span>
                        <span className="product-subtitle">
              {t('events.banquet_menu.menu_nr2_dishes.ribs.subtitle')}
            </span>
                    </li>
                    <li>
            <span className="product-name">
              {t('events.banquet_menu.menu_nr2_dishes.prawns.name')}
            </span>
                        <span className="product-subtitle">
              {t('events.banquet_menu.menu_nr2_dishes.prawns.subtitle')}
            </span>
                    </li>
                    <li>
            <span className="product-name">
              {t('events.banquet_menu.menu_nr2_dishes.salmonMain.name')}
            </span>
                        <span className="product-subtitle">
              {t('events.banquet_menu.menu_nr2_dishes.salmonMain.subtitle')}
            </span>
                    </li>
                    <li>
            <span className="product-name">
              {t('events.banquet_menu.menu_nr2_dishes.veganPoke.name')}
            </span>
                        <span className="product-subtitle">
              {t('events.banquet_menu.menu_nr2_dishes.veganPoke.subtitle')}
            </span>
                    </li>
                    <li>
            <span className="product-name">
              {t('events.banquet_menu.menu_nr2_dishes.sushiMain.name')}
            </span>
                        <span className="product-subtitle">
              {t('events.banquet_menu.menu_nr2_dishes.sushiMain.subtitle')}
            </span>
                    </li>
                </ul>
            </div>

            <div className="menu-section">
                <h3>{t('events.banquet_menu.desserts_title')}</h3>
                <ul>
                    <li>
            <span className="product-name">
              {t('events.banquet_menu.menu_nr2_dishes.mochi.name')}
            </span>
                        <span className="product-subtitle">
              {t('events.banquet_menu.menu_nr2_dishes.mochi.subtitle')}
            </span>
                    </li>
                    <li>
            <span className="product-name">
              {t('events.banquet_menu.menu_nr2_dishes.macha.name')}
            </span>
                        <span className="product-subtitle">
              {t('events.banquet_menu.menu_nr2_dishes.macha.subtitle')}
            </span>
                    </li>
                    <li>
            <span className="product-name">
              {t('events.banquet_menu.menu_nr2_dishes.kook.name')}
            </span>
                        <span className="product-subtitle">
              {t('events.banquet_menu.menu_nr2_dishes.kook.subtitle')}
            </span>
                    </li>
                </ul>
            </div>

            <div className="menu-section">
                <h3>{t('events.banquet_menu.drinks_title')}</h3>
                <ul>
                    <li>
            <span className="product-name">
              {t('events.banquet_menu.menu_nr2_dishes.kannuvesi.name')}
            </span>
                    </li>
                    <li>
            <span className="product-name">
              {t('events.banquet_menu.menu_nr2_dishes.alcohol.name')}
            </span>
                    </li>
                </ul>
            </div>

            <div className="shared-experience-banner">
                <div className="serving-notice">
                    <p className="serving-description">
                        {t('events.banquet_menu.serving_note_2')}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default MenuNR2;