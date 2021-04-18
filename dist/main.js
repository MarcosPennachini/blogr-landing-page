const accordionElement = document.querySelectorAll('.accordion-element');
const accordionBody = document.querySelectorAll('.accordion-body');
const navContainer = document.querySelector('.header__nav--container');
const hamburguerMenu = document.querySelector('#menu');
const closeMenu = document.querySelector('#close');
let open = false;

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
    

    accordionElement.forEach( item => {
        const selectedMenu = item.firstElementChild;
        console.log(selectedMenu)
        selectedMenu.addEventListener('click', toggleAccordion); 
    })

    function toggleAccordion(e){
        accordionBody.forEach( accordion => {
            const element = e.target.parentNode;
            const arrow = accordion.previousElementSibling.children[1];
            console.log(element)
            if (accordion == element.nextElementSibling){   
                console.log(accordion);
                if (!open) {
                    accordion.style.display = 'flex';
                    accordion.style.animation = 'scaleUp 0.2s linear';
                    accordion.style.opacity = '1';
                    accordion.style.transform = 'scale(1)';
                    arrow.classList.add('rotate');
                    open = true;
                } else {
                    accordion.style.display = 'none';
                    accordion.style.opacity = '0';
                    accordion.style.transform = 'scale(0.0001)';
                    arrow.classList.remove('rotate');
                    open = false;
                }
            } else {
                accordion.style.display = 'none';
                accordion.style.opacity = '0';
                accordion.style.transform = 'scale(0.0001)';
                arrow.classList.remove('rotate');
            }
        })
    }

    document.addEventListener('click', e => {
        const target = e.target.parentNode.classList.contains('header__nav__element--title');
        if (!target && open === true) {
            accordionElement.forEach( accordion => {
                const arrow = accordion.querySelector('.header__nav__element--arrow-light');
                const accordionBody = accordion.querySelector('.header__nav__element--links');
                accordionBody.style.display = 'none';
                accordionBody.style.opacity = '0';
                accordionBody.style.transform = 'scale(0.0001)';
                arrow.classList.remove('rotate');
                open = false;
            });
        }
    })


})

