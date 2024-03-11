import '@splidejs/splide/css'

import Splide from '@splidejs/splide'

const key = '.sales-splide'

const salesSplideContainer = document.querySelector(key)

if (salesSplideContainer) {
  new Splide(key, {
    type: 'loop',
    perPage: 1,
    pagination: false,
    autoplay: true,
  }).mount()
}
