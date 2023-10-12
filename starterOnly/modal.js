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
/*

function validate_names(name) {
  let element = document.getElementById(name)
  let condition = /^[a-zA-Z]{2,}$/
  if (condition.test(element.value)) {
    element.style.border = '2px solid green'
  } else {
    element.style.border = '2px solid red'
    element.parentNode.attributes.push('data-error-visible')
    element.parentNode.attributes[element.parentNode.attributes.length - 1].value = 'true'
    console.log(element.parentNode.attributes)
    return false
  }
  return true
}

function validate_email() {
  let element = document.getElementById('email')
  let condition = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

  if (condition.test(element.value)) {
    element.style.border = '2px solid green'
  } else {
    element.style.border = '2px solid red'

    return false
  }
  return true
}

function validate_birthdate() {
  let birthdate = document.getElementById('birthdate')
  if (!birthdate.value) {
    document.getElementById('birthdateError').textContent = 'Vous devez entrer votre date de naissance.'
    birthdate.style.border = '2px solid red'
    return false
  }

  let today = new Date()
  let diff = today - new Date(birthdate.value)
  if (diff < 1000 * 60 * 60 * 24 * 365 * 18) {
    document.getElementById('birthdateError').textContent = 'Vous devez avoir 18 ans ou plus.'
    birthdate.style.border = '2px solid red'
    return false
  } else {
    birthdate.style.border = '2px solid green'
    return true
  }
}

function validate_quantity() {
  let quantity = document.getElementById('quantity')
  if (!quantity.value) {
    document.getElementById('quantityError').textContent = 'Vous devez entrer un nombre de concours.'
    quantity.style.border = '2px solid red'
    return false
  } else if (quantity.value < 0 || quantity.value > 99) {
    document.getElementById('quantityError').textContent = 'Vous devez entrer une valeur entre 0 et 99.'
    quantity.style.border = '2px solid red'
    return false
  } else {
    quantity.style.border = '2px solid green'
    return true
  }
}

function validate_location() {
  let location = document.querySelector('.checkbox-input:checked')
  if (location == null) {
    document.getElementById('locationError').textContent = 'Vous devez choisir un emplacement.'
    return false
  } else {
    return true
  }
}

function validate_conditions() {
  let conditions = document.getElementById('checkbox1').checked
  if (!conditions) {
    document.getElementById('conditionsError').textContent = 'Vous devez accepter les conditions dutilisation.'
    return false
  } else {
    return true
  }
}
*/

/*
document.getElementById('first').addEventListener('input', () => {
  validate_names('first')
})
document.getElementById('last').addEventListener('input', () => {
  validate_names('last')
})
document.getElementById('email').addEventListener('input', () => {
  validate_email()
})
document.getElementById('birthdate').addEventListener('input', () => {
  validate_birthdate()
})
document.getElementById('quantity').addEventListener('input', () => {
  validate_quantity()
})
document.getElementById('checkbox1').addEventListener('input', () => {
  validate_conditions()
})
document.querySelector('form[name="reserve"]').addEventListener('submit', e => {
  e.preventDefault()
  if (validate()) {
    document.querySelector('form[name="reserve"]').style.display = 'none'
    document.querySelector('form[name="reserve"]').innerHTML = '<h1>Merci !</h1>'
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
*/
