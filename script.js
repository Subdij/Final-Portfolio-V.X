function openMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('open');
}


function filterProjects(category) {
    const items = document.querySelectorAll('.item');

    items.forEach(item => {
        const itemCategories = item.classList;

        if (category === 'all' || itemCategories.contains(category)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });

    const allTab = document.getElementById('tab1');
    if (category !== 'all' && allTab.checked) {
        allTab.checked = false;
    }
}

const sr = ScrollReveal();

sr.reveal('.left', {
    origin: 'left',
    distance: '50px',
    duration: 1000,
    easing: 'ease-in-out',
});

sr.reveal('.right', {
    origin: 'right',
    distance: '50px',
    duration: 1000,
    easing: 'ease-in-out',
});

sr.reveal('.skills .skill-items .item', {
    origin: 'bottom',
    distance: '20px',
    duration: 1000,
    easing: 'ease-in-out',
});

sr.reveal('.portfolio .portfo-items .item', {
    origin: 'bottom',
    distance: '20px',
    duration: 1000,
    easing: 'ease-in-out',
});

sr.reveal('.about .left', {
    origin: 'left',
    distance: '50px',
    duration: 1000,
    easing: 'ease-in-out',
});

sr.reveal('.about .right', {
    origin: 'right',
    distance: '50px',
    duration: 1000,
    easing: 'ease-in-out',
});

sr.reveal('.feedback .customers .item', {
    origin: 'bottom',
    distance: '20px',
    duration: 1000,
    easing: 'ease-in-out',
});

sr.reveal('.social-links', {
    origin: 'bottom',
    distance: '20px',
    duration: 1000,
    easing: 'ease-in-out',
});
