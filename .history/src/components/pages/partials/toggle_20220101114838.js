const menu = document.querySelector('.menu');

function toggle() {
    menu.classList.contains('open') ? menu.classList.remove('open') : menu.classList.add('open');
}

menu.addEventListener('click', toggle);