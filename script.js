// Menu mobile (Hambúrguer)

let menuLista = document.querySelector('.nav-lista');
let linksMenu = menuLista.querySelectorAll("li");
let menuHamburguer = document.querySelector('.menu-hamburguer');

menuHamburguer.addEventListener("click", () => {
    menuLista.classList.toggle("active");
});

linksMenu.forEach(e => {
    e.addEventListener("click", () => {
        menuLista.classList.toggle("active");
    });
});


// Tema Claro e Escuro

function alternarTema() {
    let html = document.querySelector("html");
    let temaAtual = html.getAttribute("data-tema");
    let novoTema = temaAtual === "dark" ? "light" : "dark";
    html.setAttribute("data-tema", novoTema);
    alternarIconeTema();
}

function alternarIconeTema() {
    let icone = document.querySelector("#icone");
    if (icone.classList.contains("fa-moon")) {
        icone.classList.replace("fa-moon", "fa-sun");
    } else {
        icone.classList.replace("fa-sun", "fa-moon");
    }
}


// Formulário 

document.getElementById('contact-form').addEventListener('submit', function(evento) {
  evento.preventDefault();

  let status = document.getElementById('status'); 
  status.textContent = 'Enviando...';

  let templateParams = {
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


// Efeito do header ao rolar

function esperaAntesDeRodar(func, espera) {
    let idDoTimer;
    return function executedFunction(...args) {
        let later = () => {
            clearTimeout(idDoTimer);
            func(...args);
        };
        clearTimeout(idDoTimer);
        idDoTimer = setTimeout(later, espera);
    };
}

let janela = window;
let rolagemOtimizada = esperaAntesDeRodar(function () {
    let cabeçalho = document.querySelector('header');
    if (janela.scrollY > 100) {
        cabeçalho.style.backdropFilter = 'blur(10px)';
    } else {
        cabeçalho.style.backdropFilter = 'none';
    }
}, 10);

janela.addEventListener('scroll', rolagemOtimizada);



// Animação ao rolar

let opcoesObservador = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

let observador = new IntersectionObserver(function (entradas) {
    entradas.forEach(entrada => {
        if (entrada.isIntersecting) {
            entrada.target.style.animation = 'fadeInUp 0.6s ease forwards';
        }
    });
}, opcoesObservador);

document.addEventListener('DOMContentLoaded', function () {
    let animacao = document.querySelectorAll('.cartao-problema, .cartao-solucao, .cartao-acessibilidade');
    
    animacao.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        observador.observe(el);
    });
});
