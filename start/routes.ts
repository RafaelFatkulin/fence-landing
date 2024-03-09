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
const GeneralController = () => import('#controllers/general_controller')
const CatalogController = () => import('#controllers/catalog_controller')
const SalesController = () => import('#controllers/sales_controller')
const WorksController = () => import('#controllers/works_controller')
const ReviewsController = () => import('#controllers/reviews_controller')
const SessionController = () => import('#controllers/session_controller')

router.on('/').render('pages/home').as('home')
router.on('/agreement').render('pages/agreement').as('agreement')

router.on('/dashboard').redirect('/dashboard/general')

router
  .group(() => {
    router.get('/dashboard/general', [GeneralController, 'index']).as('general.index')
    // CATALOG
    router.get('/dashboard/catalog', [CatalogController, 'index']).as('catalog.index')
    // SALES
    router.get('/dashboard/sales', [SalesController, 'index']).as('sales.index')
    // WORKS
    router.get('/dashboard/works', [WorksController, 'index']).as('works.index')
    // Reviews
    router.get('/dashboard/reviews', [ReviewsController, 'index']).as('reviews.index')
  })
  .use(middleware.auth())

router.get('/login', [SessionController, 'create']).use(middleware.guest()).as('login')
router.post('/login', [SessionController, 'store']).as('login.post')
router.post('/logout', [SessionController, 'destroy']).as('logout')
