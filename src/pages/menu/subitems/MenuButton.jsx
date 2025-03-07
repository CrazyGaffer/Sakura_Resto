import PropTypes from 'prop-types';
import './MenuButton.css';
import { useTranslation } from 'react-i18next';

const MenuButton = ({ link }) => {
    const { t } = useTranslation();

    return (
        <div className="button-container">
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="read-more-button"
            >
                {t('menu.button')}
            </a>
        </div>
    );
};

MenuButton.propTypes = {
    link: PropTypes.string.isRequired,
};

export default MenuButton;