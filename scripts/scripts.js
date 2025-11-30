// Animação da mensagem (Fade In e Fade Out)
setTimeout(() => {
    document.getElementById("message").style.opacity = "1"; // Fade In
}, 100); // Texto aparece após 500ms

setTimeout(() => {
    document.getElementById("message").style.opacity = "0"; // Fade Out
    document.getElementById("loading-screen").style.opacity = "0"; // Fade Out da tela de loading
}, 2000); // Texto desaparece após 3 segundos

// Exibe o conteúdo após 3.5s
setTimeout(() => {
    document.getElementById("loading-screen").style.display = "none";
    document.getElementById("content").style.display = "block";
}, 2500); // Depois de 4 segundos o conteúdo é exibido

// Sistema de Tradução
const translations = {
    pt: {
        "loading-message": "Para melhor experiência, visualização pelo PC é recomendado.",
        "loading-text": "Carregando...",
        "float-message": "Seu feedback é essencial! Se puder, avalie meu trabalho e/ou a página deixando um elogio, sugestão ou relate um problema.<br> Sua opinião me ajuda a melhorar continuamente. ;)",
        "float-later-btn": "Depois",
        "float-ok-btn": "Deixar feedback",
        "doc-link": "documentação",
        "contact-btn": "entrar em contato",
        "hero-title": "Moldando o Futuro com Tecnologia e Inovação",
        "hero-desc": "Com uma visão focada no futuro, crio soluções digitais inovadoras que conectam o presente ao amanhã. Meu trabalho transforma ideias em experiências imersivas, elevando a experiência digital e antecipando as necessidades do futuro.",
        "about-text": `Sou um Desenvolvedor Full-Stack que atua na criação de sistemas completos, APIs e interfaces modernas. Gosto de resolver problemas de forma simples e trabalhar com diferentes tecnologias para entregar bons resultados.
                        <br><br>
                        • <strong>Arquitetura e desenvolvimento do zero</strong> de sistemas complexos para grandes operações de controle de acesso<br>
                        • <strong>Plataforma nacional para redes escolares</strong> com controle de acesso inteligente por IA, gestão de unidades e dashboards em tempo real — milhares de acessos simultâneos e integrações físicas<br>
                        • <strong>Sistema web de gerenciamento logístico</strong> para cargas e veículos, com controle de fluxo portuário e rastreamento em tempo real<br>
                        • <strong>Otimização de sistemas legados</strong>, reduzindo drasticamente tempo de execução em relatórios com milhões de registros<br>
                        • <strong>Implementação de dashboards interativos via WebSocket</strong>, microserviços focados em escalabilidade e alta disponibilidade<br>
                        • <strong>BugHunter</strong>: maior volume de correções de falhas críticas, melhorias de performance e reforço de segurança<br>
                        <br><br>
                        Trabalho com <strong>metodologias ágeis, SOLID, TDD, clean code e design patterns</strong>. Tenho forte experiência em <strong>Docker, Git Flow, CI/CD, DevOps</strong> e bancos de dados relacionais e NoSQL.`,
        "education-title": "Graduação",
        "courses-title": "Cursos",
        "commits-note": "Apenas commits em repositórios públicos",
        "projects-title": "Principais Projetos:",
        "see-more-btn": "Ver mais +",
        "form-title": "Vamos construir o amanhã, juntos!",
        "form-name-label": "Seu nome completo:",
        "form-email-label": "Email principal:",
        "form-message-label": "Proposta sugerida:",
        "form-submit-btn": "Enviar",
        "feedback-title": "Deixe seu feedback",
        "feedback-email-label": "Email",
        "feedback-subject-label": "Assunto",
        "feedback-desc-label": "Descrição",
        "feedback-submit-btn": "Reportar",
        "job1-title": "Desenvolvedor Fullstack",
        "job1-period": "nov de 2021 - (presente)",
        "job1-desc1": "➥ Arquitetura e desenvolvimento de sistemas complexos do zero",
        "job1-desc2": "➥ Plataforma com IA para redes escolares",
        "job1-desc3": "➥ Sistema de gerenciamento logístico com rastreamento",
        "job1-desc4": "➥ Otimização de performance em sistemas legados",
        "job1-desc5": "➥ Dashboards WebSocket, APIs RESTful e Microserviços",
        "job2-title": "Desenvolvedor Fullstack (Temporário)",
        "job2-period": "jun de 2024 - ago de 2024",
        "job2-desc1": "➥ Reestruturação de sistema legado PHP para automação financeira",
        "job2-desc2": "➥ Redução significativa do tempo manual das equipes",
        "job2-desc3": "➥ Integração de APIs e sincronização de dados",
        "job2-desc4": "➥ Alinhamento de requisitos com clientes e times técnicos",
        "project1-title": "DeliverySync - Plataforma SaaS",
        "project1-desc": "Solução SaaS para empresas de delivery com menus digitais, integração WhatsApp (API Meta), sistema de pagamento (Asaas - Pix/Cartão), painel administrativo completo e acompanhamento de pedidos em tempo real. 100% funcional em produção.",
        "project2-title": "Java SpringBoot - API RESTful",
        "project2-desc": "API desenvolvida com JAVA + SpringBoot seguindo os princípios e restrições de arquitetura de software RESTful, utilizando banco de dados PostgresSQL.",
        "project3-title": "Software de Segurança - Setor Financeiro",
        "project3-desc": "Plataforma segura para compartilhamento de relatórios financeiros e documentos sensíveis. Interface segura para Power BI, painel administrativo, gestão de documentos e comunicados. Foco em privacidade e sigilo no tráfego de dados. Uso corporativo em empresa financeira.",
        "project4-title": "Python/Excel - Automação",
        "project4-desc": "O script Python atualiza um arquivo Excel com as cotações de USD, EUR e BTC em BRL usando uma API e a biblioteca pandas. Ele é executado com atualização constante.",
        "project5-title": "GOlang - Webscrapping",
        "project5-desc": "Projeto desenvolvido com o objetivo de capturar dados de uma determinada página web e disponibilizar os dados por meio de uma API.",
        "chatbot-greeting": "Como posso te ajudar hoje?",
        "chatbot-placeholder": "Filtre sua pergunta..."
    },
    es: {
        "loading-message": "Para una mejor experiencia, se recomienda la visualización en PC.",
        "loading-text": "Cargando...",
        "float-message": "¡Tu opinión es esencial! Si puedes, evalúa mi trabajo y/o la página dejando un elogio, sugerencia o reporta un problema.<br> Tu opinión me ayuda a mejorar continuamente. ;)",
        "float-later-btn": "Después",
        "float-ok-btn": "Dejar opinión",
        "doc-link": "documentación",
        "contact-btn": "ponerse en contacto",
        "hero-title": "Moldeando el Futuro con Tecnología e Innovación",
        "hero-desc": "Con una visión enfocada en el futuro, creo soluciones digitales innovadoras que conectan el presente con el mañana. Mi trabajo transforma ideas en experiencias inmersivas, elevando la experiencia digital y anticipando las necesidades del futuro.",
        "about-text": `Soy un Desarrollador Full-Stack que trabaja en la creación de sistemas completos, APIs e interfaces modernas. Me gusta resolver problemas de forma simple y trabajar con diferentes tecnologías para entregar buenos resultados.
                        <br><br>
                        • <strong>Arquitectura y desarrollo desde cero</strong> de sistemas complejos para grandes operaciones de control de acceso<br>
                        • <strong>Plataforma nacional para redes escolares</strong> con control de acceso inteligente por IA, gestión de unidades y dashboards en tiempo real — miles de accesos simultáneos e integraciones físicas<br>
                        • <strong>Sistema web de gestión logística</strong> para cargas y vehículos, con control de flujo portuario y rastreo en tiempo real<br>
                        • <strong>Optimización de sistemas heredados</strong>, reduciendo drásticamente el tiempo de ejecución en informes con millones de registros<br>
                        • <strong>Implementación de dashboards interactivos vía WebSocket</strong>, microservicios enfocados en escalabilidad y alta disponibilidad<br>
                        • <strong>BugHunter</strong>: mayor volumen de correcciones de fallas críticas, mejoras de rendimiento y refuerzo de seguridad<br>
                        <br><br>
                        Trabajo con <strong>metodologías ágiles, SOLID, TDD, clean code y design patterns</strong>. Tengo fuerte experiencia en <strong>Docker, Git Flow, CI/CD, DevOps</strong> y bases de datos relacionales y NoSQL.`,
        "education-title": "Graduación",
        "courses-title": "Cursos",
        "commits-note": "Solo commits en repositorios públicos",
        "projects-title": "Proyectos Principales:",
        "see-more-btn": "Ver más +",
        "form-title": "¡Construyamos el mañana, juntos!",
        "form-name-label": "Su nombre completo:",
        "form-email-label": "Email principal:",
        "form-message-label": "Propuesta sugerida:",
        "form-submit-btn": "Enviar",
        "feedback-title": "Deje su opinión",
        "feedback-email-label": "Email",
        "feedback-subject-label": "Asunto",
        "feedback-desc-label": "Descripción",
        "feedback-submit-btn": "Reportar",
        "job1-title": "Desarrollador Fullstack",
        "job1-period": "nov de 2021 - (presente)",
        "job1-desc1": "➥ Arquitectura y desarrollo de sistemas complejos desde cero",
        "job1-desc2": "➥ Plataforma con IA para redes escolares",
        "job1-desc3": "➥ Sistema de gestión logística con rastreo",
        "job1-desc4": "➥ Optimización de rendimiento en sistemas heredados",
        "job1-desc5": "➥ Dashboards WebSocket, APIs RESTful y Microservicios",
        "job2-title": "Desarrollador Fullstack (Temporal)",
        "job2-period": "jun de 2024 - ago de 2024",
        "job2-desc1": "➥ Reestructuración de sistema heredado PHP para automatización financiera",
        "job2-desc2": "➥ Reducción significativa del tiempo manual de los equipos",
        "job2-desc3": "➥ Integración de APIs y sincronización de datos",
        "job2-desc4": "➥ Alineación de requisitos con clientes y equipos técnicos",
        "project1-title": "DeliverySync - Plataforma SaaS",
        "project1-desc": "Solución SaaS para empresas de delivery con menús digitales, integración WhatsApp (API Meta), sistema de pago (Asaas - Pix/Tarjeta), panel administrativo completo y seguimiento de pedidos en tiempo real. 100% funcional en producción.",
        "project2-title": "Java SpringBoot - API RESTful",
        "project2-desc": "API desarrollada con JAVA + SpringBoot siguiendo los principios y restricciones de arquitectura de software RESTful, utilizando base de datos PostgresSQL.",
        "project3-title": "Software de Seguridad - Sector Financiero",
        "project3-desc": "Plataforma segura para compartir informes financieros y documentos sensibles. Interfaz segura para Power BI, panel administrativo, gestión de documentos y comunicados. Enfoque en privacidad y confidencialidad en el tráfico de datos. Uso corporativo en empresa financiera.",
        "project4-title": "Python/Excel - Automatización",
        "project4-desc": "El script Python actualiza un archivo Excel con las cotizaciones de USD, EUR y BTC en BRL usando una API y la biblioteca pandas. Se ejecuta con actualización constante.",
        "project5-title": "GOlang - Webscrapping",
        "project5-desc": "Proyecto desarrollado con el objetivo de capturar datos de una página web específica y poner los datos a disposición a través de una API.",
        "chatbot-greeting": "¿Cómo puedo ayudarte hoy?",
        "chatbot-placeholder": "Filtra tu pregunta..."
    },
    en: {
        "loading-message": "For the best experience, PC viewing is recommended.",
        "loading-text": "Loading...",
        "float-message": "Your feedback is essential! If you can, rate my work and/or the page by leaving a compliment, suggestion or report a problem.<br> Your opinion helps me improve continuously. ;)",
        "float-later-btn": "Later",
        "float-ok-btn": "Leave feedback",
        "doc-link": "documentation",
        "contact-btn": "get in touch",
        "hero-title": "Shaping the Future with Technology and Innovation",
        "hero-desc": "With a vision focused on the future, I create innovative digital solutions that connect the present to tomorrow. My work transforms ideas into immersive experiences, elevating the digital experience and anticipating future needs.",
        "about-text": `I am a Full-Stack Developer who works on creating complete systems, APIs and modern interfaces. I like to solve problems in a simple way and work with different technologies to deliver good results.
                        <br><br>
                        • <strong>Architecture and development from scratch</strong> of complex systems for large access control operations<br>
                        • <strong>National platform for school networks</strong> with intelligent access control by AI, unit management and real-time dashboards — thousands of simultaneous accesses and physical integrations<br>
                        • <strong>Web logistics management system</strong> for cargo and vehicles, with port flow control and real-time tracking<br>
                        • <strong>Legacy systems optimization</strong>, drastically reducing execution time in reports with millions of records<br>
                        • <strong>Implementation of interactive dashboards via WebSocket</strong>, microservices focused on scalability and high availability<br>
                        • <strong>BugHunter</strong>: highest volume of critical bug fixes, performance improvements and security reinforcement<br>
                        <br><br>
                        I work with <strong>agile methodologies, SOLID, TDD, clean code and design patterns</strong>. I have strong experience in <strong>Docker, Git Flow, CI/CD, DevOps</strong> and relational and NoSQL databases.`,
        "education-title": "Education",
        "courses-title": "Courses",
        "commits-note": "Only commits in public repositories",
        "projects-title": "Main Projects:",
        "see-more-btn": "See more +",
        "form-title": "Let's build tomorrow, together!",
        "form-name-label": "Your full name:",
        "form-email-label": "Main email:",
        "form-message-label": "Suggested proposal:",
        "form-submit-btn": "Send",
        "feedback-title": "Leave your feedback",
        "feedback-email-label": "Email",
        "feedback-subject-label": "Subject",
        "feedback-desc-label": "Description",
        "feedback-submit-btn": "Report",
        "job1-title": "Fullstack Developer",
        "job1-period": "Nov 2021 - (present)",
        "job1-desc1": "➥ Architecture and development of complex systems from scratch",
        "job1-desc2": "➥ AI platform for school networks",
        "job1-desc3": "➥ Logistics management system with tracking",
        "job1-desc4": "➥ Performance optimization in legacy systems",
        "job1-desc5": "➥ WebSocket Dashboards, RESTful APIs and Microservices",
        "job2-title": "Fullstack Developer (Temporary)",
        "job2-period": "Jun 2024 - Aug 2024",
        "job2-desc1": "➥ Restructuring of legacy PHP system for financial automation",
        "job2-desc2": "➥ Significant reduction in manual team time",
        "job2-desc3": "➥ API integration and data synchronization",
        "job2-desc4": "➥ Requirements alignment with clients and technical teams",
        "project1-title": "DeliverySync - SaaS Platform",
        "project1-desc": "SaaS solution for delivery companies with digital menus, WhatsApp integration (Meta API), payment system (Asaas - Pix/Card), complete administrative panel and real-time order tracking. 100% functional in production.",
        "project2-title": "Java SpringBoot - RESTful API",
        "project2-desc": "API developed with JAVA + SpringBoot following RESTful software architecture principles and restrictions, using PostgresSQL database.",
        "project3-title": "Security Software - Financial Sector",
        "project3-desc": "Secure platform for sharing financial reports and sensitive documents. Secure interface for Power BI, administrative panel, document and announcement management. Focus on privacy and confidentiality in data traffic. Corporate use in financial company.",
        "project4-title": "Python/Excel - Automation",
        "project4-desc": "The Python script updates an Excel file with USD, EUR and BTC quotes in BRL using an API and the pandas library. It runs with constant updates.",
        "project5-title": "GOlang - Webscrapping",
        "project5-desc": "Project developed with the objective of capturing data from a specific web page and making the data available through an API.",
        "chatbot-greeting": "How can I help you today?",
        "chatbot-placeholder": "Filter your question..."
    }
};

let currentLanguage = localStorage.getItem('language') || 'pt';

// Função para obter o label traduzido do gráfico radar
function getRadarChartLabel() {
    const labels = {
        pt: 'Percentual de uso das linguagens (%)',
        es: 'Porcentaje de uso de los lenguajes (%)',
        en: 'Language usage percentage (%)'
    };
    return labels[currentLanguage] || labels.pt;
}

function changeLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    
    // Atualizar todos os elementos com data-lang
    document.querySelectorAll('[data-lang]').forEach(element => {
        const key = element.getAttribute('data-lang');
        if (translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });
    
    // Atualizar placeholders
    document.querySelectorAll('[data-lang-placeholder]').forEach(element => {
        const key = element.getAttribute('data-lang-placeholder');
        if (translations[lang][key]) {
            element.placeholder = translations[lang][key];
        }
    });
    
    // Atualizar opções do chatbot
    updateChatbotOptions(lang);
    
    // Atualizar label do gráfico radar
    if (window.myRadarChart) {
        window.myRadarChart.data.datasets[0].label = getRadarChartLabel();
        window.myRadarChart.update();
    }
}

// Aplicar idioma salvo ao carregar a página
document.addEventListener('DOMContentLoaded', function() {
    changeLanguage(currentLanguage);
});

// Perguntas e respostas do chatbot por idioma
const chatbotQA = {
    pt: {
        questions: [
            'Quais são suas principais habilidades como desenvolvedor Full-Stack?',
            'Como você lida com a otimização de performance em sistemas de alto tráfego?',
            'Quais metodologias e ferramentas você utiliza no desenvolvimento?',
            'Como você desenvolve e mantém APIs eficientes?',
            'Você já trabalhou com automação de processos?',
            'Quais tecnologias você usa para o desenvolvimento Front-End?',
            'Quais são seus últimos projetos?',
            'Você tem experiência com integrações de sistemas?',
            'Quais são suas certificações e formações na área de tecnologia?',
            'Onde posso saber mais sobre seu trabalho?'
        ],
        answers: {
            'Quais são suas principais habilidades como desenvolvedor Full-Stack?': 'Tenho expertise em Java + SpringBoot, PHP (Laravel, Lumen), JavaScript (React, Node.js), GoLang e Python. Minha experiência abrange desde a criação de RESTful APIs até a construção de interfaces reutilizáveis e escaláveis.',
            'Como você lida com a otimização de performance em sistemas de alto tráfego?': 'Tenho experiência na otimização de consultas SQL, uso de índices, cache e balanceamento de carga. Além disso, aplico boas práticas no desenvolvimento para melhorar a eficiência de sistemas com milhões de acessos.',
            'Quais metodologias e ferramentas você utiliza no desenvolvimento?': 'Trabalho com metodologias ágeis, versionamento com Git, conteinerização com Docker e implementação de testes unitários com PHPUnit. Também tenho experiência na refatoração de sistemas legados.',
            'Como você desenvolve e mantém APIs eficientes?': 'Sigo os princípios RESTful e utilizo frameworks como Laravel, Lumen e SpringBoot. Além disso, garanto segurança e escalabilidade aplicando boas práticas, autenticação JWT e otimização de queries.',
            'Você já trabalhou com automação de processos?': 'Sim! Desenvolvi scripts Python para automatizar tarefas como a atualização de arquivos Excel com cotações de moedas em tempo real, utilizando APIs e a biblioteca pandas.',
            'Quais tecnologias você usa para o desenvolvimento Front-End?': 'Utilizo React, HTML5, CSS3, JavaScript, Tailwind e Material UI. Também tenho experiência com Redux para gerenciamento de estado e React Router para navegação.',
            'Quais são seus últimos projetos?': 'Alguns dos meus últimos projetos incluem uma API RESTful com Java + SpringBoot, um sistema de controle de acesso a painéis PowerBI com PHP (Laravel) e um web scraper desenvolvido em GoLang. Também criei uma landing page para a Nike utilizando React.',
            'Você tem experiência com integrações de sistemas?': 'Sim! Já trabalhei com integrações entre APIs, sistemas de terceiros e bancos de dados, garantindo comunicação eficiente entre diferentes plataformas.',
            'Quais são suas certificações e formações na área de tecnologia?': 'Sou formado em Análise e Desenvolvimento de Sistemas (Estácio 2025) e possuo um curso técnico em Programação Web (SENAC 2021). Além disso, tenho diversas certificações em Laravel, NodeJS, React, Java e GoLang.',
            'Onde posso saber mais sobre seu trabalho?': 'Você pode visitar meu GitHub em github.com/EduardoFidalgo ou entrar em contato pelo WhatsApp através do botão no topo da página!'
        }
    },
    es: {
        questions: [
            '¿Cuáles son tus principales habilidades como desarrollador Full-Stack?',
            '¿Cómo manejas la optimización de rendimiento en sistemas de alto tráfico?',
            '¿Qué metodologías y herramientas utilizas en el desarrollo?',
            '¿Cómo desarrollas y mantienes APIs eficientes?',
            '¿Has trabajado con automatización de procesos?',
            '¿Qué tecnologías usas para el desarrollo Front-End?',
            '¿Cuáles son tus últimos proyectos?',
            '¿Tienes experiencia con integraciones de sistemas?',
            '¿Cuáles son tus certificaciones y formaciones en el área de tecnología?',
            '¿Dónde puedo saber más sobre tu trabajo?'
        ],
        answers: {
            '¿Cuáles son tus principales habilidades como desarrollador Full-Stack?': 'Tengo experiencia en Java + SpringBoot, PHP (Laravel, Lumen), JavaScript (React, Node.js), GoLang y Python. Mi experiencia abarca desde la creación de APIs RESTful hasta la construcción de interfaces reutilizables y escalables.',
            '¿Cómo manejas la optimización de rendimiento en sistemas de alto tráfico?': 'Tengo experiencia en la optimización de consultas SQL, uso de índices, caché y balanceo de carga. Además, aplico buenas prácticas en el desarrollo para mejorar la eficiencia de sistemas con millones de accesos.',
            '¿Qué metodologías y herramientas utilizas en el desarrollo?': 'Trabajo con metodologías ágiles, versionamiento con Git, contenedorización con Docker e implementación de pruebas unitarias con PHPUnit. También tengo experiencia en la refactorización de sistemas heredados.',
            '¿Cómo desarrollas y mantienes APIs eficientes?': 'Sigo los principios RESTful y utilizo frameworks como Laravel, Lumen y SpringBoot. Además, garantizo seguridad y escalabilidad aplicando buenas prácticas, autenticación JWT y optimización de queries.',
            '¿Has trabajado con automatización de procesos?': '¡Sí! Desarrollé scripts Python para automatizar tareas como la actualización de archivos Excel con cotizaciones de monedas en tiempo real, utilizando APIs y la biblioteca pandas.',
            '¿Qué tecnologías usas para el desarrollo Front-End?': 'Utilizo React, HTML5, CSS3, JavaScript, Tailwind y Material UI. También tengo experiencia con Redux para gestión de estado y React Router para navegación.',
            '¿Cuáles son tus últimos proyectos?': 'Algunos de mis últimos proyectos incluyen una API RESTful con Java + SpringBoot, un sistema de control de acceso a paneles PowerBI con PHP (Laravel) y un web scraper desarrollado en GoLang. También creé una landing page para Nike utilizando React.',
            '¿Tienes experiencia con integraciones de sistemas?': '¡Sí! He trabajado con integraciones entre APIs, sistemas de terceros y bases de datos, garantizando comunicación eficiente entre diferentes plataformas.',
            '¿Cuáles son tus certificaciones y formaciones en el área de tecnología?': 'Soy graduado en Análisis y Desarrollo de Sistemas (Estácio 2025) y tengo un curso técnico en Programación Web (SENAC 2021). Además, tengo diversas certificaciones en Laravel, NodeJS, React, Java y GoLang.',
            '¿Dónde puedo saber más sobre tu trabajo?': '¡Puedes visitar mi GitHub en github.com/EduardoFidalgo o contactarme por WhatsApp a través del botón en la parte superior de la página!'
        }
    },
    en: {
        questions: [
            'What are your main skills as a Full-Stack developer?',
            'How do you handle performance optimization in high-traffic systems?',
            'What methodologies and tools do you use in development?',
            'How do you develop and maintain efficient APIs?',
            'Have you worked with process automation?',
            'What technologies do you use for Front-End development?',
            'What are your latest projects?',
            'Do you have experience with system integrations?',
            'What are your certifications and training in technology?',
            'Where can I learn more about your work?'
        ],
        answers: {
            'What are your main skills as a Full-Stack developer?': 'I have expertise in Java + SpringBoot, PHP (Laravel, Lumen), JavaScript (React, Node.js), GoLang and Python. My experience ranges from creating RESTful APIs to building reusable and scalable interfaces.',
            'How do you handle performance optimization in high-traffic systems?': 'I have experience in SQL query optimization, use of indexes, cache and load balancing. Additionally, I apply best practices in development to improve the efficiency of systems with millions of accesses.',
            'What methodologies and tools do you use in development?': 'I work with agile methodologies, versioning with Git, containerization with Docker and implementation of unit tests with PHPUnit. I also have experience in refactoring legacy systems.',
            'How do you develop and maintain efficient APIs?': 'I follow RESTful principles and use frameworks like Laravel, Lumen and SpringBoot. Additionally, I ensure security and scalability by applying best practices, JWT authentication and query optimization.',
            'Have you worked with process automation?': 'Yes! I developed Python scripts to automate tasks such as updating Excel files with real-time currency quotes, using APIs and the pandas library.',
            'What technologies do you use for Front-End development?': 'I use React, HTML5, CSS3, JavaScript, Tailwind and Material UI. I also have experience with Redux for state management and React Router for navigation.',
            'What are your latest projects?': 'Some of my latest projects include a RESTful API with Java + SpringBoot, a PowerBI panel access control system with PHP (Laravel) and a web scraper developed in GoLang. I also created a landing page for Nike using React.',
            'Do you have experience with system integrations?': 'Yes! I have worked with integrations between APIs, third-party systems and databases, ensuring efficient communication between different platforms.',
            'What are your certifications and training in technology?': 'I graduated in Systems Analysis and Development (Estácio 2025) and have a technical course in Web Programming (SENAC 2021). Additionally, I have several certifications in Laravel, NodeJS, React, Java and GoLang.',
            'Where can I learn more about your work?': 'You can visit my GitHub at github.com/EduardoFidalgo or contact me via WhatsApp through the button at the top of the page!'
        }
    }
};

function updateChatbotOptions(lang) {
    const optionsContainer = document.getElementById('message-options');
    if (!optionsContainer) return;
    
    optionsContainer.innerHTML = '';
    chatbotQA[lang].questions.forEach(question => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'message-option';
        optionDiv.textContent = question;
        optionDiv.onclick = () => sendMessage(question);
        optionsContainer.appendChild(optionDiv);
    });
}

function getResponse(message) {
    const answers = chatbotQA[currentLanguage].answers;
    return answers[message] || (currentLanguage === 'pt' ? 'Desculpe, não entendi sua pergunta. Poderia reformular?' : 
                                 currentLanguage === 'es' ? 'Lo siento, no entendí tu pregunta. ¿Podrías reformularla?' :
                                 'Sorry, I didn\'t understand your question. Could you rephrase it?');
}

document.addEventListener("DOMContentLoaded", function () {
    const floatingMessage = document.getElementById("floatingMessage");
    const okButton = document.getElementById("okButton");
    const laterButton = document.getElementById("laterButton");
    const cacheKey = "feedback_last_seen";
    const delay = 15 * 60 * 1000; // 15 minutos em milissegundos

    // Verifica se já passou 15 minutos desde a última vez que o usuário fechou a mensagem
    const lastSeen = localStorage.getItem(cacheKey);
    if (lastSeen && Date.now() - parseInt(lastSeen) < delay) {
    floatingMessage.classList.add("hidden"); // Oculta imediatamente se estiver no tempo de cache
    } else {
    // Se o tempo de cache já passou, exibe a mensagem e inicia o temporizador de 10s
    setTimeout(() => hideFloatingMessage(), 20000);
    }

    // Evento para o botão "Deixar feedback"
    okButton.addEventListener("click", function () {
    hideFloatingMessage();
    localStorage.setItem(cacheKey, Date.now()); // Atualiza o cache com o timestamp atual
    var feedbackModal = new bootstrap.Modal(document.getElementById("feedbackModal"));
    feedbackModal.show();
    });

    // Evento para o botão "Depois"
    laterButton.addEventListener("click", function () {
    hideFloatingMessage();
    localStorage.setItem(cacheKey, Date.now()); // Atualiza o cache com o timestamp atual
    });

    // Função para esconder a mensagem com animação
    function hideFloatingMessage() {
    floatingMessage.classList.add("fade-out");
    setTimeout(() => floatingMessage.classList.add("hidden"), 500); // Aguarda o fade-out antes de remover
    }
});

const mobileScreen = window.matchMedia("(max-width: 992px)");

function toggleChat() {
    const chatbox = document.getElementById("chatbox");
    chatbox.style.display = chatbox.style.display === "none" || chatbox.style.display === "" ? "flex" : "none";
}

function filterMessages() {
    const filter = document.getElementById("message-filter").value.toLowerCase();
    const options = document.querySelectorAll(".message-option");

    options.forEach(option => {
    const text = option.textContent.toLowerCase();
    if (text.includes(filter)) {
        option.style.display = "block";
    } else {
        option.style.display = "none";
    }
    });
}

function sendMessage(message) {
    const chatbox = document.querySelector(".messagebox");
    const chatMessage = document.createElement("div");
    chatMessage.classList.add("chat-message");
    const userLabel = currentLanguage === 'pt' ? 'Você' : currentLanguage === 'es' ? 'Tú' : 'You';
    chatMessage.innerHTML = `<strong>${userLabel}:</strong> ${message}`;
    chatbox.appendChild(chatMessage);

    setTimeout(() => {
    const botMessage = document.createElement("div");
    botMessage.classList.add("chat-message");
    botMessage.innerHTML = `<strong>Chatbot:</strong> ${getResponse(message)}`;
    chatbox.appendChild(botMessage);

    // Faz o scroll para a última mensagem
    chatbox.scrollTop = chatbox.scrollHeight;
    }, 1000);
}


$(document).ready(function () {
    $('.custom-card').click(function () {
    var imgSrc = $(this).attr('data-img');
    $('#modalImage').attr('src', imgSrc);
    });
});

$(document).ready(function() {
    async function getCommitData() {
    const username = "EduardoFidalgo";
    const url = `https://api.github.com/search/commits?q=author:${username}`;

    const response = await fetch(url, {
        headers: { "Accept": "application/vnd.github.cloak-preview" } // Necessário para buscar commits
    });
    const data = await response.json();

    // Criar um mapa para contar commits por data
    const commitMap = new Map();

    data.items.forEach(commit => {
        const date = commit.commit.author.date.split("T")[0]; // Pega só a data (YYYY-MM-DD)
        commitMap.set(date, (commitMap.get(date) || 0) + 1);
    });

    // Converter para array ordenado
    const commitData = Array.from(commitMap.entries()).map(([date, commits]) => ({ date, commits }));

        return commitData.sort((a, b) => new Date(a.date) - new Date(b.date)); // Ordena por data
    }

    async function renderChart() {
    const commitData = await getCommitData();
    const ctx = document.getElementById("commitChart").getContext("2d");

    new Chart(ctx, {
        type: "line",
        data: {
        labels: commitData.map(d => d.date),
        datasets: [{
            label: "Commits por dia",
            data: commitData.map(d => d.commits),
            borderColor: "#00000075",
            fill: false,
            tension: 0.3 // Suaviza a linha do gráfico
        }]
        },
        options: {
        responsive: true,
        scales: {
            x: { title: { display: true, text: "Data" } },
            y: { title: { display: true, text: "Commits" } }
        }
        }
    });
    }

    renderChart();

    //////////////////////////////////////////

    var ctx = document.getElementById('myRadarChart').getContext('2d');
    
    window.myRadarChart = new Chart(ctx, {
    type: 'radar',
    data: {
        labels: ['PHP', 'JS', 'Python', 'GO', 'Java'],  // Linguagens que você usa
        datasets: [{
        label: getRadarChartLabel(),
        data: [100, 80, 30, 60, 40], // Percentuais de uso de cada linguagem
        backgroundColor: 'rgba(0, 255, 255, 0.3)',  // Cor de fundo da área em verde claro
        borderColor: 'rgba(0, 255, 255, 1)',  // Cor da borda em verde vibrante
        borderWidth: 2,
        pointBackgroundColor: '#00FF99',  // Pontos na borda das áreas (verde futurista)
        pointBorderColor: '#00FF99',
        pointHoverBackgroundColor: '#00FF99',
        pointHoverBorderColor: '#00FF99',
        }]
    },
    options: {
        scales: {
        r: {
            min: 0,
            max: 100,
            ticks: {
            stepSize: 20,
            display: false // Oculta os números do eixo para um design mais limpo
            },
            grid: {
            color: 'rgba(0, 255, 255, 0.2)',  // Cor da grade do radar
            },
            pointLabels: {
            font: {
                size: 16,  // 🔥 AUMENTA o tamanho das labels das linguagens
                weight: 'bold',
                family: 'Arial'
            },
            color: '#00FF99'  // Mantém o verde futurista para as labels das linguagens
            }
        }
        },
        elements: {
        line: {
            borderWidth: 3
        }
        },
        plugins: {
        legend: {
            position: 'top',
            labels: {
            font: {
                size: 14,
                family: 'Arial',
                weight: 'bold'
            },
            color: '#fff'  // Cor da legenda
            }
        }
        },
        responsive: true, // Mantém responsivo
        maintainAspectRatio: false // Permite ajustar automaticamente o tamanho
    }
    });
});

// Selecionar todas as bolinhas do cursor
const circles = document.querySelectorAll('.circle');

document.addEventListener('mousemove', e => {
    // Movimento das bolinhas do cursor
    gsap.to(circles, {
        x: e.clientX,
        y: e.clientY,
        stagger: 0.01, // Tempo entre as bolinhas
        duration: 0.1, // Tempo da animação
        ease: "power3.out"
    });
});

// Detectar quando o cursor está sobre um link
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('mouseenter', () => {
        // Alterar cor do cursor para ciano ao passar sobre link
        circles.forEach(circle => {
        circle.style.backgroundColor = '#00FF99';
        });
    });

    link.addEventListener('mouseleave', () => {
        // Voltar à cor original do cursor
        circles.forEach(circle => {
        circle.style.backgroundColor = 'rgba(163, 163, 163, 0.7)';
        });
    });
});

