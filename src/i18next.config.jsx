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
                events: "Events",
                contact: "Contact"
            },
            home: {
                heading: "Experience the Fusion",
                subheading: "Traditional Japanese Cuisine with a Modern Twist",
                bookATable: "Book a table",
                orderNow: "Order Now"
            },
            about: {
                heading: "Our story",
                subheading: "Features",
                subtitle: "About us",
                content: "Experience the fusion of Pan-Asian culinary traditions with modern flair, where each dish tells a story of diverse heritage and innovation. Our philosophy embraces time-honored techniques reimagined to awaken your senses, blending authentic flavors from across Asia with inventive presentations. Carefully selected seasonal ingredients and refined details ensure every bite is as memorable as it is exquisite. Embark on a culinary journey that unites tradition with contemporary innovation to delight both the palate and the eye.",
                features: {
                    heading: "Why people choose us?",
                    freshFlavors: {
                        title: "Fresh Flavors",
                        description: "We use seasonal ingredients to create dishes full of authentic taste."
                    },
                    artisanCraft: {
                        title: "Artisan Craft",
                        description: "Our dishes blend traditional techniques with innovative presentation."
                    },
                    culturalHarmony: {
                        title: "Cultural Harmony",
                        description: "Experience a harmonious blend of Asian cultures in every bite."
                    }
                }
            },
            testimonials: {
                subtitle: "Testimonials",
                heading: "What Our Clients Say"
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
                about: "About",
                events: "Events",
                rightsReserved: "All rights reserved. Developed by CrazyGaffer"
            }
        }
    },
    et: {
        translation: {
            navbar: {
                home: "Avaleht",
                about: "Meist",
                menu: "Menüü",
                events: "Sündmused",
                contact: "Kontakt"
            },
            home: {
                heading: "Koge sulandumist",
                subheading: "Traditsiooniline Jaapani köök kaasaegse nüansiga",
                bookATable: "Broneeri laud",
                orderNow: "Tellige kohe"
            },
            about: {
                heading: "Meie lugu",
                subtitle: "Meist",
                subheading: "Omadused",
                content: "Koge Pan-Aasia kulinaaria traditsioonide ja kaasaegse stiili sulandumist, kus iga roog räägib mitmekesisest pärandist ja uuendusest. Meie filosoofia hõlmab ajaproovitud tehnikaid, mida ümber mõeldakse, et äratada teie meeli, segades autentsed maitsed kogu Aasias ning pakkudes loomingulisi esitusi. Hoolikalt valitud hooajalised koostisosad ja peenelt viimistletud detailid tagavad, et iga suutäis oleks sama meeldejääv kui õrn. Astu kulinaarsele teekonnale, mis ühendab traditsiooni ja kaasaegset innovatsiooni, pakkudes nautimist nii maitsemeelt kui ka silma.",
                features: {
                    heading: "Miks inimesed meid valivad?",
                    freshFlavors: {
                        title: "Värsked maitsed",
                        description: "Kasutame hooajalisi koostisosi, et luua autentse maitsega roogasid."
                    },
                    artisanCraft: {
                        title: "Käsitöö kunst",
                        description: "Roogades ühenduvad traditsioonilised tehnikad ja uuenduslik esitlus."
                    },
                    culturalHarmony: {
                        title: "Kultuuriline harmoonia",
                        description: "Koge Aasia kultuuride harmoonilist kooslust igas suutäies."
                    }
                }
            },
            testimonials: {
                subtitle: "Tagasiside",
                heading: "Mida meie kliendid ütlevad"
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
                about: "Meist",
                events: "Sündmused",
                rightsReserved: "Kõik õigused kaitstud. Arendatud CrazyGaffer poolt"
            }
        }
    },
    ru: {
        translation: {
            navbar: {
                home: "Главная",
                about: "О нас",
                menu: "Меню",
                events: "События",
                contact: "Контакт"
            },
            home: {
                heading: "Ощутите слияние",
                subheading: "Традиционная японская кухня с современным акцентом",
                bookATable: "Забронировать",
                orderNow: "Заказать сейчас"
            },
            about: {
                heading: "Наша история",
                subtitle: "О нас",
                subheading: "Особенности",
                content: "Погрузитесь в слияние паназиатских кулинарных традиций с современным стилем, где каждое блюдо рассказывает историю разнообразного наследия и инноваций. Наша философия опирается на проверенные временем техники, переосмысленные для пробуждения ваших чувств, сочетая аутентичные вкусы Азии с креативными подачами. Тщательно подобранные сезонные ингредиенты и утончённые детали гарантируют, что каждый укус запомнится своей изысканностью. Отправьтесь в кулинарное путешествие, объединяющее традиции и современные инновации, чтобы порадовать как вкус, так и взгляд.",
                features: {
                    heading: "Почему люди выбирают нас?",
                    freshFlavors: {
                        title: "Свежие вкусы",
                        description: "Мы используем сезонные ингредиенты для создания блюд с аутентичным вкусом."
                    },
                    artisanCraft: {
                        title: "Ремесленный подход",
                        description: "Наши блюда сочетают традиционные техники с инновационной подачей."
                    },
                    culturalHarmony: {
                        title: "Культурная гармония",
                        description: "Ощутите гармоничное сочетание азиатских культур в каждом укусе."
                    }
                }
            },
            testimonials: {
                subtitle: "Отзывы",
                heading: "Что говорят наши клиенты"
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
                address: "Пярну mnt 32, Таллин",
                followUs: "Подписывайтесь",
                quickLinks: "Быстрые ссылки",
                home: "Главная",
                menu: "Меню",
                about: "О нас",
                events: "События",
                rightsReserved: "Все права защищены. Разработано CrazyGaffer"
            }
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "et",
        fallbackLng: "en",
        interpolation: { escapeValue: false }
    })
    .then(() => {
        console.log("i18n initialized");
    });

export default i18n;