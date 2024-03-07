import '@splidejs/splide/css'

import Splide from '@splidejs/splide'

new Splide('.sales-splide', {
  type: 'loop',
  perPage: 1,
  pagination: false,
  autoplay: true,
}).mount()
