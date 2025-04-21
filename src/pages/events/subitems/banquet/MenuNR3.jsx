import { useTranslation } from 'react-i18next';
import './BanquetMenu.scss';

const MenuNR3 = () => {
    const { t } = useTranslation();

    return (
        <div className="banquet-menu-card">
            <h2>
                {t('events.banquet_menu.menu_nr3')} <span className="price">€61 / per person</span>
            </h2>

            <div className="menu-section">
                <h3>{t('events.banquet_menu.appetizers_title')}</h3>
                <ul>
                    <li>
            <span className="product-name">
              {t('events.banquet_menu.menu_nr3_dishes.tataki.name')}
            </span>
                        <span className="product-subtitle">
              {t('events.banquet_menu.menu_nr3_dishes.tataki.subtitle')}
            </span>
                    </li>
                    <li>
            <span className="product-name">
              {t('events.banquet_menu.menu_nr3_dishes.edamame.name')}
            </span>
                        <span className="product-subtitle">
              {t('events.banquet_menu.menu_nr3_dishes.edamame.subtitle')}
            </span>
                    </li>
                    <li>
            <span className="product-name">
              {t('events.banquet_menu.menu_nr3_dishes.wasabiPrawns.name')}
            </span>
                        <span className="product-subtitle">
              {t('events.banquet_menu.menu_nr3_dishes.wasabiPrawns.subtitle')}
            </span>
                    </li>
                </ul>
            </div>

            <div className="menu-section">
                <h3>{t('events.banquet_menu.sushi_title')}</h3>
                <ul>
                    <li>
            <span className="product-name">
              {t('events.banquet_menu.menu_nr3_dishes.nigiriSelection.name')}
            </span>
                        <span className="product-subtitle">
              {t('events.banquet_menu.menu_nr3_dishes.nigiriSelection.subtitle')}
            </span>
                    </li>
                    <li>
            <span className="product-name">
              {t('events.banquet_menu.menu_nr3_dishes.sashimi.name')}
            </span>
                        <span className="product-subtitle">
              {t('events.banquet_menu.menu_nr3_dishes.sashimi.subtitle')}
            </span>
                    </li>
                    <li>
            <span className="product-name">
              {t('events.banquet_menu.menu_nr3_dishes.spiderSushi.name')}
            </span>
                        <span className="product-subtitle">
              {t('events.banquet_menu.menu_nr3_dishes.spiderSushi.subtitle')}
            </span>
                    </li>
                </ul>
            </div>

            <div className="menu-section">
                <h3>{t('events.banquet_menu.mains_title')}</h3>
                <ul>
                    <li>
            <span className="product-name">
              {t('events.banquet_menu.menu_nr3_dishes.ribs.name')}
            </span>
                        <span className="product-subtitle">
              {t('events.banquet_menu.menu_nr3_dishes.ribs.subtitle')}
            </span>
                    </li>
                    <li>
            <span className="product-name">
              {t('events.banquet_menu.menu_nr3_dishes.prawnsMain.name')}
            </span>
                        <span className="product-subtitle">
              {t('events.banquet_menu.menu_nr3_dishes.prawnsMain.subtitle')}
            </span>
                    </li>
                    <li>
            <span className="product-name">
              {t('events.banquet_menu.menu_nr3_dishes.salmon.name')}
            </span>
                        <span className="product-subtitle">
              {t('events.banquet_menu.menu_nr3_dishes.salmon.subtitle')}
            </span>
                    </li>
                    <li>
            <span className="product-name">
              {t('events.banquet_menu.menu_nr3_dishes.veganPoke.name')}
            </span>
                        <span className="product-subtitle">
              {t('events.banquet_menu.menu_nr3_dishes.veganPoke.subtitle')}
            </span>
                    </li>
                </ul>
            </div>

            <div className="menu-section">
                <h3>{t('events.banquet_menu.desserts_title')}</h3>
                <ul>
                    <li>
            <span className="product-name">
              {t('events.banquet_menu.menu_nr3_dishes.mochi.name')}
            </span>
                        <span className="product-subtitle">
              {t('events.banquet_menu.menu_nr3_dishes.mochi.subtitle')}
            </span>
                    </li>
                    <li>
            <span className="product-name">
              {t('events.banquet_menu.menu_nr3_dishes.macha.name')}
            </span>
                        <span className="product-subtitle">
              {t('events.banquet_menu.menu_nr3_dishes.macha.subtitle')}
            </span>
                    </li>
                    <li>
            <span className="product-name">
              {t('events.banquet_menu.menu_nr3_dishes.kook.name')}
            </span>
                        <span className="product-subtitle">
              {t('events.banquet_menu.menu_nr3_dishes.kook.subtitle')}
            </span>
                    </li>
                </ul>
            </div>

            <div className="menu-section">
                <h3>{t('events.banquet_menu.drinks_title')}</h3>
                <ul>
                    <li>
            <span className="product-name">
              {t('events.banquet_menu.menu_nr3_dishes.kannuvesi.name')}
            </span>
                    </li>
                    <li>
            <span className="product-name">
              {t('events.banquet_menu.menu_nr3_dishes.alcohol.name')}
            </span>
                    </li>
                </ul>
            </div>

            <div className="shared-experience-banner">
                <div className="serving-notice">
                    <p className="serving-description">
                        {t('events.banquet_menu.serving_note_3')}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default MenuNR3;