import { Link as ScrollLink } from 'react-scroll';
import '/src/components/ContactButton.css';
import { useTranslation } from 'react-i18next';

const ContactButton = () => {
    const { t } = useTranslation();

    return (
        <div className="contact-button-container">
            <ScrollLink
                to="contact"
                smooth={true}
                duration={150}
                className="contact-read-more-button"
            >
                {t('events.contact_button.text')}
            </ScrollLink>
        </div>
    );
};

export default ContactButton;