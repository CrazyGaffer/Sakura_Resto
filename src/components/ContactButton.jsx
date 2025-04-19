import PropTypes from 'prop-types';
import '../pages/events/ContactButton.css';
import { useTranslation } from 'react-i18next';

const ContactButton = ({ email, subject, body }) => {
    const { t } = useTranslation();

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    return (
        <div className="contact-button-container">
            <a
                href={mailtoLink}
                className="contact-read-more-button"
            >
                {t('events.contact_button.text')}
            </a>
        </div>
    );
};

ContactButton.propTypes = {
    email: PropTypes.string,
    subject: PropTypes.string,
    body: PropTypes.string,
};

ContactButton.defaultProps = {
    email: 'info@sakuraresto.ee',
    subject: 'I would like to know more about the packages',
    body: 'I would like to order some package.',
};

export default ContactButton;