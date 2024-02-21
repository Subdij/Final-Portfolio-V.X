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
}
