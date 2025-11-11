/*
* ======================================
* Menu Mobile Toggle (Hambúrguer)
* ======================================
*/
const navLista = document.querySelector('.nav-lista');
const linksMenu = navLista.querySelectorAll("li");
const menuHamburguer = document.querySelector('.menu-hamburguer');

menuHamburguer.addEventListener("click", () => {
    navLista.classList.toggle("active");
});

linksMenu.forEach(e => {
    e.addEventListener("click", () => {
        navLista.classList.toggle("active");
    });
});

/*
* ======================================
* Theme Toggle (Dark/Light Mode)
* ======================================
*/
// Função traduzida de 'toggleTheme'
function alternarTema() {
    const html = document.querySelector("html");
    // Atributo traduzido de 'data-theme' para 'data-tema'
    const temaAtual = html.getAttribute("data-tema");
    const novoTema = temaAtual === "dark" ? "light" : "dark";
    html.setAttribute("data-tema", novoTema);
    alternarIconeTema();
}

// Função traduzida de 'toggleThemeIcon'
function alternarIconeTema() {
    // ID traduzido de '#icon' para '#icone'
    const icone = document.querySelector("#icone");
    if (icone.classList.contains("fa-moon")) {
        icone.classList.replace("fa-moon", "fa-sun");
    } else {
        icone.classList.replace("fa-sun", "fa-moon");
    }
}

/*
* ======================================
* Formulário de Contato (Formspree)

VOU TIRAR ISSO DEPOIS
* ======================================
*/
// Função traduzida de 'handleSubmit'
function enviarFormulario(event) {
    event.preventDefault();

    const form = event.target;
    const dadosForm = new FormData(form);

    fetch(form.action, {
        method: 'POST',
        body: dadosForm,
        headers: {
            'Accept': 'application/json'
        }
    })
        .then(resposta => {
            if (resposta.ok) {
                alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
                form.reset();
            } else {
                throw new Error('Erro no envio');
            }
        })
        .catch(erro => {
            alert('Erro ao enviar mensagem. Tente novamente.');
            console.error('Erro:', erro);
        });
}

/*
* ======================================
* Efeito do Header ao Rolar (Otimizado)
* ======================================
*/
// Função 'debounce' (termo técnico mantido)
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Handler traduzido
const rolagemOtimizada = debounce(function () {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.backdropFilter = 'none';
    }
}, 10);

window.addEventListener('scroll', rolagemOtimizada);


/*
* ======================================
* Animação ao Rolar (Intersection Observer)
* ======================================
*/
const opcoesObservador = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observador = new IntersectionObserver(function (entradas) {
    entradas.forEach(entrada => {
        if (entrada.isIntersecting) {
            entrada.target.style.animation = 'fadeInUp 0.6s ease forwards';
        }
    });
}, opcoesObservador);

// Observa os elementos para animar
document.addEventListener('DOMContentLoaded', function () {
    // Classes traduzidas
    const elementosAnimar = document.querySelectorAll('.cartao-problema, .cartao-solucao, .cartao-acessibilidade');
    
    elementosAnimar.forEach(el => {
        // Prepara os elementos para a animação
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        observador.observe(el);
    });
});