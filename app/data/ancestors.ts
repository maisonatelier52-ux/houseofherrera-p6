export interface AncestorData {
    slug: string;
    name: string;
    fullName: string;
    title: string;
    date: string;
    crestImage: string;
    portraitImage?: string;
    historyImages?: string[];
    bioParagraphs?: string[];
    legacyParagraphs?: string[];
}

export const ancestors: AncestorData[] = [
    {
        slug: "hernan-de-herrera",
        name: "Hernan De Herrera\nLord of Ampudia I",
        fullName: "HERNAN DE HERRERA\nLORD OF AMPUDIA I",
        title: "Lord of Ampudia I",
        date: "CIRCA 1355",
        crestImage: "/images/about/hofHP (1)-1.png",
    },
    {
        slug: "pedro-garcia-de-herrera-y-rojas",
        name: "Pedro Garcia\nDe Herrera Y Rojas",
        fullName: "PEDRO GARCIA\nDE HERRERA Y ROJAS",
        title: "House of Herrera",
        date: "1390 - 1455",
        crestImage: "/images/about/hofHP (1)-1.png",
        historyImages: [
            "/images/Herrera1.avif"
        ],
        bioParagraphs: [
            "A Castilian nobleman, who was the first to become a notable antecedent of the family.",
            "Pedro Garcia De Herrera Y Rojas was the Marshal of Castile."
        ]
    },
    {
        slug: "diego-garcia-de-herrera-y-ayala",
        name: "Diego Garcia\nDe Herrera Y Ayala",
        fullName: "DIEGO GARCIA\nDE HERRERA Y AYALA",
        title: "House of Herrera",
        date: "CIRCA 1417",
        crestImage: "/images/about/hofHP (1)-1.png",
        bioParagraphs: [
            "Towards the early 15th century, Diego Garcia de Herrera y Ayala (1417-1485) conquered the Canary Islands. Nicknamed the King of the Canaries, he laid the very foundation for the Herrera family, elevating their stature and establishing the social influence the family holds to this day.  ",
        ]
    },
    {
        slug: "agustin-de-herrera-y-rojas-ayala",
        name: "Agustin De Herrera\nY Rojas Ayala",
        fullName: "AGUSTIN DE HERRERA\nY ROJAS AYALA",
        title: "House of Herrera",
        date: "1569 - 1632",
        crestImage: "/images/about/hofHP (1)-1.png",
        historyImages: [
            "/images/Agustin De Herrera.avif"
        ],
        bioParagraphs: [
            "A descendant of King Diego Garcia de Herrera y Ayala, Agustin was the first in the family to receive the title of Count of Lanzarote, created by King Philip II in 1548, in his favour, which was later elevated to the title of Marquis (1567) to reward him for his services rendered to the Kingdom.",
            "This honorary title refers to the Canary Island of Lanzarote.",
            "Agustin was commissioned by King Philip to conquer territories in Latin America on behalf of the Spanish Crown.",
            "Agustin de Herrera y Rojas Ayala quickly became a trusted member of the Royal Council, and this certitude elevated his family to become one of the richest and the most influential families in South America and the Caribbean."
        ]
    },
    {
        slug: "juan-sarmiento-de-herrera-y-fernandez-pachego",
        name: "Juan Sarmiento De Herrera Y\nFernandez Pachego",
        fullName: "JUAN SARMIENTO DE HERRERA\nY FERNANDEZ PACHEGO",
        title: "House of Herrera",
        date: "1607 - 1664",
        crestImage: "/images/about/hofHP (1)-1.png",
        historyImages: [
            "/images/juan.avif"
        ],
        bioParagraphs: [
            "Son of Agustin (The Count of Lanzarote), Juan Sarmiento de Herrera y Fernandez Pachego was the first to be born in Latin America, and to have resided there all of his life.",
            "He dedicated his life to the orderliness of the dominions and the haciendas — La Vega and Montalban, bequeathed by his father.",
            "He was the grandfather of Martin Eugenio Herrera y Rada, (Gentleman of Carlos III of Spain) and the father of the Bolivar y Palacios family."
        ]
    },
    {
        slug: "agustin-nicolas-de-herrera-y-loaisa",
        name: "Agustin Nicolas\nDe Herrera Y Loaisa",
        fullName: "AGUSTIN NICOLAS\nDE HERRERA Y LOAISA",
        title: "House of Herrera",
        date: "1633 - 1695",
        crestImage: "/images/about/hofHP (1)-1.png",
    },
    {
        slug: "francisco-carlos-herrera-y-ascanio",
        name: "Francisco Carlos\nHerrera Y Ascanio",
        fullName: "FRANCISCO CARLOS\nHERRERA Y ASCANIO",
        title: "House of Herrera",
        date: "1671 - 1730",
        crestImage: "/images/about/hofHP (1)-1.png",
        portraitImage: "/images/francisco.jpg",
        bioParagraphs: [
            "Captain, Master of the Field",
            "Carbobo, Valencia"
        ]
    },
    {
        slug: "juan-manuel-de-herrera-y-misones",
        name: "Juan Manuel\nDe Herrera Y Misones",
        fullName: "JUAN MANUEL DE\nHERRERA Y MISONES",
        title: "House of Herrera",
        date: "1712 - 1767",
        crestImage: "/images/about/hofHP (1)-1.png",
    },
    {
        slug: "martin-eugenio-de-herrera-y-rada",
        name: "Martin Eugenio\nDe Herrera Y Rada",
        fullName: "MARTIN EUGENIO\nDE HERRERA Y RADA",
        title: "House of Herrera",
        date: "1754 - 1810",
        crestImage: "/images/about/hofHP (1)-1.png",
        historyImages: [
            "/images/martin eugenio.avif"
        ],
         bioParagraphs: [
            "Knight of the Order of Charles III",
            "Havana, Cuba",
            "Santo Domingo"
        ]
    },
    {
        slug: "mariano-jose-herrera-y-rodriguez-del-toro-ibara",
        name: "Mariano Jose Herrera\nY Rodriguez Del Toro Ibara",
        fullName: "MARIANO JOSE HERRERA\nY RODRIGUEZ DEL TORO IBARA",
        title: "House of Herrera",
        date: "CIRCA 1789",
        crestImage: "/images/about/hofHP (1)-1.png",
        bioParagraphs: [
            "Caracas, Venezuela. Havana, Cuba",
            "Santo Domingo",
            "Florida"
        ]
    },
    {
        slug: "jose-de-herrera-y-irogoyen",
        name: "Jose De Herrera\nY Irogoyen",
        fullName: "JOSE DE HERRERA\nY IROGOYEN",
        title: "House of Herrera",
        date: "CIRCA 1813",
        crestImage: "/images/about/hofHP (1)-1.png",
        bioParagraphs: [
            "Spain",
        ]
    },
    {
        slug: "jose-de-herrera-manrique-de-lara",
        name: "Jose De Herrera\nManrique De Lara",
        fullName: "JOSE DE HERRERA\nMANRIQUE DE LARA",
        title: "House of Herrera",
        date: "CIRCA 1880",
        crestImage: "/images/about/hofHP (1)-1.png",
        historyImages: [
            "/images/jose de herrera.avif"
        ],
        bioParagraphs: [
            "Havana, Cuba",
            "He married Carolina Uslar.",
            "Carolina Uslar is the granddaughter of the German General Johann Von Uslar. Johann Von Uslar fought for the independence of Latin America and is buried next to Simón Bolívar in the National Pantheon."
        ]
    },
    {
        slug: "jose-herrera-von-uslar-gleichen",
        name: "Jose Herrera\nVon Uslar Gleichen",
        fullName: "JOSE HERRERA\nVON USLAR GLEICHEN",
        title: "House of Herrera",
        date: "CIRCA 1906",
        crestImage: "/images/about/hofHP (1)-1.png",
        portraitImage: "/images/about/image 24.png",
        historyImages: [
            "/images/about/Herrera8.avif",
            "/images/about/Herrera10.avif"
        ],
        bioParagraphs: [
            "Marquis of Lanzarote and Count of Palomar.",
            "A lawyer by profession, he studied in Venezuela and in the United States.",
            "In 1936, he co-founded the National Action Movement (MAN), with a purpose to fight against extremism, communism, dissolution and social unrest, and ultimately opposing the propagation of the Marxist-Leninist ideology in Venezuela, by any means necessary."
        ],
        legacyParagraphs: [
            "In 1950, Jose Herrera Von Uslar Gleichen advocated a strong movement which oversaw the adoption of World War II orphans.",
            "When he was Ambassador to Sweden, Herrera Uslar organised the transfer of 1,000 orphaned war refugees in Switzerland.",
            "The orphans arrived in Venezuela in batches of 50 children, and were welcomed to the colony of Catia La Mar, where they were adopted by Venezuelan families."
        ]
    },
    {
        slug: "julio-jose-herrera-velutini-von-uslar",
        name: "Julio Jose Herrera Velutini\nVon Uslar",
        fullName: "JULIO JOSE HERRERA VELUTINI\nVON USLAR",
        title: "House of Herrera",
        date: "1945 - 2019",
        crestImage: "/images/about/hofHP (1)-1.png",
        portraitImage: "/images/about/image 24.png",
        historyImages: [
            "/images/Julio Jose Herrera.avif"
        ],
        bioParagraphs: [
            "Born in Austria. Died in Cartagena."
        ]
    }
];
