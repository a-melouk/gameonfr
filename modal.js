//function to make the page responsive by adding a class to the topnav
function editNav() {
  var x = document.getElementById('myTopnav')
  if (x.className === 'topnav') {
    x.className += ' responsive'
  } else {
    x.className = 'topnav'
  }
}

const modal = document.querySelector('.bground')
const modalBtn = document.querySelectorAll('.modal-btn')
// const formData = document.querySelectorAll('.formData')

modalBtn.forEach(btn => btn.addEventListener('click', launchModal))

function launchModal() {
  modal.classList.remove('closed')
  modal.classList.add('opened')
}

function activeLink() {
  let navbar = document.querySelector('.main-navbar')
  let children = navbar.children
  for (let i = 1; i < 6; i++) {
    children[i].addEventListener('click', () => {
      for (let j = 1; j < 6; j++) children[j].classList.remove('active')
      children[i].classList.add('active')
    })
  }
}

function updateFooterYear() {
  let footer = document.querySelector('.copyrights')
  let date = new Date().getFullYear()
  footer.innerHTML = `Copyright 2014 - ${date}, GameOn Inc.`
}

function closeModal() {
  let closeBtn = document.querySelector('.close')
  closeBtn.addEventListener('click', () => {
    modal.classList.remove('opened')
    modal.classList.add('closed')
  })
}

activeLink()
updateFooterYear()
closeModal()

function makeErrorVisible(element, isVisible) {
  element.parentNode.setAttribute('data-error-visible', isVisible)
  return !isVisible
}

function validateNames(name) {
  let element = document.getElementById(name)
  let condition = /^[a-zA-Z]{2,}$/
  if (!condition.test(element.value)) return makeErrorVisible(element, true)
  else return makeErrorVisible(element, false)
}

function validateEmail() {
  let element = document.getElementById('email')
  let condition = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  if (!condition.test(element.value)) return makeErrorVisible(element, true)
  return makeErrorVisible(element, false)
}

function validateBirthdate() {
  let element = document.getElementById('birthdate')
  if (!element.value) return makeErrorVisible(element, true)
  else {
    let difference = (Date.now() - new Date(element.value)) / (1000 * 60 * 60 * 24 * 365)
    if (difference < 18) return makeErrorVisible(element, true)
    else return makeErrorVisible(element, false)
  }
}

function validateQuantity() {
  let element = document.getElementById('quantity')
  if (!element.value) return makeErrorVisible(element, true)
  else return makeErrorVisible(element, false)
}

function validateLocation() {
  let element = document.querySelectorAll('.checkbox-input[type="radio"]')
  let checked = Array.from(element).find(element => element.checked)

  if (!checked) return makeErrorVisible(element[0], true)
  else return makeErrorVisible(element[0], false)
}

function validateConditions() {
  let element = document.getElementById('checkbox1')

  if (!element.checked) return makeErrorVisible(element, true)
  else return makeErrorVisible(element, false)
}

document.querySelector('form[name="reserve"]').addEventListener('submit', e => {
  e.preventDefault()
  if (validateForm()) {
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

function validateForm() {
  let validFirst = validateNames('first')
  let validLast = validateNames('last')
  let validEmail = validateEmail()
  let validBirthdate = validateBirthdate()
  let validQuantity = validateQuantity()
  let validLocation = validateLocation()
  let validConditions = validateConditions()
  let validAll = [validFirst, validLast, validEmail, validBirthdate, validQuantity, validLocation, validConditions]
  if (validAll.includes(false)) return false
  else return true
}
