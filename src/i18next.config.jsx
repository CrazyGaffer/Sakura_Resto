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
                heading: "NOT JUST ANOTHER JAPANESE RESTAURANT",
                subtitle: "Experience Fusion Flavors",
                content: "While our inspiration draws from various Asian influences, we pride ourselves on being much more than just a japanese restaurant. Our culinary artisans weave together a rich tapestry of flavors, celebrating the diversity of asia and european culinary traditions, to create a truly unique dinning experience.",
                bookATable: "Reserve a Table",
                orderNow: "Order Takeaway"
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
                    heading: "Working Hours",
                    subheading: "Reserve your table now for an exquisite dining experience!",
                    button_reservation: "Reservation",
                    button_contact: "Contact us",
                    workingDays_1: "Monday to Thursday",
                    workingDays_2: "Friday",
                    workingDays_3: "Saturday",
                    workingDays_4: "Sunday",
                    workingDays_short_1: "Mon - Fri",
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
                button: "See Menu",
            },
            events: {
                heading: "Events",
                title: "Make Your Event Unforgettable",
                content: "Host your private event with us and let our experienced team create an atmosphere that exceeds your expectations. Whether it’s an intimate gathering or a grand celebration, we have the perfect setting for you.",
                packages: {
                    heading: "Party Packages",
                    subheading: "We’ll Handle the Details, You Bring the Fun – Relax, Unwind, and Let Us Create an Unforgettable Celebration",
                    title_1: "Basic",
                    description_1: "Our basic package offers a simple yet delightful experience, perfect for casual gatherings.",
                    title_2: "Premium",
                    description_2: "The premium package includes additional features and enhanced services for a truly memorable event.",
                    title_3: "Luxury",
                    description_3: "Experience the ultimate in sophistication with bespoke culinary creations and exclusive amenities.",
                },
                contact_text: "To reserve an event package or for further inquiries, please contact our dedicated team.",
                contact_button: {
                    text: "Contact us"
                },
                banquet_menu: {
                    heading: "Banquet Menu",
                    subheading: "An Exceptional Banquet for Extraordinary Celebrations – We’ve Got Every Detail Covered",
                    menu_nr1: "MENU NR1",
                    menu_nr2: "MENU NR2",
                    menu_nr2_selector: "NR2",
                    menu_nr3: "MENU NR3",
                    price: "Per person",
                    drinks_title: "Drinks",
                    salads_title: "Salads",
                    appetizers_title: "Appetizers",
                    mains_title: "MAIN COURSES",
                    sushi_title: "Sushi",
                    desserts_title: "Desserts",
                    serving_note: "All dishes are served at the same time and are all for sharing",
                    serving_note_2: "Appetizers are served at the same time and are all for sharing. Main course and dessert is served personally by pre-order",
                    serving_note_3: "Appetizers are served at the same time and are all for sharing. Main course and dessert is served personally by pre-order",
                    dishes: {
                        pankoChickenSalad: {
                            name: "panko chicken salad",
                            subtitle: "Salad with crispy chicken and parmesan cheese"
                        },
                        prawnCrunch: {
                            name: "PRAWN CRUNCH",
                            subtitle: "Crispy fried prawns with salad, teriyaki and kimchi mayo"
                        },
                        krupuk: {
                            name: "KRUPUK",
                            subtitle: "Airy prawn chips with wasabi sauce"
                        },
                        gyoza: {
                            name: "GYOZA",
                            subtitle: "Japanese dumplings with chicken"
                        },
                        californiaSushi: {
                            name: "CALIFORNIA SUSHI",
                            subtitle: "Snowcrab, avocado, cucumber, white sesame"
                        },
                        philadelphiaSushi: {
                            name: "PHILADELPHIA SUSHI",
                            subtitle: "Cream cheese, salmon, cucumber, white sesame"
                        },
                        prawnMakiSushi: {
                            name: "PRAWN MAKI SUSHI",
                            subtitle: "Tempura prawns, spicy sauce, cream cheese, cucumber, masago"
                        }
                    },
                    menu_nr2_dishes: {
                        dynamiteChicken: {
                            name: "DYNAMITE CHICKEN",
                            subtitle: "Crispy chicken with dynamite sauce"
                        },
                        prawnCrunch: {
                            name: "PRAWN CRUNCH",
                            subtitle: "Crispy fried prawns with salad, teriyaki and kimchi mayo"
                        },
                        parmigianoSarada: {
                            name: "PARMIGIANO SARADA",
                            subtitle: "Green salad with avocado and edamame, parmigiano and wasabi sauce"
                        },
                        salmonBite: {
                            name: "SALMON BITE",
                            subtitle: "Bruschetta with salted salmon tar tar and cream cheese"
                        },
                        snowcrabCornSalad: {
                            name: "SNOWCRAB AND CORN SALAD",
                            subtitle: "Salad with rice, corn, cucumber and snowcrab"
                        },
                        sushiAppetizer: {
                            name: "SUSHI",
                            subtitle: "Sushi assortment with salmon, snowcrab and prawns"
                        },
                        // MAIN COURSES
                        ribs: {
                            name: "RIBS",
                            subtitle: "Teriyaki pork ribs with fries"
                        },
                        prawns: {
                            name: "PRAWNS",
                            subtitle: "Fresh salad with garlic prawns"
                        },
                        salmonMain: {
                            name: "SALMON",
                            subtitle: "Fried salmon fillet, avocado cream and sushi rice"
                        },
                        veganPoke: {
                            name: "VEGAN POKE",
                            subtitle: "Sushi rice, lettuce, vegetables, beans, sauces and crispy tofu"
                        },
                        sushiMain: {
                            name: "SUSHI",
                            subtitle: "Philadelphia sushi with fresh salmon and salmon nigiri"
                        },
                        // DESSERTS
                        mochi: {
                            name: "MOCHI",
                            subtitle: "Japanese Rice Cake"
                        },
                        macha: {
                            name: "MACHA",
                            subtitle: "Green Tea Flavor"
                        },
                        kook: {
                            name: "KOOK",
                            subtitle: "Traditional Korean Cookie"
                        },
                        // DRINKS
                        kannuvesi: {
                            name: "KANNUVESI"
                        },
                        alcohol: {
                            name: "ALCOHOL ON AGREEMENT"
                        }
                    },
                    menu_nr3_dishes: {
                        tataki: {
                            name: "TATAKI",
                            subtitle: "Flamed salmon/tuna slices with spicy ponzu"
                        },
                        edamame: {
                            name: "EDAMAME",
                            subtitle: "Steamed soybeans with sea salt"
                        },
                        wasabiPrawns: {
                            name: "WASABI PRAWNS",
                            subtitle: "Crispy tempura prawns in creamy wasabi sauce"
                        },
                        nigiriSelection: {
                            name: "NIGIRI SELECTION",
                            subtitle: "Nigiri on chef's choice"
                        },
                        sashimi: {
                            name: "SASHIMI",
                            subtitle: "Salmon, tuna, eel"
                        },
                        spiderSushi: {
                            name: "SPIDER SUSHI",
                            subtitle: "Soft shell crab, green onion, cucumber, masago, salad, wasabi sauce"
                        },
                        ribs: {
                            name: "RIBS",
                            subtitle: "Teriyaki pork ribs with fries"
                        },
                        prawnsMain: {
                            name: "PRAWNS",
                            subtitle: "Fresh salad with garlic prawns"
                        },
                        salmon: {
                            name: "SALMON",
                            subtitle: "Fried salmon fillet, avocado cream and sushi rice"
                        },
                        veganPoke: {
                            name: "VEGAN POKE",
                            subtitle: "Sushi rice, lettuce, vegetables, beans, sauces and crispy tofu"
                        },
                        mochi: {
                            name: "MOCHI",
                            subtitle: "Japanese dessert made from a sweet pounded rice dough wrapped around ice cream"
                        },
                        macha: {
                            name: "MACHA",
                            subtitle: "Green tea mousse cake with caramel and cookies"
                        },
                        kook: {
                            name: "KOOK",
                            subtitle: "Cake order on agreement"
                        },
                        kannuvesi: {
                            name: "KANNUVESI"
                        },
                        alcohol: {
                            name: "ALCOHOL ON AGREEMENT"
                        }
                    }
                },
            },
            testimonials: {
                subtitle: "Testimonials",
                heading: "What Our Clients Say"
            },
            contact: {
                heading: "Get in Touch",
                subheading: "Have a question or need a reservation? We’d love to hear from you!",
                subtitle: "Contact Us",
                location: {
                    title: "Our Location",
                    address: "Sakura Resto \n Pärnu mnt. 32 \n 10141 Tallinn"
                },
                email: {
                    title: "Email Us",
                    address: "info@sakuraresto.ee"
                },
                phone: {
                    title: "Call Us",
                    number: "+372 5486 0852"
                }
            },
            parking: {
                title: "Customer Parking",
                description: "Start parking at X6 Pärnu mnt 43A using the Snabb app and enter the promo code SAKURA15 to automatically receive a 15% discount."
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
                rightsReserved: "All rights reserved | Developed by CrazyGaffer"
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
                contact: "Võta ühendust"
            },
            home: {
                heading: "MITTE LIHTSALT JAAPANI RESTORAN",
                subtitle: "Koge fusioonmaitseid",
                content: "Kuigi meie inspiratsioon ammutab mõjutusi erinevatest Aasia köökidest, oleme uhked, et oleme palju enamat kui lihtsalt jaapani restoran. Meie kulinaariameistrid põimivad rikkaliku maitsete kanga, tähistades nii Aasia kui ka Euroopa kulinaarseid traditsioone, et luua tõeliselt ainulaadset einestamiskogemus.",
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
                    button_contact: "Võta ühendust",
                    workingDays_1: "Esmaspäevast neljapäevani",
                    workingDays_2: "Reede",
                    workingDays_3: "Laupäev",
                    workingDays_4: "Pühapäev",
                    workingDays_short_1: "E - R",
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
                heading: "LÕUNAMENÜÜ",
                heading_2: "À la carte menüü",
                subtitle: "Menüü",
                content: "Naudi meie erakordset lõunasöögimenüüd, mis ühendab traditsioonilised maitsed kaasaegse lähenemisega. Meie hoolikalt kureeritud valik toob esile hooajalised koostisosad, innovatiivsed kulinaaria tehnikad ja kunstipärased serveerimised, mis lubavad unustamatut söögikogemust. Olgu su isu täidlase roa või kerge ampsu järele, meie lõunasöögimenüü pakub igale maitsele midagi lõõgastavas ja kutsuvas atmosfääris.",
                content_2: "Avasta meie à la carte valik, kus iga roog valmistatakse tellimuse alusel. Naudi mitmekesist valikut alates ajatutest klassikutest kuni innovatiivsete kulinaarsete loominguteni – kõik valmistatud värskimatest koostisosadest ja loomingulise lähenemisega, mis võimaldab sul oma eine vastavalt unikaalsele maitsele kohandada.",
                button: "Vaata menüüd",
            },
            events: {
                heading: "Üritused",
                title: "Muuda oma üritus unustamatuks",
                content: "Korralda oma privaatüritus meie juures ning lase meie kogenud meeskonnal luua atmosfäär, mis ületab su ootusi. Olgu tegemist intiimse koosviibimise või suurejoonelise tähistamisega – meil on sulle sobivaim lahendus.",
                packages: {
                    heading: "Peopaketid",
                    subheading: "Meie hoolitseme detailide eest, sina naudi pidu – lõõgastu ning lase meil korraldada unustamatu tähistamine",
                    title_1: "Põhiline",
                    description_1: "Meie põhiline pakett pakub lihtsat, kuid meeldivat kogemust, mis sobib ideaalselt juhuslikeks koosviibimisteks.",
                    title_2: "Premium",
                    description_2: "Premium-pakett sisaldab lisafunktsioone ja täiustatud teenuseid, et luua tõeliselt meeldejääv üritus.",
                    title_3: "Luksus",
                    description_3: "Koge ülimat rafineeritust kohandatud kulinaarsete loomingute ja eksklusiivsete mugavustega."
                },
                contact_text: "Üritusepaketi broneerimiseks või lisaküsimuste korral võtke palun ühendust meie meeskonnaga.",
                contact_button: {
                    text: "Võta meiega ühendust"
                },
                banquet_menu: {
                    heading: "Banketimenüü",
                    subheading: "Erakordne bankett erakordseteks tähistusteks – hoolitseme iga detaili eest",
                    menu_nr1: "MENÜÜ NR1",
                    menu_nr2: "MENÜÜ NR2",
                    menu_nr3: "MENÜÜ NR3",
                    menu_nr2_selector: "NR2",
                    price: "INIMESE KOHTA",
                    salads_title: "SALATID",
                    drinks_title: "JOOGID",
                    mains_title: "PEAROAD",
                    appetizers_title: "EELROAD",
                    sushi_title: "Sushi",
                    desserts_title: "MAGUSTOIT",
                    serving_note: "Kõik road serveeritakse samal ajal ja need kõik on jagamiseks",
                    serving_note_2: "Eelroad serveeritakse samal ajal ja need kõik on jagamiseks. Pearooga ja magustoit serveeritakse personaalselt ettetellimisel",
                    serving_note_3: "Eelroad serveeritakse samal ajal ja need kõik on jagamiseks. Pearooga ja magustoit serveeritakse personaalselt ettetellimisel",
                    dishes: {
                        pankoChickenSalad: {
                            name: "salat krõbe kana ja parmesani juustuga",
                            subtitle: "Salat koos krõbeda kana ja parmesani juustuga"
                        },
                        prawnCrunch: {
                            name: "KRÕBEDAD KREVETID SALATIGA",
                            subtitle: "Krõbeda praetud krevetid salati, teriyaki ja kimchi majojaga"
                        },
                        krupuk: {
                            name: "KRUPUK",
                            subtitle: "Õhulised krevetikrõpsud wasabi kastmega"
                        },
                        gyoza: {
                            name: "GYOZA",
                            subtitle: "Jaapani pelmeenid kanaga"
                        },
                        californiaSushi: {
                            name: "CALIFORNIA SUSHI",
                            subtitle: "Lumekrabi, avokaado, kurk, valge seesam"
                        },
                        philadelphiaSushi: {
                            name: "PHILADELPHIA SUSHI",
                            subtitle: "Toorjuust, lõhe, kurk, valge seesam"
                        },
                        prawnMakiSushi: {
                            name: "PRAWN MAKI SUSHI",
                            subtitle: "Tempura krevetid, terav kaste, toorjuust, kurk, masago"
                        }
                    },
                    menu_nr2_dishes: {
                        dynamiteChicken: {
                            name: "DYNAMITE CHICKEN",
                            subtitle: "Krõbekana terava kastmega"
                        },
                        prawnCrunch: {
                            name: "PRAWN CRUNCH",
                            subtitle: "Krõbedad krevetid salati, teriyaki ja kimchi majojaga"
                        },
                        parmigianoSarada: {
                            name: "PARMIGIANO SARADA",
                            subtitle: "Roheline salat, avokaado ja sojaoad maitsestatud parmesani ja wasabi kastmega"
                        },
                        salmonBite: {
                            name: "SALMON BITE",
                            subtitle: "Bruschetta soolalõhe tar tar ja toorjuustuga"
                        },
                        snowcrabCornSalad: {
                            name: "SNOWCRAB AND CORN SALAD",
                            subtitle: "Salat riisi, maisi, kurgi ja lumekrabiga"
                        },
                        sushiAppetizer: {
                            name: "SUSHI",
                            subtitle: "Sushi assortii lõhe, lumekrabi ja krevetidega"
                        },
                        ribs: {
                            name: "RIBS",
                            subtitle: "Teriyaki searibid friikartuliga"
                        },
                        prawns: {
                            name: "PRAWNS",
                            subtitle: "Värske salat küüslaugu krevetidega"
                        },
                        salmonMain: {
                            name: "SALMON",
                            subtitle: "Praetud lõhefilee, avokaado kreem ja sushi riis"
                        },
                        veganPoke: {
                            name: "VEGAN POKE",
                            subtitle: "Sushi riis, värske salat, köögiviljad, oad, kastmed ja krõbe tofu"
                        },
                        sushiMain: {
                            name: "SUSHI",
                            subtitle: "Philadelphia sushi värske lõhega ja lõhe nigiri"
                        },
                        mochi: {
                            name: "MOCHI",
                            subtitle: "Jaapani magustoit, mis on valmistatud magusast tambitud riisitaignast, mis on mahitud jäätise ümber"
                        },
                        macha: {
                            name: "MACHA",
                            subtitle: "Rohelise tee‑mousse kook karamelli ja küpsistega"
                        },
                        kook: {
                            name: "KOOK",
                            subtitle: "Koogi tellimine kokkuleppel"
                        },
                        kannuvesi: {
                            name: "KANNUVESI"
                        },
                        alcohol: {
                            name: "ALCOHOL ON AGREEMENT"
                        }
                    },
                    menu_nr3_dishes: {
                        tataki: {
                            name: "TATAKI",
                            subtitle: "Põletatud lõhe/tuunikala viilud vürtsika ponzu kastmega"
                        },
                        edamame: {
                            name: "EDAMAME",
                            subtitle: "Aurutatud sojaoad meresoolaga"
                        },
                        wasabiPrawns: {
                            name: "WASABI PRAWNS",
                            subtitle: "Krõbedad tempura krevetid koorese wasabikastmes"
                        },
                        nigiriSelection: {
                            name: "NIGIRI SELECTION",
                            subtitle: "Nigiri koka valikul"
                        },
                        sashimi: {
                            name: "SASHIMI",
                            subtitle: "Lõhe, tuunikala, angerjas"
                        },
                        spiderSushi: {
                            name: "SPIDER SUSHI",
                            subtitle: "Pehme kestaga krabi, roheline sibul, kurk, masago, salat, wasabi kaste"
                        },
                        ribs: {
                            name: "RIBS",
                            subtitle: "Teriyaki searibid friikartuliga"
                        },
                        prawnsMain: {
                            name: "PRAWNS",
                            subtitle: "Värske salat küüslaugu krevetidega"
                        },
                        salmon: {
                            name: "SALMON",
                            subtitle: "Praetud lõhefilee, avokaado kreem ja sushi riis"
                        },
                        veganPoke: {
                            name: "VEGAN POKE",
                            subtitle: "Sushi riis, värske salat, köögiviljad, oad, kastmed ja krõbe tofu"
                        },
                        mochi: {
                            name: "MOCHI",
                            subtitle: "Jaapani magustoit, mis on valmistatud magusast tambitud riisitaignast, mis on mahitud jäätise ümber"
                        },
                        macha: {
                            name: "MACHA",
                            subtitle: "Rohelise tee‑mousse kook karamelli ja küpsistega"
                        },
                        kook: {
                            name: "KOOK",
                            subtitle: "Koogi tellimine kokkuleppel"
                        },
                        kannuvesi: {
                            name: "KANNUVESI"
                        },
                        alcohol: {
                            name: "ALKOHOL KOKKULEPPEL"
                        }
                    }
                }
            },
            testimonials: {
                subtitle: "Tagasiside",
                heading: "Mida meie kliendid ütlevad"
            },
            contact: {
                heading: "Võta ühendust",
                subheading: "Kas sul on küsimus või vajad broneeringut? Meil oleks hea meel sinust kuulda!",
                subtitle: "Võta meiega ühendust",
                location: {
                    title: "Meie asukoht",
                    address: "Sakura Resto \n Pärnu mnt. 32 \n 10141 Tallinn"
                },
                email: {
                    title: "Kirjuta meile",
                    address: "info@sakuraresto.ee"
                },
                phone: {
                    title: "Helista meile",
                    number: "+372 5486 0852"
                }
            },
            parking: {
                title: "Kliendi parkimine",
                description: "Alusta parkimist X6 Pärnu mnt 43A parklas Snabb'i rakenduse kaudu ning sisesta promokood SAKURA15, et saada automaatselt 15% soodustust."
            },
            footer: {
                workingHours: "Tööaeg",
                monThu: "E-N: 11:00 – 23:00",
                fri: "R: 11:00 – 00:00",
                sat: "L: 12:00 – 00:00",
                sun: "P: 12:00 – 22:00",
                contact: "Võta ühendust",
                email: "info@sakuraresto.ee",
                phone: "+372 5486 0852",
                address: "Pärnu mnt 32, Tallinn",
                followUs: "Jälgi meid",
                quickLinks: "Kiirlinkid",
                home: "Avaleht",
                menu: "Menüü",
                about: "Meist",
                events: "Üritused",
                rightsReserved: "Kõik õigused kaitstud | Developed by CrazyGaffer"
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
                heading: "НЕ ПРОСТО ЯПОНСКИЙ РЕСТОРАН",
                subtitle: "Открой для себя фьюжн-вкусы",
                content: "Несмотря на то, что источником вдохновения для нас служат различные Азиатские влияния, мы гордимся тем, что являемся не просто японским рестораном. Наши мастера кулинарного искусства обьединяют богатую смесь вкусов, которая отражает азиатские и европейские кулинарные влияния.",
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
                    workingDays_short_1: "Пн - Пт",
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
                button: "Посмотреть меню",
            },
            events: {
                heading: "События",
                title: "Сделайте ваше мероприятие незабываемым",
                content: "Проведите ваше частное мероприятие у нас и позвольте нашей опытной команде создать атмосферу, которая превзойдёт ваши ожидания. Будь то уютная встреча или грандиозное торжество – у нас найдётся идеальное решение для вас.",
                packages: {
                    heading: "Праздничные пакеты",
                    subheading: "Мы позаботимся обо всех деталях, а вы просто получайте удовольствие — расслабьтесь и позвольте нам создать незабываемый праздник",
                    title_1: "Базовый",
                    description_1: "Наш базовый пакет предлагает простой, но приятный опыт, идеально подходящий для неформальных встреч.",
                    title_2: "Премиум",
                    description_2: "Премиум-пакет включает в себя дополнительные функции и улучшенные услуги для поистине запоминающегося мероприятия.",
                    title_3: "Люкс",
                    description_3: "Ощутите высшую степень изысканности с индивидуальными кулинарными творениями и эксклюзивными удобствами."
                },
                contact_text: "Для бронирования пакета мероприятий или по дополнительным вопросам, пожалуйста, свяжитесь с нашей командой.",
                contact_button: {
                    text: "Свяжитесь с нами"
                },
                banquet_menu: {
                    heading: "Банкетное меню",
                    subheading: "Исключительный банкет для незабываемых торжеств – мы позаботились о каждой детали",
                    serving_note: "Все блюда подаются одновременно и предназначены для совместного употребления",
                    serving_note_2: "Закуски подаются одновременно и предназначены для совместного употребления. Основное блюдо и десерт подаются индивидуально по предварительному заказу",
                    serving_note_3: "Закуски подаются одновременно и предназначены для совместного употребления. Основное блюдо и десерт подаются индивидуально по предварительному заказу",
                    salads_title: "Салаты",
                    drinks_title: "Напитки",
                    sushi_title: "Суши",
                    mains_title: "Основные блюда",
                    appetizers_title: "Закуски",
                    desserts_title: "Десерты",
                    menu_nr1: "МЕНЮ NR1",
                    menu_nr2: "МЕНЮ NR2",
                    menu_nr2_selector: "NR2",
                    menu_nr3: "МЕНЮ NR3",
                    price: "НА ЧЕЛОВЕКА",
                    dishes: {
                        pankoChickenSalad: {
                            name: "PANKO CHICKEN SALAD",
                            subtitle: "Салат с хрустящей курицей и пармезаном"
                        },
                        prawnCrunch: {
                            name: "PRAWN CRUNCH",
                            subtitle: "Хрустящие креветки с салатом, соусом терияки и кимчи майо"
                        },
                        krupuk: {
                            name: "KRUPUK",
                            subtitle: "Воздушные креветочные чипсы с соусом васаби"
                        },
                        gyoza: {
                            name: "GYOZA",
                            subtitle: "Японские пельмени с курицей"
                        },
                        californiaSushi: {
                            name: "CALIFORNIA SUSHI",
                            subtitle: "Снежный краб, авокадо, огурец, белый кунжут"
                        },
                        philadelphiaSushi: {
                            name: "PHILADELPHIA SUSHI",
                            subtitle: "Крем-сыр, лосось, огурец, белый кунжут"
                        },
                        prawnMakiSushi: {
                            name: "PRAWN MAKI SUSHI",
                            subtitle: "Темпура креветки, острый соус, крем-сыр, огурец, масаго"
                        }
                    },
                    menu_nr2_dishes: {
                        dynamiteChicken: {
                            name: "DYNAMITE CHICKEN",
                            subtitle: "Хрустящая курица с соусом динамит"
                        },
                        prawnCrunch: {
                            name: "PRAWN CRUNCH",
                            subtitle: "Хрустящие креветки с салатом, соусом терияки и кимчи майо"
                        },
                        parmigianoSarada: {
                            name: "PARMIGIANO SARADA",
                            subtitle: "Зеленый салат, авокадо, бобы эдамаме с сыром пармезан и васаби соусом"
                        },
                        salmonBite: {
                            name: "SALMON BITE",
                            subtitle: "Брускетта с соленым лососем тар тар и сливочным сыром"
                        },
                        snowcrabCornSalad: {
                            name: "SNOWCRAB AND CORN SALAD",
                            subtitle: "Салат с рисом, кукурузой, огурцом и снежным крабом"
                        },
                        sushiAppetizer: {
                            name: "SUSHI",
                            subtitle: "Ассорти суши с лососем, снежным крабом и креветками"
                        },
                        ribs: {
                            name: "RIBS",
                            subtitle: "Свиные ребра терияки с картошкой фри"
                        },
                        prawns: {
                            name: "PRAWNS",
                            subtitle: "Свежий салат с чесночными креветками"
                        },
                        salmonMain: {
                            name: "SALMON",
                            subtitle: "Обжаренное филе лосося, авокадо кремом и суши рисом"
                        },
                        veganPoke: {
                            name: "VEGAN POKE",
                            subtitle: "Суши рис, салат, овощи, бобы, соусы и хрустящий тофу"
                        },
                        sushiMain: {
                            name: "SUSHI",
                            subtitle: "Филадельфия суши со свежим лососем и нигири с лососем"
                        },
                        mochi: {
                            name: "MOCHI",
                            subtitle: "Японский десерт из сладкого рисового теста, обернутый вокруг мороженого"
                        },
                        macha: {
                            name: "MACHA",
                            subtitle: "Муссовый торт из зеленого чая с карамелью и печеньем"
                        },
                        kook: {
                            name: "KOOK",
                            subtitle: "Заказ торта по договоренности"
                        },
                        kannuvesi: {
                            name: "KANNUVESI"
                        },
                        alcohol: {
                            name: "ALCOHOL ON AGREEMENT"
                        }
                    },
                    menu_nr3_dishes: {
                        tataki: {
                            name: "TATAKI",
                            subtitle: "Обожженные ломтики лосося/тунца с острым соусом понзу"
                        },
                        edamame: {
                            name: "EDAMAME",
                            subtitle: "Соевые бобы на пару с морской солью"
                        },
                        wasabiPrawns: {
                            name: "WASABI PRAWNS",
                            subtitle: "Хрустящие креветки темпура в кремово-васаби соусе"
                        },
                        nigiriSelection: {
                            name: "NIGIRI SELECTION",
                            subtitle: "Нигири на выбор повара"
                        },
                        sashimi: {
                            name: "SASHIMI",
                            subtitle: "Лосось, тунец, угорь"
                        },
                        spiderSushi: {
                            name: "SPIDER SUSHI",
                            subtitle: "Краб в мягком панцире, зеленый лук, огурец, масаго, салат, васаби соус"
                        },
                        ribs: {
                            name: "RIBS",
                            subtitle: "Свиные ребра терияки с картошкой фри"
                        },
                        prawnsMain: {
                            name: "PRAWNS",
                            subtitle: "Свежий салат с чесночными креветками"
                        },
                        salmon: {
                            name: "SALMON",
                            subtitle: "Обжаренное филе лосося, авокадо кремом и суши рис"
                        },
                        veganPoke: {
                            name: "VEGAN POKE",
                            subtitle: "Суши рис, салат, овощи, бобы, соусы и хрустящий тофу"
                        },
                        mochi: {
                            name: "MOCHI",
                            subtitle: "Японский десерт из сладкого рисового теста, в которое обернуто мороженое"
                        },
                        macha: {
                            name: "MACHA",
                            subtitle: "Муссовый торт из зеленого чая с карамелью и печеньем"
                        },
                        kook: {
                            name: "KOOK",
                            subtitle: "Заказ торта по договоренности"
                        },
                        kannuvesi: {
                            name: "KANNUVESI"
                        },
                        alcohol: {
                            name: "ALCOHOL ON AGREEMENT"
                        }
                    },
                },
            },
            testimonials: {
                subtitle: "Отзывы",
                heading: "Что говорят наши клиенты"
            },
            contact: {
                heading: "Свяжитесь с нами",
                subheading: "Есть вопрос или нужна бронь? Мы будем рады услышать вас!",
                subtitle: "Свяжитесь с нами",
                location: {
                    title: "Наше местоположение",
                    address: "Sakura Resto \n Pärnu mnt. 32 \n 10141 Tallinn"
                },
                email: {
                    title: "Напишите нам",
                    address: "info@sakuraresto.ee"
                },
                phone: {
                    title: "Позвоните нам",
                    number: "+372 5486 0852"
                }
            },
            parking: {
                title: "Парковка для клиентов",
                description: "Начните парковку на X6 Pärnu mnt 43A через приложение Snabb и введите промокод SAKURA15, чтобы автоматически получить 15% скидку."
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
                rightsReserved: "Все права защищены | Developed by CrazyGaffer"
            }
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "et", // Default language set to Estonian
        fallbackLng: "en", // Fallback language set to English
        interpolation: { escapeValue: false }
    })
    .then(() => {
        console.log("i18n initialized");
    });

export default i18n;