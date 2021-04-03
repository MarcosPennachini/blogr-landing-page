const accordionElement = document.querySelectorAll('.accordion-element');
const navContainer = document.querySelector('.header__nav--container');
const hamburguerMenu = document.querySelector('#menu');
const closeMenu = document.querySelector('#close');

document.addEventListener('DOMContentLoaded', () => {

    hamburguerMenu.addEventListener('click', () => {
        navContainer.style.display = 'flex';
        closeMenu.style.display = 'block';
        hamburguerMenu.style.display = 'none';
        open = true;
    })

    closeMenu.addEventListener('click', () => {
        navContainer.style.display = 'none';
        hamburguerMenu.style.display = 'block';
        closeMenu.style.display = 'none';
        open = false;
    })
    //Show menu on desktop
    let open = false;

    accordionElement.forEach( accordion => {
        accordion.addEventListener('click', () => {
            const arrow = accordion.querySelector('.header__nav__element--arrow-light');
            const accordionBody = accordion.querySelector('.header__nav__element--links');

            if (!open) {
                accordionBody.style.display = 'flex';
                accordionBody.style.animation = 'scaleUp 0.2s linear';
                accordionBody.style.opacity = '1';
                accordionBody.style.transform = 'scale(1)';
                arrow.style.transform = 'rotate(180deg)';
                open = true;
            } else {
                accordionBody.style.display = 'none';
                accordionBody.style.opacity = '0';
                accordionBody.style.transform = 'scale(0.0001)';
                arrow.style.transform = 'rotate(0deg)';
                open = false;
            }
        })
    })

    document.addEventListener('click', e => {
        if (!e.target.parentNode.classList.contains('header__nav__element--title')) {
            accordionElement.forEach( accordion => {
                const arrow = accordion.querySelector('.header__nav__element--arrow-light');
                const accordionBody = accordion.querySelector('.header__nav__element--links');
                accordionBody.style.display = 'none';
                accordionBody.style.opacity = '0';
                accordionBody.style.transform = 'scale(0.0001)';
                arrow.style.transform = 'rotate(0deg)';
                open = false;
            });
        } 
    })


})

