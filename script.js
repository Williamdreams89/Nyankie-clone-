const nav__toggler = document.querySelector('.nav__toggler');
const mobile__menu = document.querySelector('.mobile__navMenu');
const close__button = document.querySelector('.close__button');

// const userSubmenu = document.querySelector(".user__submenu")
// const userIcon = document.querySelector(".user")

if(nav__toggler){
    nav__toggler.addEventListener('click', ()=>{
        mobile__menu.classList.add('show__mobileMenu')
    })
}

if(close__button){
    close__button.addEventListener('click', ()=>{
        mobile__menu.classList.remove('show__mobileMenu')
    })
}


// userIcon.addEventListener('mouseenter', ()=>{
//         userSubmenu.style.display = "block"
// })

// userIcon.addEventListener('mouseleave', ()=>{
//         userSubmenu.style.display = "none"
// })
    