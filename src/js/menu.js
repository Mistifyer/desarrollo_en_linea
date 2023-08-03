const btnMenu = document.querySelector('#btnMenu');
const menu = document.querySelector('#menu');
btnMenu.addEventListener('click', function() {
    menu.classList.toggle('mostrar');
});

const subMenuBtn = document.querySelectorAll('.submenu__btn');
for(let i=0; i<subMenuBtn.length; i++) {
    subMenuBtn[i].addEventListener('click', function() {
        if(window.innerWidth < 1024) {
            const header__submenu = this.nextElementSibling;
            const height = header__submenu.scrollHeight;

            if(header__submenu.classList.contains('desplegar')){
                header__submenu.classList.remove('desplegar');
                header__submenu.removeAttribute('style');
            } else {
            header__submenu.classList.add('desplegar');
            header__submenu.style.height = height + 'px';
            }
        }
    });
}