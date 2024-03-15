const mailForm = document.querySelector('.mail-form')
const name = document.querySelector('input[name="name"]')
const phone = document.querySelector('input[name="phone"]')
const email = document.querySelector('input[name="email"]')
const csrf = document.querySelector('input[name="_csrf"]').value
const agreement = document.querySelector('[name="agreement"]')
const sendEmailButton = document.querySelector('.email-button')
const mailLoader = document.querySelector('.mail-loader')
const nameErrorField = document.querySelector('.field-error-name')
const phoneErrorField = document.querySelector('.field-error-phone')
const emailErrorField = document.querySelector('.field-error-email')

const messageDialog = document.querySelector('#messageDialog')
const messageDialogText = document.querySelector('.message-dialog-text')

if (agreement) {
  agreement.addEventListener('change', () => {
    sendEmailButton.disabled = !agreement.checked
    sendEmailButton.classList.toggle('email-button-disabled')
  })
}

const handleError = (errorField, message) => {
  errorField.textContent = message
  if (message) errorField.classList.add('field-error-active')
  else errorField.classList.remove('field-error-active')
}

if (mailForm) {
  mailForm.addEventListener('submit', async (e) => {
    e.preventDefault()

    mailLoader.classList.add('mail-loader-active')

    handleError(nameErrorField, '')
    handleError(phoneErrorField, '')
    handleError(emailErrorField, '')

    await fetch(mailForm.action, {
      method: 'POST',
      mode: 'cors',
      referrerPolicy: 'strict-origin-when-cross-origin',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify({
        name: name.value,
        phone: phone.value,
        email: email.value,
        _csrf: csrf,
      }),
    })
      .then(async (response) => await response.json())
      .then((response) => {
        console.log(response)
        mailLoader.classList.remove('mail-loader-active')
        if (response.success) {
          window.messageDialog.showModal()
          document.body.classList.add('scroll-lock')
          messageDialogText.textContent = response.message
        } else {
          response.error.messages.forEach((message) => {
            if (message.field === 'name') handleError(nameErrorField, message.message)
            if (message.field === 'phone') handleError(phoneErrorField, message.message)
            if (message.field === 'email') handleError(emailErrorField, message.message)
          })
        }
      })
  })
}

messageDialog.addEventListener('close', () => {
  document.body.classList.remove('scroll-lock')
})
