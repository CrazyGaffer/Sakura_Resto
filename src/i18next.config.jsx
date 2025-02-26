// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: {
            navbar: {
                home: "Home",
                about: "About",
                menu: "Menu",
                gallery: "Gallery",
                events: "Events",
                contact: "Contact"
            },
            home: {
                heading: "Experience the Fusion",
                subheading: "Traditional Japanese Cuisine with a Modern Twist",
                bookATable: "Book a table",
                orderNow: "Order Now"
            },
            footer: {
                workingHours: "Working Hours",
                monThu: "Mon-Thu: 11 AM – 11 PM",
                fri: "Fri: 11 AM – 12 AM",
                sat: "Sat: 12 PM – 12 AM",
                sun: "Sun: 12 PM – 10 PM",
                contact: "Contact",
                email: "info@sakuraresto.ee",
                phone: "+372 5486 0852",
                address: "Pärnu mnt 32, Tallinn",
                followUs: "Follow Us",
                quickLinks: "Quick Links",
                home: "Home",
                menu: "Menu",
                gallery: "Gallery",
                events: "Events",
                rightsReserved: "All rights reserved. Developed by CrazyGaffer"
            },
        }
    },
    et: {
        translation: {
            navbar: {
                home: "Avaleht",
                about: "Meist",
                menu: "Menüü",
                gallery: "Galerii",
                events: "Sündmused",
                contact: "Kontakt"
            },
            home: {
                heading: "Koge sulandumist",
                subheading: "Traditsiooniline Jaapani köök kaasaegse nüansiga",
                bookATable: "Broneeri laud",
                orderNow: "Tellige kohe"
            },
            footer: {
                workingHours: "Tööaeg",
                monThu: "E-N: 11:00 – 23:00",
                fri: "R: 11:00 – 00:00",
                sat: "L: 12:00 – 00:00",
                sun: "P: 12:00 – 22:00",
                contact: "Kontakt",
                email: "info@sakuraresto.ee",
                phone: "+372 5486 0852",
                address: "Pärnu mnt 32, Tallinn",
                followUs: "Jälgi meid",
                quickLinks: "Kiirlinkid",
                home: "Avaleht",
                menu: "Menüü",
                gallery: "Galerii",
                events: "Sündmused",
                rightsReserved: "Kõik õigused kaitstud. Arendatud CrazyGaffer poolt"
            },
        }
    },
    ru: {
        translation: {
            navbar: {
                home: "Главная",
                about: "О нас",
                menu: "Меню",
                gallery: "Галерея",
                events: "События",
                contact: "Контакт"
            },
            home: {
                heading: "Ощутите слияние",
                subheading: "Традиционная японская кухня с современным акцентом",
                bookATable: "Забронировать",
                orderNow: "Заказать сейчас"
            },
            footer: {
                workingHours: "Режим работы",
                monThu: "Пн-Чт: 11:00 – 23:00",
                fri: "Пт: 11:00 – 00:00",
                sat: "Сб: 12:00 – 00:00",
                sun: "Вс: 12:00 – 22:00",
                contact: "Контакты",
                email: "info@sakuraresto.ee",
                phone: "+372 5486 0852",
                address: "Пярну мnt 32, Таллин",
                followUs: "Подписывайтесь",
                quickLinks: "Быстрые ссылки",
                home: "Главная",
                menu: "Меню",
                gallery: "Галерея",
                events: "События",
                rightsReserved: "Все права защищены. Разработано CrazyGaffer"
            },
        }
    }
};

i18n
    .use(initReactI18next) // Passes i18n down to react-i18next
    .init({
        resources,
        lng: "et", // default language
        fallbackLng: "en",
        interpolation: {
            escapeValue: false, // react already safes from xss
        },
    });

export default i18n;
