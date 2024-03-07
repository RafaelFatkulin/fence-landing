import '@splidejs/splide/css'

import Splide from '@splidejs/splide'

const createSplide = () =>
  new Splide('.reviews-splide', {
    type: 'loop',
    perPage: window.screen.width > 767 ? 2 : 1,
    gap: 24,
    pagination: false,
    autoplay: true,
  }).mount()

let reviewsSplider = createSplide()

window.addEventListener('resize', () => {
  reviewsSplider.destroy()

  reviewsSplider = createSplide()
})
