import PropTypes from 'prop-types';
import './MenuButton.css';

const MenuButton = ({ link, children }) => {
    return (
        <div className="button-container">
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="read-more-button"
            >
                {children}
            </a>
        </div>
    );
};

MenuButton.propTypes = {
    link: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

export default MenuButton;
