import '@splidejs/splide/css'

import Splide from '@splidejs/splide'

const key = '.works-splide'

const worksSplideContainer = document.querySelector(key)

if (worksSplideContainer) {
  new Splide(key, {
    type: 'loop',
    perPage: 1,
    pagination: true,
    autoplay: true,
    lazyLoad: 'sequential',
  }).mount()
}
