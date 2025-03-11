import PropTypes from 'prop-types';
import '../pages/menu/subitems/MenuButton.css'
import { useTranslation } from 'react-i18next';

const ContactButton = ({ link }) => {
    const { t } = useTranslation();

    return (
        <div className="button-container">
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="read-more-button"
            >
                Contact US
            </a>
        </div>
    );
};

ContactButton.propTypes = {
    link: PropTypes.string.isRequired,
};

export default ContactButton;