import './BanquetMenu.scss';
import { useTranslation } from 'react-i18next';
import ServingNotice from './ServingNotice.jsx';

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
                        <span className="product-name">
                            {t('events.banquet_menu.dishes.vesi.name')}
                        </span>
                        <span className="product-subtitle">
                            {t('events.banquet_menu.dishes.vesi.subtitle')}
                        </span>
                    </li>
                    <li>
                        <span className="product-name">
                            {t('events.banquet_menu.dishes.limonaad.name')}
                        </span>
                        <span className="product-subtitle">
                            {t('events.banquet_menu.dishes.limonaad.subtitle')}
                        </span>
                    </li>
                </ul>
            </div>

            <ServingNotice messageKey="events.banquet_menu.serving_note" />

        </div>
    );
};

export default MenuNR1;