const notifications = document.querySelectorAll('.notification')
const notificationButtons = document.querySelectorAll('.notification-button')
notificationButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    notifications[index].classList.toggle('hidden')
  })
})
