function editNav() {
  var x = document.getElementById('myTopnav')
  if (x.className === 'topnav') {
    x.className += ' responsive'
  } else {
    x.className = 'topnav'
  }
}

// DOM Elements
const modalbg = document.querySelector('.bground')
const modalBtn = document.querySelectorAll('.modal-btn')
const formData = document.querySelectorAll('.formData')

// launch modal event
modalBtn.forEach(btn => btn.addEventListener('click', launchModal))

// launch modal form
function launchModal() {
  modalbg.style.display = 'block'
}

//Fonction pour changer la classe d'un lien quand il est cliqué
function active_link() {
  let navbar = document.querySelector('.main-navbar')
  let children = navbar.children
  for (let i = 0; i < 5; i++)
    children[i].addEventListener('click', () => {
      for (let j = 0; j < 5; j++) children[j].classList.remove('active')
      children[i].classList.add('active')
    })
}

//Fonction pour corriger le bug de l'année dans le footer
function footer_year() {
  let footer = document.querySelector('.copyrights')
  let date = new Date().getFullYear()
  footer.innerHTML = `Copyright 2014 - ${date}, GameOn Inc.`
}

footer_year()
active_link()
