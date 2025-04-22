import './BanquetMenu.scss';
import { useTranslation } from 'react-i18next';

const MenuNR1 = () => {
    const { t } = useTranslation();

    return (
        <div className="banquet-menu-card">
            <h2>
                {t('events.banquet_menu.menu_nr1')} <span className="price">€24 / {t('events.banquet_menu.price')}</span>
            </h2>

            <div className="menu-section">
                <h3>{t('events.banquet_menu.salads_title')}</h3>
                <ul>
                    <li>
            <span className="product-name">
              {t('events.banquet_menu.dishes.pankoChickenSalad.name')}
            </span>
                        <span className="product-subtitle">
              {t('events.banquet_menu.dishes.pankoChickenSalad.subtitle')}
            </span>
                    </li>
                </ul>
            </div>

            <div className="menu-section">
                <h3>{t('events.banquet_menu.appetizers_title')}</h3>
                <ul>
                    <li>
            <span className="product-name">
              {t('events.banquet_menu.dishes.prawnCrunch.name')}
            </span>
                        <span className="product-subtitle">
              {t('events.banquet_menu.dishes.prawnCrunch.subtitle')}
            </span>
                    </li>
                    <li>
            <span className="product-name">
              {t('events.banquet_menu.dishes.krupuk.name')}
            </span>
                        <span className="product-subtitle">
              {t('events.banquet_menu.dishes.krupuk.subtitle')}
            </span>
                    </li>
                    <li>
            <span className="product-name">
              {t('events.banquet_menu.dishes.gyoza.name')}
            </span>
                        <span className="product-subtitle">
              {t('events.banquet_menu.dishes.gyoza.subtitle')}
            </span>
                    </li>
                </ul>
            </div>

            <div className="menu-section">
                <h3>{t('events.banquet_menu.sushi_title')}</h3>
                <ul>
                    <li>
            <span className="product-name">
              {t('events.banquet_menu.dishes.californiaSushi.name')}
            </span>
                        <span className="product-subtitle">
              {t('events.banquet_menu.dishes.californiaSushi.subtitle')}
            </span>
                    </li>
                    <li>
            <span className="product-name">
              {t('events.banquet_menu.dishes.philadelphiaSushi.name')}
            </span>
                        <span className="product-subtitle">
              {t('events.banquet_menu.dishes.philadelphiaSushi.subtitle')}
            </span>
                    </li>
                    <li>
            <span className="product-name">
              {t('events.banquet_menu.dishes.prawnMakiSushi.name')}
            </span>
                        <span className="product-subtitle">
              {t('events.banquet_menu.dishes.prawnMakiSushi.subtitle')}
            </span>
                    </li>
                </ul>
            </div>

            <div className="menu-section">
                <h3>{t('events.banquet_menu.drinks_title')}</h3>
                <ul>
                    <li>
                        <span className="product-name">MANGO KODUNELIMONAAD</span>
                    </li>
                    <li>
                        <span className="product-name">KANNUVESI</span>
                    </li>
                </ul>
            </div>

            <div className="shared-experience-banner">
                <div className="serving-notice">
                    <p className="serving-description">
                        {t('events.banquet_menu.serving_note')}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default MenuNR1;