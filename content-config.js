// Website Content Configuration File
// This file contains all the important content that can be easily updated
// without having to search through the HTML files

// ============= SERVICES ============
const services = {
    modeladora: {
        title: 'Massagem Modeladora',
        shortDescription: 'Modelar, uma questão estética e de auto-estima. Combate gordura localizada e promove modelagem corporal.',
        image: 'images/massagem-modeladora.jpg',
        fullDescription: 'Modelar, uma questão estética e de auto-estima. A Massagem modeladora tem como objetivo combater a gordura localizada, flacidez e promover a modelagem corporal. Os movimentos são mais vigorosos e focados nas zonas com mais tecido adiposo. A maior intensidade da massagem melhora a circulação sanguínea e esvazia as células adiposas, sendo capaz de modelar as curvas do corpo. Para complementar a técnica, é de extrema importância a utilização de cosméticos com activos termogénicos ou com funções redutoras.',
        benefits: [
            'Combate à gordura localizada',
            'Redução da flacidez',
            'Modelagem corporal',
            'Melhora da circulação sanguínea',
            'Esvaziamento das células adiposas',
            'Modelagem das curvas do corpo',
            'Ação termogénica',
            'Melhora da auto-estima'
        ],
        duration: '60-90 minutos'
    },
    ayurvedica: {
        title: 'Massagem Ayurvédica',
        shortDescription: 'Técnica milenar criada há mais de 5 mil anos que harmoniza corpo, mente e espírito.',
        image: 'images/massagem-ayurvedica.jpg',
        fullDescription: 'Técnica de massagem muito utilizada por médicos e terapeutas ayurvédicos, conhecida como a mais completa e mais antiga técnica de massagem natural, criada há mais de 5 mil anos. Ayur significa Vida e Veda significa Ciência ou Conhecimento.',
        benefits: [
            'Alívio de dores musculares moderadas',
            'Redução de enxaquecas',
            'Melhora problemas na coluna e postura',
            'Auxílio no tratamento de depressões',
            'Redução da síndrome do pânico',
            'Alívio do stress e ansiedade',
            'Harmonização entre espiritual, mental e emocional',
            'Balanceamento das energias do corpo'
        ],
        duration: '60-90 minutos'
    },
    reflexologia: {
        title: 'Reflexologia',
        shortDescription: 'Técnica de massagem oriental milenar sem contraindicações, eficaz na prevenção de doenças.',
        image: 'images/reflexologia.jpg',
        fullDescription: 'Técnica de massagem oriental milenar cada vez mais procurada em todo o mundo. Não tem contraindicações e pode ser aplicada em pessoas de todas as idades. É considerada uma terapia complementar, eficaz na prevenção de doenças.',
        benefits: [
            'Sensação de grande bem-estar geral',
            'Organismo desintoxicado e revitalizado',
            'Funções corporais normalizadas',
            'Melhoria da circulação sanguínea e drenagem linfática',
            'Fortalecimento dos sistemas imunitário e nervoso',
            'Relaxamento profundo',
            'Aumento do nível de confiança e autoestima',
            'Maior controlo do stress, ansiedade e depressão'
        ],
        duration: '45-60 minutos'
    },
    equilibrio: {
        title: 'Ritual Equilíbrio',
        shortDescription: 'Combinação de massagem com Reiki para trabalhar físico, mental, emocional e espiritual.',
        image: 'images/ritual-equilibrio.jpg',
        fullDescription: 'Neste ritual combinamos a massagem com uma sessão de Reiki. Será trabalhado o físico, o mental, o emocional e o espiritual, sendo assim potenciados os benefícios inerentes a cada uma das terapias.',
        benefits: [
            'Alívio de tensões e dores musculares',
            'Redução do stress',
            'Relaxamento profundo',
            'Equilíbrio e harmonização do sistema energético',
            'Sensação de paz e conforto',
            'Reequilíbrio das emoções',
            'Redução da ansiedade',
            'Maior consciência de si e do ambiente'
        ],
        duration: '1h20'
    },
    'constelacao-individual': {
        title: 'Constelação Familiar Individual',
        shortDescription: 'Movimento sistémico que liberta laços inconscientes para que o amor possa fluir.',
        image: 'images/constelação-individual.jpg',
        fullDescription: 'Movimento sistémico, fenomenal onde é criado um campo energético. Nesse campo é trazido à luz o que precisa ser visto para que o amor possa fluir. Podem ser trabalhados sintomas, relacionamentos, padrões, vícios. É um movimento de observação e sentido pela alma.',
        benefits: [
            'Libertação de laços inconscientes',
            'Resolução de emaranhados familiares',
            'Libertação de crenças limitantes',
            'Foco em uma vida autorresponsável e feliz',
            'Manifestação do verdadeiro amor e devoção',
            'Realização de sonhos e objetivos',
            'Melhoria nos relacionamentos',
            'Superação de padrões e vícios'
        ],
        duration: '60-90 minutos'
    },
    'constelacao-grupo': {
        title: 'Constelação Familiar em Grupo',
        shortDescription: 'Terapia sistémica em grupo para resolução de padrões e emaranhados familiares.',
        image: 'images/constelação-familiar.jpg',
        fullDescription: 'Terapia sistémica em grupo onde os participantes representam elementos do sistema familiar. Este trabalho em grupo permite uma compreensão mais profunda dos padrões coletivos e dinâmicas familiares, promovendo cura e libertação para todos os envolvidos.',
        benefits: [
            'Compreensão de padrões familiares coletivos',
            'Cura em ambiente grupal apoiador',
            'Libertação de traços transgeracionais',
            'Melhoria das dinâmicas familiares',
            'Fortalecimento dos laços familiares',
            'Resolução de conflitos sistémicos',
            'Apoio mútuo no processo de cura',
            'Expansão da consciência familiar'
        ],
        duration: '2-3 horas'
    },
    pedicure: {
        title: 'Pedicure',
        shortDescription: 'Tratamento essencial de bem-estar e saúde para manter pés bonitos e bem cuidados.',
        image: 'images/pedicure.jpg',
        fullDescription: 'Tratamento essencial de bem-estar e saúde. Ter pés bonitos e bem cuidados é importante para que se sinta bem e ativa. Independente da estação, é importante mantê-los em excelentes condições pois sustentam nosso corpo diariamente.',
        benefits: [
            'Pés bonitos e bem cuidados',
            'Sensação de bem-estar e conforto',
            'Alívio e acalma os pés',
            'Melhora da saúde geral dos pés',
            'Prevenção de problemas nos pés',
            'Melhora da circulação',
            'Sensação de leveza',
            'Autoestima elevada'
        ],
        duration: '45-60 minutos'
    }
};

// ============= SPACE IMAGES ============
const spaceImages = {
    espaco1: {
        image: 'images/espaco1.jpg',
        alt: 'Recepção'
    },
    espaco2: {
        image: 'images/espaco2.jpg',
        alt: 'Sala de Massagem'
    },
    espaco3: {
        image: 'images/espaco3.jpg',
        alt: 'Sala de Descanso'
    },
    espaco4: {
        image: 'images/espaco4.jpg',
        alt: 'Jardim'
    },
    espaco5: {
        image: 'images/espaco5.jpg',
        alt: 'Área de Café'
    }
};

// ============= GALLERY IMAGES ============
const galleryImages = {
    trabalho1: { image: 'images/galeria-trabalho-1.jpg', alt: 'Trabalho 1' },
    trabalho2: { image: 'images/galeria-trabalho-2.jpg', alt: 'Trabalho 2' },
    trabalho3: { image: 'images/galeria-trabalho-3.jpg', alt: 'Trabalho 3' },
    trabalho4: { image: 'images/galeria-trabalho-4.jpg', alt: 'Trabalho 4' },
    trabalho5: { image: 'images/galeria-trabalho-5.jpg', alt: 'Trabalho 5' },
    trabalho6: { image: 'images/galeria-trabalho-6.jpg', alt: 'Trabalho 6' },
    trabalho7: { image: 'images/galeria-trabalho-7.jpg', alt: 'Trabalho 7' },
    trabalho8: { image: 'images/galeria-trabalho-8.jpg', alt: 'Trabalho 8' },
    trabalho9: { image: 'images/galeria-trabalho-9.jpg', alt: 'Trabalho 9' },
    trabalho10: { image: 'images/galeria-trabalho-10.jpg', alt: 'Trabalho 10' },
    trabalho11: { image: 'images/galeria-trabalho-11.jpg', alt: 'Trabalho 11' },
    trabalho12: { image: 'images/galeria-trabalho-12.jpg', alt: 'Trabalho 12' }
};

// ============= HERO SECTION ============
const heroContent = {
    title: 'Bem-vindo ao Seu Espaço de Bem-Estar',
    subtitle: 'Experimente massagem terapêutica profissional num ambiente tranquilo e curativo',
    primaryButtonText: 'Agende a sua sessão',
    secondaryButtonText: 'Ver Serviços',
    backgroundImage: 'images/hero-banner.png',
    backgroundAlt: 'D\'Alma Spa Ambiente Tranquilo'
};

// ============= SECTIONS TITLES ============
const sectionTitles = {
    services: 'Os Nossos Serviços',
    ourSpace: 'O Nosso Espaço',
    gallery: 'Nosso Trabalho',
    contact: 'Entre em Contato'
};

// Export all content
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        services,
        spaceImages,
        galleryImages,
        heroContent,
        sectionTitles
    };
}
