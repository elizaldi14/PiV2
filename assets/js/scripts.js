//Evento para header del home
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    const container = document.querySelector('.container');
    const containerOffset = container.offsetTop + container.offsetHeight;

    if (window.scrollY > containerOffset) {
        header.classList.add('bg-active');
    } else {
        header.classList.remove('bg-active');
    }
});

//Evento de ScrollBar
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    var btn = document.querySelector('.scroll-top-btn');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
}

function scrollToTop() {
    document.body.scrollTop = 0; // Para Safari
    document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE y Opera
}
