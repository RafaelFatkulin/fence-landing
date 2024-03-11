const notifications = document.querySelectorAll('.notification')
const notificationButtons = document.querySelectorAll('.notification-button')

console.log(notifications)
console.log(notificationButtons)
notificationButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    notifications[index].classList.toggle('hidden')
  })
})
