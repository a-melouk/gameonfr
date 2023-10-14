function editNav() {
  var x = document.getElementById('myTopnav')
  if (x.className === 'topnav') {
    x.className += ' responsive'
  } else {
    x.className = 'topnav'
  }
}

// DOM Elements
const modal = document.querySelector('.bground')
const modalBtn = document.querySelectorAll('.modal-btn')
const formData = document.querySelectorAll('.formData')

// launch modal event
modalBtn.forEach(btn => btn.addEventListener('click', launchModal))

// launch modal form
function launchModal() {
  modal.classList.remove('closed')
  modal.classList.add('opened')
}

//Fonction pour changer la classe d'un lien quand il est cliqué
function active_link() {
  let navbar = document.querySelector('.main-navbar')
  let children = navbar.children
  for (let i = 1; i < 6; i++)
    children[i].addEventListener('click', () => {
      for (let j = 1; j < 6; j++) children[j].classList.remove('active')
      children[i].classList.add('active')
    })
}

//Fonction pour corriger le bug de l'année dans le footer
function footer_year() {
  let footer = document.querySelector('.copyrights')
  let date = new Date().getFullYear()
  footer.innerHTML = `Copyright 2014 - ${date}, GameOn Inc.`
}

//Fonction pour fermer la modal
function closeModal() {
  let close_btn = document.querySelector('.close')
  close_btn.addEventListener('click', () => {
    modal.classList.remove('opened')
    modal.classList.add('closed')
  })
}

active_link()
footer_year()
closeModal()

function validate_names(name) {
  let element = document.getElementById(name)
  let condition = /^[a-zA-Z]{2,}$/
  if (!condition.test(element.value)) {
    element.parentNode.setAttribute('data-error-visible', 'true')
    return false
  } else {
    element.parentNode.setAttribute('data-error-visible', 'false')
    return true
  }
}

function validate_email() {
  let element = document.getElementById('email')
  let condition = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  if (!condition.test(element.value)) {
    element.parentNode.setAttribute('data-error-visible', 'true')
    return false
  } else {
    element.parentNode.setAttribute('data-error-visible', 'false')
    return true
  }
}

function validate_birthdate() {
  let element = document.getElementById('birthdate')

  if (!element.value) {
    element.parentNode.setAttribute('data-error-visible', 'true')
    return false
  } else {
    let difference = (Date.now() - new Date(element.value)) / (1000 * 60 * 60 * 24 * 365)
    if (difference < 18) {
      element.parentNode.setAttribute('data-error-visible', 'true')
      return false
    } else element.parentNode.setAttribute('data-error-visible', 'false')
    return true
  }
}

function validate_quantity() {
  let element = document.getElementById('quantity')
  if (!element.value) {
    element.parentNode.setAttribute('data-error-visible', 'true')
    return false
  } else {
    element.parentNode.setAttribute('data-error-visible', 'false')
    return true
  }
}

function validate_location() {
  let element = document.querySelectorAll('.checkbox-input[type="radio"]')
  let checked = Array.from(element).find(element => element.checked)

  if (!checked) {
    element[0].parentNode.setAttribute('data-error-visible', 'true')
    return false
  } else {
    element[0].parentNode.setAttribute('data-error-visible', 'false')
    return true
  }
}

function validate_conditions() {
  let element = document.getElementById('checkbox1')

  if (!element.checked) {
    element.parentNode.setAttribute('data-error-visible', 'true')
    return false
  } else {
    element.parentNode.setAttribute('data-error-visible', 'false')
    return true
  }
}

document.querySelector('form[name="reserve"]').addEventListener('submit', e => {
  e.preventDefault()
  if (validate()) {
    let main = document.querySelector('main')
    let footer = document.querySelector('footer')
    main.innerHTML = ''
    main.classList.add('closed-form')
    footer.classList.add('closed-form')
    let confirmation = document.createElement('div')
    confirmation.classList.add('confirmation')
    main.appendChild(confirmation)
  }
})

function validate() {
  let valid_first = validate_names('first')
  let valid_last = validate_names('last')
  let valid_email = validate_email()
  let valid_birthdate = validate_birthdate()
  let valid_quantity = validate_quantity()
  let valid_location = validate_location()
  let valid_conditions = validate_conditions()
  let valid_all = [valid_first, valid_last, valid_email, valid_birthdate, valid_quantity, valid_location, valid_conditions]
  if (valid_all.includes(false)) return false
  else return true
}
