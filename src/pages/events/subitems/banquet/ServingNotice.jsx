import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import './BanquetMenu.scss';

const ServingNotice = ({ messageKey }) => {
    const { t } = useTranslation();
    return (
        <div className="shared-experience-banner">
            <div className="serving-notice">
                <p className="serving-description">
                    <span className="notice-label">NB!</span> {t(messageKey)}
                </p>
            </div>
        </div>
    );
};

ServingNotice.propTypes = {
    messageKey: PropTypes.string.isRequired,
};

export default ServingNotice;