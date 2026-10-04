// Dropdowns do menu: hover no desktop, toque/clique no celular.
document.addEventListener('DOMContentLoaded', function () {
    const items = document.querySelectorAll('.nav-item');

    items.forEach(function (item) {
        const toggle = item.querySelector('.dropdown-toggle');
        if (!toggle) return;

        toggle.addEventListener('click', function (e) {
            e.preventDefault();
            const isOpen = item.classList.contains('open');
            items.forEach(function (i) { i.classList.remove('open'); });
            if (!isOpen) item.classList.add('open');
        });
    });

    document.addEventListener('click', function (e) {
        if (!e.target.closest('.nav-item')) {
            items.forEach(function (i) { i.classList.remove('open'); });
        }
    });
});
