const worksToDeleteForm = document.querySelector('.works-to-delete-form')
const worksDeleteBtn = document.querySelector('.works-to-delete-button')
const worksToDeleteLabels = document.querySelectorAll('.works-to-delete-label')
const worksToDeleteInputs = document.querySelectorAll('.works-to-delete-input')
const worksToDeleteImages = document.querySelectorAll('.works-to-delete-image')

const countCheckedInputs = () => {
  return [...worksToDeleteInputs].filter((input) => input.checked).length
}

if (worksToDeleteForm) {
  worksToDeleteInputs.forEach((input, index) => {
    input.addEventListener('change', () => {
      worksToDeleteLabels[index].classList.toggle('!border-primary')
      worksToDeleteImages[index].classList.toggle('!scale-110')

      if (countCheckedInputs() > 0) {
        worksDeleteBtn.classList.remove('hidden')
      } else {
        worksDeleteBtn.classList.add('hidden')
      }
    })
  })
}
