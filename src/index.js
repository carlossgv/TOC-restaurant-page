import pageLoad from './initial-module'
import menuLoad from './menu'
import contactLoad from './contact'

window.onload = () => {
    
    pageLoad();
    menuLoad();
    contactLoad();

    const menuDiv = document.querySelector('.menu-div')
    const menuTab = document.querySelector('#tab-menu')

    const contactDiv = document.querySelector('.contact-div')
    const contactTab = document.querySelector('#tab-contact')

    contactTab.addEventListener('click', ()=> {
        menuDiv.style.display = 'none'
        menuDiv.classList.remove('active')
        menuTab.classList.remove('active')
        
        contactDiv.style.display = 'block'
        contactDiv.classList.add('active')
        contactTab.classList.add('active')
    })

    menuTab.addEventListener('click', ()=> {
        contactDiv.style.display = 'none'
        contactDiv.classList.remove('active')
        contactTab.classList.remove('active')

        menuDiv.style.display = 'block'
        menuDiv.classList.add('active')
        menuTab.classList.add('active')
    })

}