// Theme management functions
function openMenu() {
    document.getElementById("menu_aba").style.display = "block";
}

function closeMenu() {
    document.getElementById("menu_aba").style.display = "none";
}

function temaLim() {
    document.documentElement.style.setProperty('--cor-click', '#38184C');
    document.documentElement.style.setProperty('--cor-sombra', '#9b0a59');
    document.documentElement.style.setProperty('--cor-text', 'black');
    document.documentElement.style.setProperty('--cor-back1', '#CEF09D');
    document.documentElement.style.setProperty('--cor-back2', '#4f6a93');
    document.documentElement.style.setProperty('--md-sys-color-primary', '#38184C');
}

function temaInatel() {
    document.documentElement.style.setProperty('--cor-click', '#126ae2');
    document.documentElement.style.setProperty('--cor-sombra', '#0a599b');
    document.documentElement.style.setProperty('--cor-text', 'black');
    document.documentElement.style.setProperty('--cor-back1', '#edf2f4');
    document.documentElement.style.setProperty('--cor-back2', '#6a937a');
    document.documentElement.style.setProperty('--md-sys-color-primary', '#126ae2');
}

function temaDark() {
    const cores = {
        '--cor-click': '#CEF09D',
        '--cor-sombra': '#9b0a59',
        '--cor-text': 'white',
        '--cor-back1': '#38184C',
        '--cor-back2': '#4f6a93',
        '--md-sys-color-primary': '#CEF09D'
    };
    for (const [variavel, valor] of Object.entries(cores)) {
        document.documentElement.style.setProperty(variavel, valor);
    }
}

// Event data
const eventos = [
    {
        id: 1,
        title: 'Semana do Software 2025',
        date: '12/05',
        time: '10:00',
        location: 'Salão de Eventos',
        type: 'tech',
        description: 'Uma semana inteira dedicada à tecnologia e inovação, com palestras, workshops e hackathons.',
        image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800&h=400'
    },
    {
        id: 2,
        title: 'Workshop de IoT',
        date: '12/01',
        time: '08:00',
        location: 'Laboratório CS&I',
        type: 'tech',
        description: 'Workshop prático sobre Internet das Coisas e suas aplicações na indústria 4.0.',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800&h=400'
    },
    {
        id: 3,
        title: 'Festa dos Alunos 2025',
        date: '18/05',
        time: '19:00',
        location: 'Área Esportiva',
        type: 'cultural',
        description: 'Venha comemorar a melhor Festa dos Alunos de todos os tempos!',
        image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=800&h=400'
    },
    {
        id: 4,
        title: 'Feira de Oportunidades',
        date: '04/05',
        time: '10:00',
        location: 'Salão de Eventos',
        type: 'academic',
        description: 'Venha conhecer empresas e projetos com destaque na área da engenharia.',
        image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800&h=400'
    }
];

// Carousel functionality
let index = 0;
let carouselInterval;

function createCarouselCards() {
    const carousel = document.querySelector('.carousel');

    if (!carousel) return;

    // Clear existing content
    carousel.innerHTML = '';

    // Create cards from eventos data
    eventos.forEach(evento => {
        const card = document.createElement('div');
        card.className = 'card';

        card.innerHTML = `
        <img src="${evento.image}" style="width: 100%; border-radius: 8px;">
        <div class="info">
          <h3>${evento.title}</h3>
          <p>
            <span class="icon material-icons-outlined">event</span>${evento.date} • ${evento.time}
            <br>
            <span class="icon material-icons-outlined">place</span>${evento.location}
          </p>
          <p>${evento.description}</p>
        </div>
      `;

        carousel.appendChild(card);
    });
}

function updateCarousel() {
    const carousel = document.querySelector('.carousel');
    const cards = document.querySelectorAll('.card');

    if (!carousel || cards.length === 0) return;

    const cardWidth = cards[0].offsetWidth + 10; // Width + spacing
    carousel.style.transform = `translateX(-${index * cardWidth}px)`;
}

function nextCard() {
    const cards = document.querySelectorAll('.card');

    if (cards.length === 0) return;

    if (index < cards.length - 1) {
        index++;
    } else {
        index = 0; // Restart
    }

    updateCarousel();
}

function prevCard() {
    const cards = document.querySelectorAll('.card');

    if (cards.length === 0) return;

    if (index > 0) {
        index--;
    } else {
        index = cards.length - 1; // Go to last
    }

    updateCarousel();
}

function setupCarousel() {
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');

    if (nextBtn && prevBtn) {
        nextBtn.addEventListener('click', nextCard);
        prevBtn.addEventListener('click', prevCard);
    }

    // Auto advance every 5 seconds
    clearInterval(carouselInterval);
    carouselInterval = setInterval(nextCard, 5000);
}

// Initialize everything when DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    createCarouselCards();
    setupCarousel();

    // Apply default theme
    temaInatel();
});