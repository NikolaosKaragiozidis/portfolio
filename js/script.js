function showOffCanvasMenu(){
    document.querySelector('.hamburger-nav-off-canvas').classList.toggle('--active');
}

document.querySelectorAll('.hamburger-icon').forEach(icon => icon.addEventListener('click', showOffCanvasMenu));
