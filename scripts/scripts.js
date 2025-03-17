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
    chatMessage.innerHTML = `<strong>Você:</strong> ${message}`;
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

function getResponse(message) {
    switch (message) {
    case 'Quais são suas principais habilidades como desenvolvedor Full-Stack?':
        return `Tenho expertise em Java + SpringBoot, PHP (Laravel, Lumen), JavaScript (React, Node.js), GoLang e Python. Minha experiência abrange desde a criação de RESTful APIs até a construção de interfaces reutilizáveis e escaláveis.`;

    case 'Como você lida com a otimização de performance em sistemas de alto tráfego?':
        return `Tenho experiência na otimização de consultas SQL, uso de índices, cache e balanceamento de carga. Além disso, aplico boas práticas no desenvolvimento para melhorar a eficiência de sistemas com milhões de acessos.`;

    case 'Quais metodologias e ferramentas você utiliza no desenvolvimento?':
        return `Trabalho com metodologias ágeis, versionamento com Git, conteinerização com Docker e implementação de testes unitários com PHPUnit. Também tenho experiência na refatoração de sistemas legados.`;

    case 'Como você desenvolve e mantém APIs eficientes?':
        return `Sigo os princípios RESTful e utilizo frameworks como Laravel, Lumen e SpringBoot. Além disso, garanto segurança e escalabilidade aplicando boas práticas, autenticação JWT e otimização de queries.`;

    case 'Você já trabalhou com automação de processos?':
        return `Sim! Desenvolvi scripts Python para automatizar tarefas como a atualização de arquivos Excel com cotações de moedas em tempo real, utilizando APIs e a biblioteca pandas.`;

    case 'Quais tecnologias você usa para o desenvolvimento Front-End?':
        return `Utilizo React, HTML5, CSS3, JavaScript, Tailwind e Material UI. Também tenho experiência com Redux para gerenciamento de estado e React Router para navegação.`;

    case 'Quais são seus últimos projetos?':
        return `Alguns dos meus últimos projetos incluem uma API RESTful com Java + SpringBoot, um sistema de controle de acesso a painéis PowerBI com PHP (Laravel) e um web scraper desenvolvido em GoLang. Também criei uma landing page para a Nike utilizando React.`;

    case 'Você tem experiência com integrações de sistemas?':
        return `Sim! Já trabalhei com integrações entre APIs, sistemas de terceiros e bancos de dados, garantindo comunicação eficiente entre diferentes plataformas.`;

    case 'Quais são suas certificações e formações na área de tecnologia?':
        return `Sou formado em Análise e Desenvolvimento de Sistemas (Estácio 2025) e possuo um curso técnico em Programação Web (SENAC 2021). Além disso, tenho diversas certificações em Laravel, NodeJS, React, Java e GoLang.`;

    default:
        return `Desculpe, não entendi sua pergunta. Poderia reformular?`;
    }
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
    var myRadarChart = new Chart(ctx, {
    type: 'radar',
    data: {
        labels: ['PHP', 'JS', 'Python', 'GO', 'Java'],  // Linguagens que você usa
        datasets: [{
        label: 'Percentual de uso das linguagens (%)',
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
