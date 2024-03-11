/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import { middleware } from '#start/kernel'
const LandingController = () => import('#controllers/landing_controller')
const GeneralController = () => import('#controllers/general_controller')
const CatalogController = () => import('#controllers/catalog_controller')
const SalesController = () => import('#controllers/sales_controller')
const WorksController = () => import('#controllers/works_controller')
const ReviewsController = () => import('#controllers/reviews_controller')
const SessionController = () => import('#controllers/session_controller')

router.group(() => {
  router.get('/', [LandingController, 'index']).as('home')
  router.get('/agreement', [LandingController, 'agreement']).as('agreement')
})

router
  .group(() => {
    router.get('/general', [GeneralController, 'index']).as('general.index')
    router
      .post('/general/updatePhone', [GeneralController, 'updatePhone'])
      .as('general.phone.update')
    router
      .post('/general/updateSocials', [GeneralController, 'updateSocials'])
      .as('general.socials.update')

    // CATALOG
    router.get('/catalog', [CatalogController, 'index']).as('catalog.index')
    // SALES
    router.get('/sales', [SalesController, 'index']).as('sales.index')
    // WORKS
    router.get('/works', [WorksController, 'index']).as('works.index')

    // Reviews
    router.get('/reviews', [ReviewsController, 'index']).as('reviews.index')
    router.get('/reviews/new', [ReviewsController, 'new']).as('reviews.new')
    router.get('/reviews/edit', [ReviewsController, 'edit']).as('reviews.edit')

    // Redirect
    router.on('/').redirect('/dashboard/general')
  })
  .prefix('/dashboard')
  .use(middleware.auth())

router.get('/login', [SessionController, 'create']).use(middleware.guest()).as('login')
router.post('/login', [SessionController, 'store']).as('login.post')
router.post('/logout', [SessionController, 'destroy']).as('logout')
