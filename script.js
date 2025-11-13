/*
Menu Mobile (Hambúrguer)
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
Tema (Claro e Escuro)
*/
function alternarTema() {
    const html = document.querySelector("html");
    const temaAtual = html.getAttribute("data-tema");
    const novoTema = temaAtual === "dark" ? "light" : "dark";
    html.setAttribute("data-tema", novoTema);
    alternarIconeTema();
}

function alternarIconeTema() {
    const icone = document.querySelector("#icone");
    if (icone.classList.contains("fa-moon")) {
        icone.classList.replace("fa-moon", "fa-sun");
    } else {
        icone.classList.replace("fa-sun", "fa-moon");
    }
}

/*
Formulário 
*/
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const status = document.getElementById('status'); 
  status.textContent = 'Enviando...';

  const templateParams = {
    from_name: document.getElementById('nome').value,
    from_email: document.getElementById('email').value,
    subject: document.getElementById('assunto').value,
    message: document.getElementById('mensagem').value,
    to_email: 'saquacaresaquarema@gmail.com' 
  };

  emailjs.send('service_pu4hx1p', 'template_1e2zmhy', templateParams) 
    .then(function(response) {
      status.textContent = 'Deu tudo certo';
      status.style.color = 'green';
      document.getElementById('contact-form').reset();
    }, function(error) {
      status.textContent = 'Deu erro: ' + error.text;
      status.style.color = 'red';
    });
});

/*
Efeito do Header ao Rolar
*/
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
Animação ao Rolar
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

document.addEventListener('DOMContentLoaded', function () {
    const elementosAnimar = document.querySelectorAll('.cartao-problema, .cartao-solucao, .cartao-acessibilidade');
    
    elementosAnimar.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        observador.observe(el);
    });
});
