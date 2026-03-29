/* Auhtor: Marouane Chtitou */

(function(d) {
    const nav = d.querySelector('.header-nav ul');
    const btn = d.querySelector('.burger-menu');

    if (nav && btn) {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            nav.classList.toggle('show');
        });
    }
})(document);