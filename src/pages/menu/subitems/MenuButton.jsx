import PropTypes from 'prop-types';

const MenuButton = ({ link, children, className = '' }) => {
    return (
        <div className="button-container">
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className={`read-more-button ${className}`}
            >
                {children}
            </a>
        </div>
    );
};

MenuButton.propTypes = {
    link: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

export default MenuButton;
