const stageItems = document.querySelectorAll('.stage-item')
const stageItemsTexts = document.querySelectorAll('.stage-item__text')
const stageText = document.querySelector('.stage-text')

const changeStageText = (text) => {
  stageText.innerText = text
}

if (window.screen.width > 991) {
  stageItems.forEach((item, index) => {
    item.addEventListener('mouseover', () => changeStageText(stageItemsTexts[index].innerText))
  })
}
