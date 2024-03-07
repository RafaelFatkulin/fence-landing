import '@splidejs/splide/css'

import Splide from '@splidejs/splide'

new Splide('.works-splide', {
  type: 'loop',
  perPage: 1,
  pagination: true,
  autoplay: true,
}).mount()
