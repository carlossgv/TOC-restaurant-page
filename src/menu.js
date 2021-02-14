const menuLoad = () => {
    const completeTabs = document.querySelector('.complete-tabs')
    const menuDiv = document.createElement('div')
    menuDiv.classList.add('tab-info')
    menuDiv.classList.add('menu-div')
    menuDiv.classList.add('active')

    const title = document.createElement('h2')
    title.innerHTML = 'Look at our menu!'

    const menuImage = document.createElement('img')
    menuImage.src = 'https://i.pinimg.com/originals/b7/6c/c1/b76cc128a34c9ce5a88cb09d2985cf2d.jpg'
    menuImage.id = 'menu-img'

    menuDiv.appendChild(title)
    menuDiv.appendChild(menuImage)

    completeTabs.appendChild(menuDiv)
}


export default menuLoad;