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
    router.get('/catalog/new', [CatalogController, 'new']).as('catalog.new')
    router.get('/catalog/:id/edit', [CatalogController, 'edit']).as('catalog.edit')
    // SALES
    router.get('/sales', [SalesController, 'index']).as('sales.index')
    router.get('/sales/new', [SalesController, 'new']).as('sales.new')
    router.post('/sales/create', [SalesController, 'create']).as('sales.create')
    router.get('/sales/:id/edit', [SalesController, 'edit']).as('sales.edit')
    router.delete('/sales/:id/delete', [SalesController, 'delete']).as('sales.delete')
    router.put('/sales/:id/update', [SalesController, 'update']).as('sales.update')
    // WORKS
    router.get('/works', [WorksController, 'index']).as('works.index')
    router.post('/works/create', [WorksController, 'create']).as('works.create')
    router.post('/works/delete', [WorksController, 'deleteWorks']).as('works.deleteWorks')

    // Reviews
    router.get('/reviews', [ReviewsController, 'index']).as('reviews.index')
    router.get('/reviews/new', [ReviewsController, 'new']).as('reviews.new')
    router.post('/reviews/create', [ReviewsController, 'create']).as('reviews.create')
    router.get('/reviews/:id/edit', [ReviewsController, 'edit']).as('reviews.edit')
    router.post('/reviews/:id/update', [ReviewsController, 'update']).as('reviews.update')
    router.delete('/reviews/:id/delete', [ReviewsController, 'delete']).as('reviews.delete')

    // Redirect
    router.on('/').redirect('/dashboard/general')
  })
  .prefix('/dashboard')
  .use(middleware.auth())

router.get('/login', [SessionController, 'create']).use(middleware.guest()).as('login')
router.post('/login', [SessionController, 'store']).as('login.post')
router.post('/logout', [SessionController, 'destroy']).as('logout')
