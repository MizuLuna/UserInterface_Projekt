let dataSem =
    [{
        id: 1,
        modules:
            [
                {
                    id: 1,
                    "name": "Mathematik für Ingenieure 1",
                    "modulID": "MA1",
                    "profname": "Ekaterina Auer",
                    "hour": {
                        "vorlesung": 4,
                        "uebung": 2,
                        "praktikum": 0
                    },
                    "exam": "120 Minuten schriftlich",
                    "credits": 8,
                    "content": [
                        "Lineare Algebra",
                        "Komplexe Zahlen",
                        "Vektoren und Matrizen",
                        "Lineare Gleichungssysteme",
                        "Analysis",
                        "Funktionen",
                        "Grenzwerte",
                        "Differential- und Integralrechnung"
                    ]
                },
                {
                    id: 2,
                    "name": "Grundlagen der Technischen Informatik",
                    "modulID": "GTI",
                    "profname": "Matthias Kreuseler",
                    "hour": {
                        "vorlesung": 2,
                        "uebung": 1,
                        "praktikum": 1
                    },
                    "exam": "120 Minuten schriftlich",
                    "credits": 5,
                    "content": [
                        "Zahlendarstellung und Codes",
                        "Boolesche Algebra (Normalformen, Minimierung)",
                        "einfache Grundschaltungen (FlipFlop, Multiplexer, Addierer) und Rechenwerke",
                        "Speicher: Komponenten, Organisation, Cache",
                        "Aufbau und Programmierung von Mikroprozessoren",
                        "Rechnerarchitekturen: Klassifikation, Leistungsbewertung",
                        "Ein-/Ausgabe-System, Schnittstellen, Interrupt-Verwaltung",
                        "Übersetzungsvorgang bei imperativen Hochsprachen"
                    ]
                },
                {
                    id: 3,
                    "name": "Fachenglisch",
                    "modulID": "FENG",
                    "profname": "Renee Lüskow",
                    "hour": {
                        "vorlesung": 0,
                        "uebung": 4,
                        "praktikum": 0
                    },
                    "exam": "20 Minuten mündlich",
                    "credits": 5,
                    "content": [
                        "Principles of electricity; atomic model; conductors and insulators",
                        "Electron tubes, oscilloscopes",
                        "Electric current (d.c. and a.c.)and electrical circuits",
                        "Electrical components: different types of resistors; capacitors; coils and transformers",
                        "Diagrams, graphs (characteristic curves) and the language of developments and trends",
                        "Diodes and bridge rectifiers (rectification)",
                        "Electrochemistry(cells and batteries)",
                        "Semiconductors (incl. doping)",
                        "IC technology",
                        "Telecommunications: radio waves; transmission lines; transmission technologies"
                    ]
                },
                {
                    id: 4,
                    "name": "Betriebssysteme",
                    "modulID": "Besy",
                    "profname": "Ernst Jonas",
                    "hour": {
                        "vorlesung": 2,
                        "uebung": 1,
                        "praktikum": 1
                    },
                    "exam": "120 Minuten schriftlich",
                    "credits": 5,
                    "content": [
                        "Rechnerarchitekturen, Fähigkeiten und Betriebsarten von Betriebssystemen",
                        "Strukturierungsprinzipien, Betriebssystemmodelle",
                        "Betriebssystemkern",
                        "Scheduling, Synchronisation und Kommunikation",
                        "Hauptspeicher- und Betriebsmittelverwaltung",
                        "Handling und Management des Betriebssystem UNIX",
                        "Shell-Programmierung"
                    ]
                },
                {
                    id: 5,
                    "name": "Programmierung 1",
                    "modulID": "PRO1",
                    "profname": "Herbert Litschke",
                    "hour": {
                        "vorlesung": 1,
                        "uebung": 1,
                        "praktikum": 2
                    },
                    "exam": "120 Minuten schriftlich",
                    "credits": 5,
                    "content": [
                        "Einführung in die Programmiersprache C",
                        "Grundelemente, Variablen, Datentypen",
                        "Operatoren und Ausdrücke",
                        "Kontrollstrukturen",
                        "Funktionen",
                        "Zeiger und Vektoren",
                        "Datenstrukturen",
                        "Speicherverwaltung",
                        "Ein- und Ausgabe, Dateizugriff",
                        "Die Windows-Grafikschnittstelle",
                        "Objektorientierte Programmierung",
                        "Windows-Programmierung mit MFC",
                        "Multithreading"
                    ]
                },
                {
                    id: 6,
                    "name": "Betriebswirtschaftslehre",
                    "modulID": "BWL",
                    "dozID": 2,
                    "hour": {
                        "vorlesung": 4,
                        "uebung": 0,
                        "praktikum": 0
                    },
                    "exam": "120 Minuten schriftlich",
                    "credits": 5,
                    "content": [
                        "Rahmenbedingungen der BWL",
                        "Betriebliche Funktionsbereiche",
                        "Leistungsprozess und Finanzwirtschaft",
                        "Management als Aufgabe und Strategie",
                        "Werkzeuge der BWL",
                        "Wertschöpfung und ihre Verteilung"
                    ]
                }
            ],
        id: 2,
        modules:
            [
                {
                    id:1,
                    "name": "Mathematik für Ingenieure 2",
                    "modulID": "MA2",
                    "profname": "Stefan Tesch",
                    "hour": {
                        "vorlesung": 4,
                        "uebung": 4,
                        "praktikum": 0
                    },
                    "exam": "120 Minuten schriftlich",
                    "credits": 7,
                    "content": [
                        "Analysis",
                        "Zahlen- und Funktionenreihen",
                        "Fourier-Reihen und Fourier-Transformationen",
                        "Gewöhnliche Differenzialgleichungen und Laplace-Transformation",
                        "Numerik",
                        "Grundideen und numerische Effekte",
                        "Interpolation",
                        "Approximation",
                        "Numerische Integration",
                        "Numerische Lösung von Gleichungssystemen",
                        "Numerische Lösung von Differentialgleichungen",
                        "Stochastik",
                        "Kombinatorik",
                        "Klassische und bedingte Wahrscheinlichkeiten",
                        "Verteilungen",
                        "Beschreibende Statistik",
                        "Konfidenzintervalle und Signifikanztests"
                    ]
                },
                {
                    id:2,
                    "name": "Algorithmen und Datenstrukturen",
                    "modulID": "ADS",
                    "profname": "Matthias Kreuseler",
                    "hour": {
                        "vorlesung": 2,
                        "uebung": 1,
                        "praktikum": 1
                    },
                    "exam": "120 Minuten schriftlich",
                    "credits": 5,
                    "content": [
                        "Algorithmenbegriff, Beschreibungsmöglichkeiten für A.",
                        "einfache und zusammengesetzte Datenstrukturen: Feld, Stapel, Liste, Baum",
                        "Sortieren (1): selection sort, bubble sort",
                        "asymptotische Algorithmenanalyse: worst case, average case, Rechenzeitbedarf vs. Speicherbedarf",
                        "Sortieren (2): quick sort, merge sort, heap sort Datenstrukturen und Algorithmen für Graphen: Traversierung, Backtracking, kürzeste Wege, Minimale Spannbäume",
                        "Suche: lineare, binäre, Fibonacci und exponentielle Suche",
                        "Binäre Suchbäume und Algorithmen auf binären Suchbäumen und Erweiterungen (AVL Bäume)",
                        "Hashing"
                    ]
                },
                {
                    id:3,
                    "name": "Software Engineering",
                    "modulID": "SE",
                    "profname": "Ernst Jonas",
                    "hour": {
                        "vorlesung": 2,
                        "uebung": 2,
                        "praktikum": 0
                    },
                    "exam": "20 Minuten mündlich",
                    "credits": 5,
                    "content": [
                        "Allgemeine Grundlagen des Softwareentwicklungsprozesses",
                        "Softwarekrise und Software-Engineering",
                        "Softwareprozess und Softwareprozessmodelle",
                        "Entwicklung, Wartung und Qualität von Softwareprodukten",
                        "Allgemeine Prinzipien, Methoden und Konzepte der Softwareentwicklung",
                        "Phasen der Softwareentwicklung",
                        "Planung und Management von Softwareprojekten",
                        "Spezifikation, Entwurf und Realisierung von Softwaresystemen",
                        "Modellierung von Softwaresystemen",
                        "Ausgewählte Werkzeuge und Methoden der Softwareentwicklung"
                    ]
                },
                {
                    id:4,
                    "name": "Programmierung 2",
                    "modulID": "PRO2",
                    "profname": "Matthias Kreuseler",
                    "hour": {
                        "vorlesung": 2,
                        "uebung": 0,
                        "praktikum": 2
                    },
                    "exam": "20 Minuten mündlich",
                    "credits": 5,
                    "content": [
                        "Objektorientierung: Einführung, Abgrenzung, Grundlagen",
                        "OO-Konzepte (1): Kapselung, Vererbung, Polymorphie",
                        "OO-Konzepte (2): Ausnahmebehandlung, Operatoren",
                        "Generische Programmierung (Einführung): Java Generics, C++ Templates.",
                        "Generische Programmierung (C++ STL): Container, Iteratoren, Algorithmen. Boost, reguläre Ausdrücke",
                        "Parallelprogrammierung: Threads und elementare Synchronisationsmechanismen in Java; Racing Conditions und Deadlock; threadsichere Container"
                    ]
                },
                {
                    id:5,
                    "name": "Datenbanksysteme",
                    "modulID": "DBSy",
                    "profname": "Antje Raab Düsterhöft",
                    "hour": {
                        "vorlesung": 1,
                        "uebung": 2,
                        "praktikum": 1
                    },
                    "exam": "120 Minuten schriftlich",
                    "credits": 5,
                    "content": [
                        "Entwicklung von Datenbanksystemen",
                        "Entity-Relationship-Modell: Normalisierung,Datenintegrität",
                        "Relationenmodell",
                        "Relationenalgebra",
                        "SQL: Datendefinition",
                        "SQL: Anfragen, Join, Unteranfragen, Datenmanipulation",
                        "Anwendungsprogrammierung: Grundlagen DB-Zugriffe mit Java, PHP",
                        "Administration von Datenbanken",
                        "Effiziente Speicherstrukturen",
                        "Ausblick NoSQL-Datenbanken",
                        "Praktika: PostgreSQL, Oracle, DB2"
                    ]
                }
            ],
        id: 3,
        modules:
            [
                {
                    id:1,                
                    "name": "Kryptografie",
                    "modulID": "KRYP",
                    "profname": "Andreas Ahrens",
                    "hour": {
                        "vorlesung": 1,
                        "uebung": 1,
                        "praktikum": 2
                    },
                    "exam": "120 Minuten schriftlich",
                    "credits": 5,
                    "content": [
                        "Einführung in die mathematischen Grundlagen und Konzepte der klassischen und modernen Kryptologie sowie in Grundwissen über deren Algorithmen, Protokolle und Verfahren",
                        "Beschreibung und symmetrischer Verschlüsselungsverfahren und aktueller symmetrischer Algorithmen",
                        "Behandlung wichtiger asymmetrischer Verfahren sowie digitaler Zertifikate"
                    ]
                },
                {
                    id:2,
                    "name": "Grundlagen der Theoretischen Informatik",
                    "modulID": "GTHI",
                    "profname": "Jüregen Cleve",
                    "hour": {
                        "vorlesung": 2,
                        "uebung": 2,
                        "praktikum": 0
                    },
                    "exam": "120 Minuten schriftlich",
                    "credits": 5,
                    "content": [
                        "Mathematische Grundlagen (Mengen, Relationen, Funktionen, formale Sprachen)",
                        "Endliche Automaten, Kellerautomaten, Turing-Maschinen; deterministische und indeterministische Automaten",
                        "Komplexität; lösbare und unlösbare Probleme",
                        "Logik (Aussagenlogik)"
                    ]
                },
                {
                    id:3,
                    "name": "Technik Multimedialer Systeme",
                    "modulID": "TMS",
                    "profname": "Herbert Litschke",
                    "hour": {
                        "vorlesung": 1,
                        "uebung": 1,
                        "praktikum": 2
                    },
                    "exam": "20 Minuten mündlich",
                    "credits": 5,
                    "content": [
                        "Bussysteme",
                        "Codierung, Kompression",
                        "Signaltheoretische und physikalische Grundlagen der Digitalgrafik, Bild-File-Formate",
                        "Optische Ein- und Ausgabegeräte",
                        "Akustische Grundlagen, Datenformate zur Audio-Kompression, Audio-Hardware",
                        "Analoge und digitale Videotechnik, Videokompression"
                    ]
                },
                {
                    id:4, 
                    "name": "Web-Technologien",
                    "modulID": "WEB-T",
                    "profname": "Anke Carstensen",
                    "hour": {
                        "vorlesung": 1,
                        "uebung": 2,
                        "praktikum": 1
                    },
                    "exam": "20 Minuten mündlich",
                    "credits": 5,
                    "content": [
                        "Teil I: Einführung in moderne WEB-Technologien",
                        "XML, DTD, Schemata",
                        "XHTML",
                        "CSS",
                        "SVG",
                        "JavaScript",
                        "JQuery",
                        "PHP",
                        "AJAX"
                    ]
                },
                {
                id:5, 
                    "name": "Angewandte Softwareentwicklung",
                    "modulID": "ASE",
                    "profname": "Matthias Kreuseler",
                    "hour": {
                        "vorlesung": 1,
                        "uebung": 1,
                        "praktikum": 2
                    },
                    "exam": "20 Minuten mündlich",
                    "credits": 5,
                    "content": [
                        "Überblick über Softwarearchitekturen",
                        "Technisches Management von Softwareprojekten durch Quellcodeverwaltung und Bugtrackingsysteme",
                        "Einführung in die Software- und GUI-Entwicklung mit Java ",
                        "Grundlalgen XML, Xpath und XSLT",
                        "SOAP und REST Web-Services",
                        "Qualitätssicherung durch Softwaretests (Test-Driven und Behavior-Driven Development)",
                        "Kennenlernen von verschiedenen Software-Lizenzmodellen"
                    ]
                },
                {
                    id:6, 
                    "name": "Anwendungprogrammierung",
                    "modulID": "APro",
                    "profname": "Sven Pawletta",
                    "hour": {
                        "vorlesung": 1,
                        "uebung": 1,
                        "praktikum": 2
                    },
                    "exam": "120 Minuten schriftlich",
                    "credits": 5,
                    "content": [
                        "experimentelle und theoretische Modellbildung",
                        "Systemsimulation",
                        "praktische Anwendungsbeispiele unter Verwendung von SCEs (Matlab u.ä.)"
                    ]
                }
            ],
        id: 4,
        modules:
            [
            {   
                id:1,
                "name": "Kommunikationstechnik",
                "modulID": "KoTe",
                "profname": "Uwe Lochmann",
                "hour": {
                    "vorlesung": 1,
                    "uebung": 1,
                    "praktikum": 2
                },
                "exam": "120 Minuten schriftlich",
                "credits": 5,
                "content": [
                    "Netzwerk-Topologien",
                    "Ethernet, Technologie und Protokolle",
                    "TCPIP-Protokollfamilie (IP, ARP,ICMP,IGMP, TCP, UDP)",
                    "NAT/PAT",
                    "Routing, Routing-Tabellen und Routing-Protokolle",
                    "Troubleshooting",
                    "DSL-Übertragung",
                    "ATM-Übertragung",
                    "PPPoE-Protokoll"
                ]
            },
            { 
                id:2,
                "name": "Systemnahe Programmierung",
                "modulID": "SynPro",
                "profname": "Ernst Jonas",
                "hour": {
                    "vorlesung": 1,
                    "uebung": 1,
                    "praktikum": 2
                },
                "exam": "20 Minuten mündlich",
                "credits": 5,
                "content": [
                    "Betriebssystemschnittstellen",
                    "Terminaleinbindung und -handling, Gerätetreiber",
                    "Dateihandling mittels Systemcalls und Bibliotheksfunktionen",
                    "Transaktionorientierter Filezugriff mittel Datei- und Satzsperren",
                    "Prozesssystem und –Handling, Prozesssynchronisation",
                    "Prozesskommunikation mittels Signalen und Pipes",
                    "Erweiterte Interprozesskommunikation über Nachrichtenwarteschlangen, Semaphore und Gemeinschaftsspeicher "
                ]
            },
            {
                id:3,            
                "name": "Computergrafik",
                "modulID": "CoGra",
                "profname": "Herbert Litschke",
                "hour": {
                    "vorlesung": 2,
                    "uebung": 0,
                    "praktikum": 2
                },
                "exam": "20 Minuten mündlich",
                "credits": 5,
                "content": [
                    "Bussysteme",
                    "Codierung, Kompression",
                    "Signaltheoretische und physikalische Grundlagen der Digitalgrafik, Bild-File-Formate",
                    "Optische Ein- und Ausgabegeräte",
                    "Akustische Grundlagen, Datenformate zur Audio-Kompression, Audio-Hardware",
                    "Analoge und digitale Videotechnik, Videokompression"
                ]
            },
            {
                id:4, 
                "name": "Soft Skills 1: Präsentieren und Publizieren",
                "modulID": "SSI",
                "profname": "Antje Raab Düsterhöft",
                "hour": {
                    "vorlesung": 1,
                    "uebung": 1,
                    "praktikum": 2
                },
                "exam": "20 Minuten mündlich",
                "credits": 5,
                "content": [
                    "Einführung und Motivation",
                    "Wissenschaftliche Arbeiten (Thesis)",
                    "Typografische Grundlagen",
                    "Erstellung wissenschaftlicher Publikationen mit modernen Textverarbeitungssystemen (MS Office, OpenOffice.org, LaTeX)",
                    "Präsentationwissenschaftlicher Arbeiten",
                    "Rhetorik"
                ]
            },
            {
                id:5, 
                "name": "Programmierung mobiler Geräte",
                "modulID": "PMG",
                "profname": "Matthias Kreuseler",
                "hour": {
                    "vorlesung": 2,
                    "uebung": 0,
                    "praktikum": 2
                },
                "exam": "20 Minuten mündlich",
                "credits": 5,
                "content": [
                    "Betriebssysteme, HW-Plattformen",
                    "Besonderheiten bei Mobilgeräten (Speichermanagement, Wireless Networks)",
                    "APIs / SDKs (Java ME, MIDP Java, .NET Micro)",
                    "GPS-Anwendungen und Geoinformationssysteme",
                    "Sensorik mobiler Geräte",
                    "Besonderheiten im UI (Multi-Touch, Sprachsteuerung)"
                ]
            }
            ],
        id: 5,
        modules:
            [
                {
                    id:1,
                    "name": "Praxissemester",
                    "duration": "mind. 100 Tage",
                    "contactPerson": {
                        "name": "Olaf Hagendorf",
                        "office": {
                            "house": 17,
                            "room": 202
                        },
                        "telNumber": "03841 753–7176",
                        "email": "olaf.hagendorf@hs-wismar.de",
        
                    },
                    "motion": "https://fiw.hs-wismar.de/storages/hs-wismar/_FIW/Vorlagen_und_Richtlinien/PV_deutsch_BAI_.pdf",
                    "hints": "https://fiw.hs-wismar.de/storages/hs-wismar/_FIW/Vorlagen_und_Richtlinien/Hinweise_zum_praktischen_Studiensemester.pdf",
                },
            ],
        id: 6,
        modules:
            [
                {    
                    id:1,
                    "name": "Echtzeit- und Netzwerkprogrammierung",
                    "modulID": "E-NWPRO",
                    "profname": "Sven Pawletta",
                    "hour": {
                        "vorlesung": 1,
                        "uebung": 1,
                        "praktikum": 2
                    },
                    "exam": "120 Minuten schriftlich",
                    "credits": 5,
                    "content": [
                        "ereignis-und zeitgesteuerte Echtzeitsysteme",
                        "Echtzeitbetriebssysteme und -programmierschnittstellen",
                        "Signalbehandlung und I/O-Multiplexing",
                        "Socket-Programmierun",
                        "Client/Server-Applikationen"
                    ]
                },
                {
                    id:2,               
                    "name": "Grundlagen Sprachtechnologien",
                    "modulID": "GST",
                    "profname": "Antje Raab Düsterhöft",
                    "hour": {
                        "vorlesung": 1,
                        "uebung": 2,
                        "praktikum": 1
                    },
                    "exam": "20 Minuten mündlich",
                    "credits": 5,
                    "content": [
                        "Einführung in die Sprachtechnologie: Anwendungen, Herausforderungen und Grenzen, Teilgebiete",
                        "Architektur von Sprachverarbeitungssystemen",
                        "Syntax: Aufbau und Abarbeitung natürlichsprachlicher Grammatiken",
                        "Syntax: Funktionsweise von natürlichsprachlichen Parser",
                        "Lexikologie: Aufbau und Struktur von natürlichsprachlichen Wörterbüchern",
                        "Semantik: Semantische Strukturen in der natürlichen Sprache",
                        "Semantik: Prädikatenlogik zur Beschreibung von Semantik in der Sprache, Prolog",
                        "Pragmatik: Auswertung von natürlichsprachlichen Äußerungen im Kontext",
                        "Architektur von Dialogsystemen",
                        "Psychologische Aspekte zur Gestaltung von natürlichsprachlichen Dialogsystemen"
                    ]
                },
                {
                    id:3,
                    "name": "Bildverarbeitung",
                    "modulID": "BV",
                    "profname": "Herbert Litschke",
                    "hour": {
                        "vorlesung": 1,
                        "uebung": 1,
                        "praktikum": 2
                    },
                    "exam": "20 Minuten mündlich",
                    "credits": 5,
                    "content": [
                        "Grundlagen der Optik und Fotografie",
                        "Aufbau industrieller Bildverarbeitungssysteme",
                        "Abgrenzung Bildbearbeitung, -verarbeitung",
                        "Statistische Bildverarbeitung",
                        "Punktoperationen",
                        "Nachbarschaftsoperationen und Filter",
                        "Globale Operationen: Integral- und geometrische Transformationen; Fourier-Analyse von Bilddaten",
                        "Objekte und Segmentierung",
                        "Objektklassifikation",
                        "Bildverarbeitung mit MatLab",
                        "Bildverarbeitung mit neuronalen Netzen"
                    ]
                },
                {
                    id:4, 
                    "name": "Projektmanagement und Qualitätssicherung",
                    "modulID": "PMQS",
                    "profname": "Jens Kraitl",
                    "hour": {
                        "vorlesung": 1,
                        "uebung": 1,
                        "praktikum": 2
                    },
                    "exam": "20 Minuten mündlich",
                    "credits": 5,
                    "content": [
                        "Einführung: Begriffe, Grundzusammenhänge",
                        "Grundlagen: Wissensgebiete, Dimensionen, Strukturen und allgemeine Projektphasen",
                        "Projektgenerierung: Indentifikation, Analyse und Gestaltung von Projekten",
                        "Definition von Projekten: Ziel, Wirtschaftlichkeit, Organisationsstrukturen, Projektleitung",
                        "Projektplanung: Einführung, Aufgaben, Struktur, Ablauf, Termine, Personal, Kapazitäten und Kosten",
                        "Projektarbeit: Start, Leitung und Abschluss",
                        "Klassische Softwareentwicklung und Vorgehensmodelle: Wasserfall-, V-, Spiral- und XP-Modell",
                        "Agile Softwareentwicklung - Scrum: Wesen, Agiles Manifest, Rollen, Produkt-Backlog, Sprint",
                        "Kanban IT: Wesen, Prinzipien und Praktiken, Integration im Unternehmen, Vergleich mit Scrum",
                        "Qualitätsmanagement: Einführung, Rolle des Kunden, Q-Anforderungen, PDCA-Zyklus",
                        "Prozesse: Merkmale, Prozessketten, guter Prozess",
                        "Qualitätsverbesserung: Kaizen und Poka Yoke",
                        "Qualitätsmanagementsysteme und Normen: Grundätze, Entwicklungsschritte, Normen, Auditierung und Zertifizierung",
                        "Total Quality Management: Einführung, Demingsche Kette, EFQM-Excellence- Modell"
                    ]
                },
                {
                    id:5, 
                    "name": "User Interface",
                    "modulID": "UI",
                    "profname": "Herbert Litschke",
                    "hour": {
                        "vorlesung": 2,
                        "uebung": 0,
                        "praktikum": 2
                    },
                    "exam": "20 Minuten mündlich",
                    "credits": 5,
                    "content": [
                        "Grundlagen zur Bedeutung der Benutzerschnittstelle (UI)",
                        "Charakteristika grafischer Benutzeroberflächen",
                        "der Entwurfsprozess einer UI",
                        "Auslegung von Kontroll-Elementen",
                        "Verwendung und Wirkung von Farben",
                        "Strategien zur sicheren Benutzerführung",
                        "Die Mensch-Maschine-Schnittstelle der Zukunft",
                        "Praktische Umsetzung mit C++ und Qt",
                        "Geräteabhängige Aspekte von UIs)"
                    ]
                },
                {
                    id:6,
                    "name": "Wahlpflichtmodul",
                    "wahlpflichtmodul1": {
                        "name": "Medienrecht",
                        "modulID": "MeRe",
                        "profName": "Prof. Dr. jur. T. Möller",
                        "hour": {
                            "vorlesung": 2,
                            "uebung": 2,
                            "praktikum": 0
                        },
                        "exam": "20 Minuten mündlich",
                        "credits": 5,
                        "content": [
                            "Einführung in das deutsche Rechtssystem, Grundlagen der juristischen Methoden",
                            "Grundlagen des Vertragsrechts, Beschränkung des Haftungsrisikos für datenverarbeitende Berufe auf Grundlage des Zivilrechts, Urheberrechts, Patentrechts, Datenschutzrechts",
                            "Grundlagen des Werkvertragsrechts. Gewährleistungsansprüche und deren Beschränkung",
                            "Ausgewählte Themen aus dem Bereich e-commerce",
                            "Umgang mit dem Rechtsinformationssystem juris"
                        ]
                    },
                    "wahlpflichtmodul2": {
                        "name": "Existenzgründung",
                        "modulID": "EG",
                        "profName": null,
                        "hour": {
                            "vorlesung": 2,
                            "uebung": 2,
                            "praktikum": 0
                        },
                        "exam": "20 Minuten mündlich",
                        "credits": 5,
                        "content": [
                            "Ideenfindung und Kreativitätstechniken",
                            "Checkliste Gründung und Vorgehensweise",
                            "Gründungskonzept und Businessplan",
                            "Risikoanalyse",
                            "Liquiditäts- und Rentabilitätsplanung",
                            "Verkaufstraining",
                            "Buchführung und Bilanzierung",
                            "Finanzierung und Finanzplanung",
                            "Fördermittel, Eigen- und Fremdkapital",
                            "Markt und Konkurrenz",
                            "Marketing, Vertrieb und Kundenmanagement",
                            "Führungskräftetraining – Gruppendynamische Prozesse"
                        ]
                    },
                    "wahlpflichtmodul3": {
                        "name": "Statistik",
                        "modulID": "Stat",
                        "profName": "Prof. Dr. rer. pol. Gerhard Müller",
                        "hour": {
                            "vorlesung": 1,
                            "uebung": 3,
                            "praktikum": 0
                        },
                        "exam": "20 Minuten mündlich",
                        "credits": 5,
                        "content": [
                            "Grundbegriffe der Statistik (Statistische Einheit und Masse, Merkmale und ihre Klassifizierung)",
                            "Datengewinnung, - erfassung und -aufbereitung",
                            "univariate Datenanalyse (eindimensionale Häufigkeitsverteilungen, Lage- und Streuungsparameter)",
                            "multivariate Datenanalyse (zweidimensionale Häufigkeitsverteilungen, Zusammenhang von Merkmalen)",
                            "Maß- und Indexzahlen; Bestands- und Bewegungsmassen; Zeitreihenanalyse (Aufgabe, Bewegungskomponenten, Methoden der Trendermittlung, Ermittlung der Saisonkomponente)"
                        ]
                    },
                    "wahlpflichtmodul4": {
                        "name": "Systemanalyse und Softwaretechnik",
                        "modulID": "SySo",
                        "profName": "Prof. Dr. oec. E. Alde",
                        "hour": {
                            "vorlesung": 1,
                            "uebung": 1,
                            "praktikum": 2
                        },
                        "exam": "120 Minuten schriftich",
                        "credits": 5,
                        "content": [
                            "Grundlagen der Softwaretechnik, Strategien",
                            "Vorgehens- modelle, Qualitätsmanagement",
                            "Geschäftsprozess- modellierung; Projektdefinition",
                            "strategische Informationssystemplanung",
                            "Aufwandsschätzung Analyse, Ist-Analyse",
                            "Requirements Engineering, Soll- Konzept",
                            "Systemspezifikation, Pflichtenheft",
                            "Einsatz der Unified Modeling Language (UML) in der Systemanalyse"
                        ]
                    },
                    "wahlpflichtmodul5": {
                        "name": "Künstliche Intelligenz",
                        "modulID": "KI",
                        "profName": "Prof. Dr. rer. nat. J. Cleve",
                        "hour": {
                            "vorlesung": 2,
                            "uebung": 2,
                            "praktikum": 0
                        },
                        "exam": "20 Minuten mündlich",
                        "credits": 5,
                        "content": [
                            "KI – Überblick und Einführung",
                            "Programmiersprache Prolog",
                            "Problemlösungsverfahren, Problembeschreibung und - charakteristika, Problemlösung als Suche",
                            "Suchstrategien, Heuristische Suche",
                            "Wissensrepräsentation und -verarbeitung",
                            "Arten von Wissen und Wissensrepräsentation",
                            "Semantische Netze, Regel-Systeme,",
                            "Frames, Logik (Prädikatenlogik 1. Stufe)",
                            "Automatisierung der Wissensverarbeitung",
                            "Fuzzy-Logik"
                        ]
                    },
                    "wahlpflichtmodul6": {
                        "name": "",
                        "modulID": "",
                        "profID": 5,
                        "hour": {
                            "vorlesung": 2,
                            "uebung": 0,
                            "praktikum": 2
                        },
                        "exam": "20 Minuten mündlich",
                        "credits": 5,
                        "content": [

                        ]
                    }
                }
            ],
        id: 7,
        modules:
            [
                {    
                    id:1,
                    "name": "Datenschutz/ Datensicherheit",
                    "modulID": "DD",
                    "dozID": 3,
                    "hour": {
                        "vorlesung": 2,
                        "uebung": 2,
                        "praktikum": 0
                    },
                    "exam": "20 Minuten mündlich",
                    "credits": 5,
                    "content": [
                        "Datenschutz in Deutschland",
                        "Sicherheit in der Informationstechnik",
                        "Steganographie / Kryptographie",
                        "Internet und Datensicherheit"
                    ]
                },
                {
                    id:2,
                    "name": "Projekt Angewandte Informatik 2",
                    "modulID": "PAI2",
                    "profID": 2,
                    "hour": {
                        "uebung": 2,
                        "praktikum": 2
                    },
                    "exam": "APL",
                    "credits": 5,
                    "content": [
                        "Analyse der Aufgabenstellung und Erstellug eines Anforderungskataloges",
                        "Erarbeitung von Lösungdkonzepten und deren bewertender Vergleich",
                        "Entwurf und Implementierung einer ausgewählten Lösung",
                        "Test und Bewertung",
                        "Präsentation der Ergebnisse"
                    ]
                },
                {
                    id:3,                
                    "name": "Soft Skills 2: Kommunikation",
                    "modulID": "SS2",
                    "profID": 3,
                    "hour": {
                        "uebung": 2
                    },
                    "exam": "20 Minuten mündlich",
                    "credits": 5,
                    "content": [
                        "Zielstellung der Lehrveranstaltung: Was macht Kommunikation aus",
                        "Kommunikative Vorannahmen",
                        "Einführung in die Kommunikation-Kommunikations- und Wahrnehmungsmodelle",
                        "Einführung in die Repräsentationssysteme",
                        "Meta- und Milton-Modell der Sprache", 
                        "Motivationsprofile zur Zielgruppen-gerechten Kommunikation",
                        "Ausgewählte Strategien zur Team-Kommunikation (ICH-DU-Ansprache, Walt-Disney-Strategy, u.a.)"
                    ]
                },
                 {
                    id:4,
                    "name": "Bachelor-Seminar",
                    "modulID": "BS",
                    "profID": 2,
                    "hour": {
                        "uebung": 2,
                        "praktikum": 2
                    },
                    "exam": "APL",
                    "credits": 5,
                    "content": [
                        "Analyse der Aufgabenstellung und Erstellug eines Anforderungskataloges",
                        "Erarbeitung von Lösungdkonzepten und deren bewertender Vergleich",
                        "Entwurf und Implementierung einer ausgewählten Lösung",
                        "Test und Bewertung",
                        "Präsentation der Ergebnisse"
                    ]
                }        
            ]
    }];
export default dataSem;
