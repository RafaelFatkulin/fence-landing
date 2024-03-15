const detailsContainer = document.querySelector('.details-container')
let detailItems = document.querySelectorAll('.details-item')
const addDetail = document.querySelector('.add-detail')
const removeDetail = document.querySelector('.remove-detail')

const updateRemoveButtonVisibility = () => {
  detailItems = document.querySelectorAll('.details-item')

  if (detailItems.length > 1) {
    removeDetail.classList.remove('hidden')
  } else removeDetail.classList.add('hidden')
}

if (detailsContainer) {
  updateRemoveButtonVisibility()
  addDetail.addEventListener('click', () => {
    const detailItemClone = detailItems[0].cloneNode(true)
    const clonedInputs = detailItemClone.querySelectorAll('input')
    clonedInputs.forEach((input) => {
      input.value = ''
    })
    detailsContainer.append(detailItemClone)
    updateRemoveButtonVisibility()
  })

  removeDetail.addEventListener('click', () => {
    detailsContainer.removeChild(detailItems[detailItems.length - 1])
    updateRemoveButtonVisibility()
  })
}
