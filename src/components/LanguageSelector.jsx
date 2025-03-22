import { useState, useRef, useEffect, useCallback } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import ReactCountryFlag from 'react-country-flag';
import i18n from '../i18next.config.jsx';
import './LanguageSelector.css';

const languages = [
    { code: 'et', countryCode: 'EE', language: 'ET' },
    { code: 'en', countryCode: 'GB', language: 'EN' },
    { code: 'ru', countryCode: 'RU', language: 'RU' },
];

const LanguageSelector = () => {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState(i18n.language);
    const dropdownRef = useRef(null);

    const toggleDropdown = useCallback(() => {
        setOpen(prev => !prev);
    }, []);

    const handleSelect = useCallback((code) => {
        setSelected(code);
        i18n.changeLanguage(code);
        setOpen(false);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpen(false);
            }
        };
        const handleEscape = (event) => {
            if (event.key === 'Escape') setOpen(false);
        };

        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('keydown', handleEscape);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleEscape);
        };
    }, []);

    const selectedLanguage = languages.find(lang => lang.code === selected);
    const otherLanguages = languages.filter(lang => lang.code !== selected);

    return (
        <div className="custom-language-selector" ref={dropdownRef}>
            <ul className={`dropdown ${open ? 'open' : ''}`} role="listbox" aria-label="Select language">
                {otherLanguages.map(lang => (
                    <li
                        key={lang.code}
                        onClick={() => handleSelect(lang.code)}
                        role="option"
                        aria-selected={selected === lang.code}
                        tabIndex={0}
                        onKeyDown={(e) => e.key === 'Enter' && handleSelect(lang.code)}
                    >
                        <span className="language-label">
                            <ReactCountryFlag
                                countryCode={lang.countryCode}
                                svg
                                style={{ width: '1.5em', height: '1.5em' }}
                                title={lang.language}
                            />
                            <span className="language-text">{lang.language}</span>
                        </span>
                    </li>
                ))}
            </ul>
            <div
                className="selected"
                onClick={toggleDropdown}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && toggleDropdown()}
                aria-haspopup="listbox"
                aria-expanded={open}
            >
                <span className="language-label">
                    <ReactCountryFlag
                        countryCode={selectedLanguage.countryCode}
                        svg
                        style={{ width: '1.5em', height: '1.5em' }}
                        title={selectedLanguage.language}
                    />
                    <span className="language-text">{selectedLanguage.language}</span>
                </span>
                <FaChevronDown className={`chevron ${open ? 'rotate' : ''}`} aria-hidden="true" />
            </div>
        </div>
    );
};

export default LanguageSelector;