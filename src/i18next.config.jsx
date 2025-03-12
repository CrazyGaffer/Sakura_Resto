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
                heading: "The Time To Taste Of Delicious Food",
                subheading: "Traditional culinary mastery with a modern twist that celebrates timeless techniques and inspires new flavor experiences",
                bookATable: "Reservation",
                orderNow: "Order"
            },
            about: {
                heading: "Our story",
                subheading: "Features",
                subtitle: "About us",
                content: "Experience the fusion of Pan-Asian culinary traditions with modern flair, where each dish tells a story of diverse heritage and innovation. Our philosophy embraces time-honored techniques reimagined to awaken your senses, blending authentic flavors from across Asia with inventive presentations. Carefully selected seasonal ingredients and refined details ensure every bite is as memorable as it is exquisite. Embark on a culinary journey that unites tradition with contemporary innovation to delight both the palate and the eye.",
                features: {
                    heading: "Why people choose us?",
                    subheading: "Exceptional service and attention to detail that makes all the difference!",
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
                },
                workingHours: {
                    heading:"Working Hours",
                    subheading:"Reserve your table now for an exquisite dining experience!",
                    button_reservation: "Reservation",
                    button_contact: "Contact us",
                    workingDays_1: "Monday to Thursday",
                    workingDays_2: "Friday",
                    workingDays_3: "Saturday",
                    workingDays_4: "Sunday",
                    workingDays_short_1: "Mon - Thu",
                    workingDays_short_2: "Sat - Sun",
                },
                statistics: {
                    heading_customers: "Visitors Daily",
                    heading_deliveries: "Deliveries Monthly",
                    heading_feedback: "Positive Feedback",
                    heading_awards: "Awards & Honors",
                }
            },
            menu: {
                heading: "Lunch Menu",
                heading_2: "À LA CARTE MENU",
                subtitle: "Menu",
                content: "Indulge in our exquisite lunch menu featuring a blend of traditional flavors with a modern twist. Our carefully curated selection highlights seasonal ingredients, innovative culinary techniques, and artful presentations that promise a memorable dining experience. Whether you're craving a hearty dish or a light bite, our lunch menu offers something for every palate in a relaxed, inviting atmosphere.",
                content_2: "Discover our à la carte selection, where each dish is prepared to order. Enjoy a diverse range of options from timeless classics to innovative culinary creations, all crafted with the freshest ingredients and a creative flair that lets you tailor your meal to your unique taste.",
                button: "Read more",
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
                events: "Üritused",
                contact: "Kontakt"
            },
            home: {
                heading: "Aeg maitseda maitsvat toitu",
                subheading: "Traditsiooniline Jaapani köök kaasaegse nüansiga",
                bookATable: "Broneeri",
                orderNow: "Telli"
            },
            about: {
                heading: "Meie lugu",
                subtitle: "Meist",
                subheading: "Omadused",
                content: "Koge Pan-Aasia kulinaaria traditsioonide ja kaasaegse stiili sulandumist, kus iga roog räägib mitmekesisest pärandist ja uuendusest. Meie filosoofia hõlmab ajaproovitud tehnikaid, mida ümber mõeldakse, et äratada teie meeli, segades autentsed maitsed kogu Aasias ning pakkudes loomingulisi esitusi. Hoolikalt valitud hooajalised koostisosad ja peenelt viimistletud detailid tagavad, et iga suutäis oleks sama meeldejääv kui õrn. Astu kulinaarsele teekonnale, mis ühendab traditsiooni ja kaasaegset innovatsiooni, pakkudes nautimist nii maitsemeelt kui ka silma.",
                features: {
                    heading: "Miks inimesed meid valivad?",
                    subheading: "Erakordne teenindus ja detailidele pühendumus, mis teeb kogu erinevuse!",
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
                },
                workingHours: {
                    heading: "Tööaeg",
                    subheading: "Broneeri oma laud juba täna, et nautida suurepärast söögielamust!",
                    button_reservation: "Broneering",
                    button_contact: "Kontakt",
                    workingDays_1: "Esmaspäevast neljapäevani",
                    workingDays_2: "Reede",
                    workingDays_3: "Laupäev",
                    workingDays_4: "Pühapäev",
                    workingDays_short_1: "E - N",
                    workingDays_short_2: "L - P",
                },
                statistics: {
                    heading_customers: "Päevased külastajad",
                    heading_deliveries: "Kuu kohaletoimetamised",
                    heading_feedback: "Positiivne tagasiside",
                    heading_awards: "Auhinnad ja tunnustused",
                }
            },
            menu: {
                heading: "Lõunasöögimenüü",
                heading_2: "À la carte menüü",
                subtitle: "Menüü",
                content: "Naudi meie erakordset lõunasöögimenüüd, mis ühendab traditsioonilised maitsed kaasaegse lähenemisega. Meie hoolikalt kureeritud valik toob esile hooajalised koostisosad, innovatiivsed kulinaaria tehnikad ja kunstipärased serveerimised, mis lubavad unustamatut söögikogemust. Olgu su isu täidlase roa või kerge ampsu järele, meie lõunasöögimenüü pakub igale maitsele midagi lõõgastavas ja kutsuvas atmosfääris.",
                content_2: "Avasta meie à la carte valik, kus iga roog valmistatakse tellimuse alusel. Naudi mitmekesist valikut alates ajatutest klassikutest kuni innovatiivsete kulinaarsete loominguteni – kõik valmistatud värskimatest koostisosadest ja loomingulise lähenemisega, mis võimaldab sul oma eine vastavalt unikaalsele maitsele kohandada.",
                button: "Loe rohkem",
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
                events: "Üritused",
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
                heading: "Время попробовать вкусную еду",
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
                    subheading: "Исключительный сервис и внимание к деталям, которые решают всё!",
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
                },
                workingHours: {
                    heading: "Режим работы",
                    subheading: "Забронируйте стол уже сегодня, чтобы насладиться великолепным кулинарным опытом!",
                    button_reservation: "Бронирование",
                    button_contact: "Свяжитесь с нами",
                    workingDays_1: "С понедельника по четверг",
                    workingDays_2: "Пятница",
                    workingDays_3: "Суббота",
                    workingDays_4: "Воскресенье",
                    workingDays_short_1: "Пн - Чт",
                    workingDays_short_2: "Сб - Вс",
                },
                statistics: {
                    heading_customers: "Ежедневные посетители",
                    heading_deliveries: "Ежемесячные доставки",
                    heading_feedback: "Положительные отзывы",
                    heading_awards: "Награды и почести",
                }
            },
            menu: {
                heading: "Обеденное меню",
                heading_2: "Меню à la carte",
                subtitle: "Меню",
                content: "Погрузитесь в наше изысканное обеденное меню, сочетающее традиционные вкусы с современной изюминкой. Наш тщательно подобранный ассортимент выделяет сезонные ингредиенты, инновационные кулинарные техники и искусное оформление, обещая незабываемые гастрономические впечатления. Независимо от того, жаждете ли вы сытного блюда или легкого перекуса, наше обеденное меню предлагает что-то для каждого вкуса в расслабленной, уютной атмосфере.",
                content_2: "Откройте для себя наш ассортимент à la carte, где каждое блюдо готовится по вашему заказу. Наслаждайтесь разнообразием вариантов от вечных классических блюд до инновационных кулинарных творений, все из которых приготовлены из самых свежих ингредиентов с творческим подходом, позволяющим адаптировать ваше блюдо под уникальный вкус.",
                button: "Читать далее",
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