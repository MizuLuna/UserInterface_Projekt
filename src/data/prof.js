let dataProf =
    {
        professoren:
            [{
                id: 1,
                infos: {
                    "profID": 1,
                    "name": "Ekaterina Auer",
                    "title": "Prof. Dr. rer. nat. habil",
                    "telNumber": "03841753-7322",
                    "email": "ekaterina.auer@hs-wismar.de",
                    "office": {
                        "house": 17,
                        "room": 305
                    },
                    "teaching": [
                        "Mathematik f�r Ingenieure 1",
                        "Mathematik f�r Ingenieure 2"
                    ]
                }
            },
            {
                id: 2,
                infos: {
                    "profID": 2,
                    "name": "Matthias Kreuseler",
                    "title": "Prof. Dr.-Ing.",
                    "telNumber": "03841 753�7319",
                    "email": "matthias.kreuseler@hs-wismar.de",
                    "office": {
                        "house": 2,
                        "room": 106
                    },
                    "teaching": [
                        "Algorithmen und Datenstrukturen",
                        "Angewandte Softwareentwicklung",
                        "Grundlagen der technischen Informatik",
                        "Programmierung mobiler Ger�te",
                        "Programmierung 2",
                        "Projektseminar"
                    ]
                }
            },
            {
                id: 3,
                infos: {
                    "profID": 3,
                    "name": "Antje Raab Düsterhöft",
                    "title": "Prof. Dr.-Ing.",
                    "telNumber": "03841 753�7629",
                    "email": "antje.duesterhoeft@hs-wismar.de",
                    "office": {
                        "house": 2,
                        "room": "204c"
                    },
                    "teaching": [
                        "MMDB I: Datenbanken / Informationssysteme",
                        "Grundlagen der Sprachtechnologie ",
                        "Soft Skills 1: Pr�sentieren und Publizieren",
                        "Soft Skills 2: Kommunikation (Blockseminar)"
                    ]
                }
            },
            {
                id: 4,
                infos: {
                    "profID": 4,
                    "name": "Ernst Jonas",
                    "title": "Prof. Dr.-Ing.",
                    "telNumber": "03841 753�7230",
                    "email": "ernst.jonas@hs-wismar.de",
                    "office": {
                        "house": 2,
                        "room": "204b"
                    },
                    "teaching": [
                        "Betriebssysteme",
                        "Software Engineering",
                        "Systemnahe Programmierung",
                        "Projektseminar"
                    ]
                }
            }
                , {
                id: 5,
                infos: {
                    "profID": 5,
                    "name": "Herbert Litschke",
                    "title": "Prof. Dr. rer. nat.",
                    "telNumber": "03841 753�7306",
                    "email": "herbert.litschke@hs-wismar.de",
                    "office": {
                        "house": 2,
                        "room": 107
                    },
                    "teaching": [
                        "Bildverarbeitung",
                        "Computergrafik",
                        "Programmierung 1",
                        "Technik Multimedialer Systeme",
                        "User Interfaces"
                    ]
                }
            }
                ,
            {
                id: 6,
                infos: {
                    "profID": 6,
                    "name": "Andreas Ahrens",
                    "title": "Prof. Dr.-Ing. habil",
                    "telNumber": "03841 753�7330",
                    "email": "andreas.ahrens@hs-wismar.de",
                    "office": {
                        "house": 16,
                        "room": 204
                    },
                    "teaching": [
                        "Kryptographie",
                        "Signale und Systeme",
                        "Nachrichtentechnik",
                        "Informations�bertragung"
                    ]
                }
            }
                , {
                id: 7,
                infos: {
                    "profID": 7,
                    "name": "Jüregen Cleve",
                    "title": "Prof. Dr. rer. nat.",
                    "telNumber": "03841 753�7527",
                    "email": "juergen.cleve@hs-wismar.de",
                    "office": {
                        "house": 19,
                        "room": 305
                    },
                    "teaching": [
                        "Theoretische Informatik",
                        "K�nstliche Intelligenz",
                        "Data Mining"
                    ]
                }
            }
                , {
                id: 8,
                infos: {
                    "profID": 8,
                    "name": "Sven Pawletta",
                    "title": "Prof. Dr.-Ing.",
                    "telNumber": "03841 753�7417",
                    "email": "sven.pawletta@hs-wismar.de",
                    "office": {
                        "house": 17,
                        "room": 418
                    },
                    "teaching": [
                        "Anwendungsprogrammierung",
                        "Echtzeit- und Netzwerkprogrammierung"
                    ]
                }
            }
                , {
                id: 9,
                infos: {
                    "profID": 9,
                    "name": "Uwe Lochmann",
                    "title": "Prof. Dr.-Ing. habil.",
                    "telNumber": "03841 753�7249",
                    "email": "steffen.lochmann@hs-wismar.de",
                    "office": {
                        "house": 16,
                        "room": 212
                    },
                    "teaching": [
                        "Nachrichtentechnik",
                        "Kommunikationstechnik",
                        "Optische Kommunikationssysteme"
                    ]
                }
            }
                , {
                id: 10,
                infos: {
                    "profID": 10,
                    "name": "Jens Kraitl",
                    "title": "Prof. Dr.-Ing.",
                    "telNumber": "03841 753–7239",
                    "email": "jens.kraitl@hs-wismar.de",
                    "office": {
                        "house": 17,
                        "room": 209
                    },
                    "teaching": [
                        "Elektromagnetische Verträglichkeit und Zuverlässigkeit",
                        "Qualitätsmanagement / Qualitymanagement",
                        "Forschungsseminar"
                    ]
                }
            }],
        dozenten:
            [{
                id: 11,
                infos: {
                    "dozID": 1,
                    "name": "Renee Lüskow",
                    "title": "Dr. phil.",
                    "telNumber": "03841 753�7238",
                    "email": "renee.lueskow@hs-wismar.de",
                    "office": {
                        "house": 1,
                        "room": 311
                    },
                    "teaching": [
                        "Fachenglisch"
                    ],
                    "Praktikumsbetreuung": [
                        null
                    ]
                }
            }, {
                id: 12,
                infos: {
                    "dozID": 2,
                    "name": "Stefan Tesch",
                    "title": "Dipl.-Soz.-Verw.",
                    "telNumber": "",
                    "email": "",
                    "office": "",
                    "teaching": [
                        "Betriebswirtschaftslehre"
                    ],
                    "Praktikumsbetreuung": [
                        null
                    ]
                }
            }
                , {
                id: 13,
                infos: {
                    "dozID": 3,
                    "name": "Anke Carstensen",
                    "title": "Dipl.-Inf.",
                    "telNumber": "03841 753�7628",
                    "email": "anke.carstensen@hs-wismar.de",
                    "office": {
                        "house": 2,
                        "room": "204d"
                    },
                    "teaching": [
                        "WEB - Technologien",
                        "Datenschutz/ Datensicherheit"
                    ],
                    "Praktikumsbetreuung": [
                        "Algorithmen und Datenstrukturen, BAI 2.Semester",
                        "Angewandte Softwareentwicklung, BAI 3.Semester",
                        "Computergraphik, BAI 4.Semester",
                        "Multimedia-Datenbanken, BAI 3.Semester",
                        "Programmierung I BIET,BMEC, BSET 2.Semester",
                        "Programmierung II, BAI 2.Semester",
                        "Programmierung mobiler Ger�te, BAI 4.Semester"
                    ]
                }
            }
                , {
                id: 14,
                infos: {
                    "dozID": 4,
                    "name": "Christoph Eigenstetter",
                    "title": "Dipl.-Inf. (FH)",
                    "telNumber": "03841 753�7592",
                    "email": "christoph.eigenstetter@hs-wismar.de",
                    "office": {
                        "house": 2,
                        "room": "204a"
                    },
                    "teaching": [
                        null
                    ],
                    "Praktikumsbetreuung": [
                        "Betriebssysteme",
                        "Systemnahe Programmierung",
                        "Multimediadatenbanken"

                    ]
                }
            }
                , {
                id: 15,
                infos: {
                    "dozID": 5,
                    "name": "Robert Henning",
                    "title": null,
                    "telNumber": "03841 753�7750",
                    "email": "robert.henning@hs-wismar.de",
                    "office": {
                        "house": 2,
                        "room": "201a"
                    },
                    "teaching": [
                        null
                    ],
                    "Praktikumsbetreuung": [
                        "Grundlagen Sprachtechnologien"
                    ]
                }
            }
                , {
                id: 16,
                infos: {
                    "dozID": 6,
                    "name": "Carola Kadow",
                    "title": "Dipl.-Ing.",
                    "telNumber": "03841 753�7265",
                    "email": "carola.kadow@hs-wismar.de",
                    "office": {
                        "house": 2,
                        "room": "202"
                    },
                    "teaching": [
                        null
                    ],
                    "Praktikumsbetreuung": [
                        null
                    ]
                }



            }]
    };
export default dataProf;